# Piyush Wiki: Engineering Technical Specification (Tech Spec)

**Document Version:** 1.0.0  
**Status:** Approved for Implementation  
**Author:** Lead Systems Architect & Engineering Staff  
**Target Systems:** Desktop (Electron / Next.js Desktop Host), Web (Localhost / PWA), Local Backend (FastAPI Python Runtime)  

---

## 1. Document Overview & System Architecture Summary

### 1.1 System Vision & Constraints
Piyush Wiki is a single-user, local-first, offline-first personal knowledge platform. It blends the semantic organization of Wikipedia, the plain-text longevity of Obsidian, and modern hybrid AI search capabilities (RAG).

```
+-----------------------------------------------------------------------------------+
|                                  CLIENT LAYER                                     |
|  +-----------------------------------------------------------------------------+  |
|  |                 Next.js 14 Web / Electron Client App                         |  |
|  |  +-------------------+  +--------------------+  +-------------------------+  |  |
|  |  | WYSIWYG / MD      |  | Canvas Graph       |  | TanStack Query &        |  |  |
|  |  | Editor (Tiptap)   |  | Visualizer (Pixi)  |  | Zustand Store           |  |  |
|  |  +-------------------+  +--------------------+  +-------------------------+  |  |
|  |  +-----------------------------------------------------------------------+  |  |
|  |  | Local SQLite / IndexedDB Storage Engine (Wa-SQLite / RxDB client-side)  |  |  |
|  |  +-----------------------------------------------------------------------+  |  |
|  +-----------------------------------------------------------------------------+  |
+---------------------------------------------------+-------------------------------+
                                                    | Local IPC / HTTP Loopback
+---------------------------------------------------+-------------------------------+
|                                  LOCAL BACKEND                                    |
|  +-----------------------------------------------------------------------------+  |
|  |                         FastAPI Core Service                                |  |
|  |  +-------------------+  +--------------------+  +-------------------------+  |  |
|  |  | File Watcher      |  | Markdown Engine    |  | Hybrid RAG & Vector     |  |  |
|  |  | (watchfiles)      |  | (Unified / Python) |  | Engine (sqlite-vec)     |  |  |
|  |  +-------------------+  +--------------------+  +-------------------------+  |  |
|  |  +-----------------------------------------------------------------------+  |  |
|  |  | SQLite Vault Database (FTS5 + Graph Nodes/Edges + Vector Embeddings)  |  |  |
|  |  +-----------------------------------------------------------------------+  |  |
|  +-----------------------------------------------------------------------------+  |
+---------------------------------------------------+-------------------------------+
                                                    | Atomic OS File I/O
+---------------------------------------------------+-------------------------------+
|                             LOCAL FILE SYSTEM VAULT                               |
|  01_RAW/  |  02_NODES/  |  03_MOC/  |  .piyush/  |  _assets/  |  *.md Files          |
+-----------------------------------------------------------------------------------+
```

---

## 2. Subsystem Specifications

### 2.1 Subsystem 1: File Engine & Storage Adapter

#### Purpose
Manages low-level atomic read/write operations, filesystem events, vault structure verification, and lock-free access to Markdown files and raw media assets.

#### Responsibilities
- Execute zero-data-loss atomic writes (`tmp_file -> fsync -> replace`).
- Parse and maintain path normalizations (Windows backslashes vs. POSIX forward slashes).
- Provide streaming access for large binary assets (`_assets/`).
- Enforce Obsidian vault compatibility (preserving frontmatter formatting).

#### Dependencies
- Node.js `fs/promises` / Python `aiofiles` & `pathlib`.
- Operating System File System APIs (POSIX, Win32).

#### Interfaces
```typescript
interface IFileEngine {
  readFile(path: string): Promise<string>;
  atomicWriteFile(path: string, content: string, expectedHash?: string): Promise<WriteResult>;
  safeDelete(path: string): Promise<void>;
  renameOrMove(oldPath: string, newPath: string): Promise<MoveResult>;
  getFileHash(path: string): Promise<string>;
}
```

#### Failure Modes
- **File System Lock Collision:** File locked by external editor or backup software.
- **Disk Full / Storage Exceeded:** Partial writes during file update.
- **Concurrent Disk Modification:** File modified on disk while user is editing in app.

#### Recovery Strategy
- Use temporary `.tmp` extensions during write, executing `atomic_rename`. If write fails, the original remains untouched.
- Hash-driven Optimistic Concurrency Control (OCC). If expected content hash mismatches on write, trigger conflict resolution mode instead of overwriting.

#### Performance Expectations
- Sequential Read: > 450 MB/s.
- Single File Atomic Write Latency: < 4 ms.
- Batch Write (100 files): < 150 ms.

#### Testing Strategy
- Unit tests with mock OS filesystems using `memfs` / Python `pyfakefs`.
- Chaos tests injecting write interruptions, storage limits, and read-only attributes.

#### Future Extensibility
- Support for virtual filesystems (e.g., encrypted vault files, remote WebDAV / S3 mounts).

---

### 2.2 Subsystem 2: Markdown AST & Transclusion Engine

#### Purpose
Parses plain-text Markdown files into a unified Abstract Syntax Tree (AST), extracts custom Wiki syntax (`[[Link]]`, `![[Embed]]`), performs live transclusion, and compiles to HTML/React components.

#### Responsibilities
- Parse standard CommonMark, GFM, YAML Frontmatter, and Obsidian extensions.
- Resolve transclusions (`![[Note#Section]]`) recursively up to a depth limit of 5.
- Render MathJax/KaTeX math blocks (`$ ... $`, `$$ ... $$`) and Mermaid diagrams.

#### Dependencies
- `unified`, `remark-parse`, `remark-gfm`, `remark-math`, `rehype-katex`, `rehype-stringify`.

#### Interfaces
```typescript
interface IMarkdownEngine {
  parseToAST(markdown: string): MarkdownAST;
  extractWikiLinks(ast: MarkdownAST): ExtractedLink[];
  renderASTToHTML(ast: MarkdownAST, context: TransclusionContext): Promise<string>;
  resolveTransclusion(targetPath: string, heading?: string): Promise<TranscludedNode>;
}
```

#### Failure Modes
- **Circular Transclusion:** Note A embeds Note B, which embeds Note A.
- **Deep Nesting:** Infinite recursion causing stack overflow.
- **Malformed Markdown:** Syntax error breaking parser compilation.

#### Recovery Strategy
- Track visited node paths during AST traversal. If a node is visited twice in the same render tree, insert a visual error node (`[Circular Transclusion Detected: Note A]`).
- Hard limit recursive transclusions to a maximum depth of 5.

#### Performance Expectations
- AST parsing speed: < 2 ms for a 5,000-word Markdown document.
- Full HTML Compilation with Transclusion: < 15 ms.

#### Testing Strategy
- AST snapshot testing against a test suite of 500 edge-case Markdown documents.
- Cycle detection unit tests for circular transclusions.

#### Future Extensibility
- Custom directive plugins for interactive widgets (e.g., inline flashcards, interactive calculators).

---

### 2.3 Subsystem 3: Metadata, Frontmatter & Graph Engine

#### Purpose
Extracts schema-compliant frontmatter metadata, parses tags, generates two-way backlink indexes, and maintains the global interactive Vault Graph.

#### Responsibilities
- Validate frontmatter against system schemas (YAML validation).
- Maintain forward links (`A -> B`) and reverse links (`B <- A`) in SQLite.
- Compute global graph structures (Degree centrality, Local clusters, Orphan nodes).

#### Dependencies
- `gray-matter`, `zod`, SQLite FTS5 + relational tables.

#### Interfaces
```typescript
interface IGraphEngine {
  indexDocument(path: string, content: string): Promise<IndexingResult>;
  getBacklinks(path: string): Promise<BacklinkRecord[]>;
  getGlobalGraph(): Promise<GraphData>;
  getLocalGraph(path: string, depth: number): Promise<GraphData>;
}
```

#### Failure Modes
- **Invalid YAML Frontmatter:** Indentation error breaks frontmatter parsing.
- **Orphan Link Drift:** Target file renamed without backlink index update.

#### Recovery Strategy
- Fall back to raw content indexing when frontmatter parsing fails, logging a YAML schema warning without dropping the document.
- Trigger automatic backlink index healing during idle background workers.

#### Performance Expectations
- Single Document Re-indexing: < 5 ms.
- Global Graph Generation (10,000 nodes, 50,000 edges): < 120 ms.

#### Testing Strategy
- Relational integrity tests validating edge updates on node rename/delete.
- Benchmark tests measuring graph data serializing for 50,000 edges.

#### Future Extensibility
- Dynamic visual graph clustering using community detection algorithms (e.g., Louvain method).

---

### 2.4 Subsystem 4: Vector Store & Semantic Search Subsystem

#### Purpose
Generates dense vector embeddings for document chunks and provides hybrid BM25 + Vector semantic search capabilities.

#### Responsibilities
- Chunk Markdown documents cleanly along semantic boundaries (headers, paragraphs).
- Store embeddings locally in SQLite using `sqlite-vec`.
- Perform k-NN (k-Nearest Neighbors) cosine similarity search.

#### Dependencies
- `sqlite-vec`, `fastembed-js` / Python `onnxruntime` + `fastembed`.

#### Interfaces
```typescript
interface IVectorSubsystem {
  generateEmbeddings(textChunks: string[]): Promise<number[][]>;
  storeEmbeddings(docId: string, chunks: ChunkEmbedding[]): Promise<void>;
  queryVectorSearch(vector: number[], topK: number): Promise<VectorSearchResult[]>;
  deleteDocEmbeddings(docId: string): Promise<void>;
}
```

#### Failure Modes
- **ONNX Runtime Engine Crash:** Out-of-memory error during batch embedding generation.
- **Vector Dimension Mismatch:** Model change resulting in mixed 384-dim and 768-dim vectors.

#### Recovery Strategy
- Batch embedding generation in micro-chunks of 16 items.
- Maintain `embedding_model_version` tag in database. On model upgrade, invalidate index and queue background re-embedding.

#### Performance Expectations
- Vector Search Query Latency (100,000 chunks): < 25 ms.
- Local Embedding Generation (CPU): > 40 chunks/sec.

#### Testing Strategy
- Cosine similarity verification tests against standard benchmarks.
- Storage size assertion tests checking `sqlite-vec` memory footprint.

#### Future Extensibility
- Quantized embeddings (int8/binary quantization) to reduce RAM consumption by 75%.

---

### 2.5 Subsystem 5: Hybrid AI Infrastructure & RAG Pipeline

#### Purpose
Orchestrates Retrieval-Augmented Generation (RAG), prompt compilation, model routing (Local Ollama vs. Cloud APIs), and stream generation.

#### Responsibilities
- Context selection via Reciprocal Rank Fusion (RRF) of Keyword + Semantic results.
- Dynamic prompt template compilation with token budgeting guardrails.
- Stream LLM responses back to the client interface via Server-Sent Events (SSE).

#### Dependencies
- `langchain` / `llama-index` lightweight primitives, `httpx`, `tiktoken`.

#### Interfaces
```typescript
interface IRAEPipeline {
  queryRAG(userQuery: string, options: RAGOptions): AsyncGenerator<RAGChunk, void, unknown>;
  assembleContext(retrievedDocs: SearchResult[], maxTokens: number): CompiledContext;
  switchProvider(config: ProviderConfig): Promise<boolean>;
}
```

#### Failure Modes
- **Local Model Unreachable:** Ollama service offline or unresponsive.
- **Context Length Exceeded:** Prompt exceeds model context window.
- **Cloud API Quota / Rate Limit:** 429 Error returned from remote API.

#### Recovery Strategy
- Fallback chain: Primary Local LLM -> Secondary Cloud LLM -> Deterministic Error Notice.
- Automatic context pruning: Truncate lower-ranked retrieved chunks until context token count fits within budget.

#### Performance Expectations
- Time-to-First-Token (TTFT) Local: < 450 ms.
- TTFT Cloud API: < 350 ms.
- Streaming Throughput: > 30 tokens/sec.

#### Testing Strategy
- Retrieval recall & precision testing (MTEB benchmark subset).
- Mock stream response testing handling network disconnects mid-stream.

#### Future Extensibility
- Multi-agent reasoning chains and automated synthesis note generation.

---

### 2.6 Subsystem 6: Synchronization & Offline Queue Engine

#### Purpose
Handles multi-device database state synchronization, offline action queuing, and conflict-free delta reconciliation.

#### Responsibilities
- Track local mutations in an append-only offline action log (`IndexedDB`).
- Synchronize files and metadata with remote targets (Git, S3, WebDAV, or Cloud Sync Server).
- Perform 3-way text merging or CRDT resolution for concurrent note edits.

#### Dependencies
- `diff-match-patch`, `automerge` / `yjs` (optional CRDT layer), `simple-git`.

#### Interfaces
```typescript
interface ISyncEngine {
  enqueueMutation(mutation: FileMutation): Promise<void>;
  processSyncQueue(): Promise<SyncReport>;
  resolveConflict(localFile: string, remoteFile: string, baseFile: string): ConflictResult;
}
```

#### Failure Modes
- **Network Interruption:** Connection dropped mid-sync operation.
- **Diverged File States:** Simultaneous edit on two devices without common ancestor.

#### Recovery Strategy
- Store mutations idempotently. Re-try failed queue items using exponential backoff.
- On unresolvable conflict, create a conflict file (`NoteName (Conflict 2026-08-06).md`), preserving both versions for user review.

#### Performance Expectations
- Queue Processing Rate: > 100 operations/sec.
- Sync Overhead: < 500 KB data transferred per typical 10-note update.

#### Testing Strategy
- Simulated network failure tests (random drop rate 0-100%).
- Concurrent mutation stress tests with 1,000 synthetic multi-device edits.

#### Future Extensibility
- End-to-end encrypted (E2EE) zero-knowledge vault synchronization.

---

### 2.7 Subsystem 7: Editor, Renderer & UI State Engine

#### Purpose
Provides a responsive, distraction-free Wikipedia/Obsidian style visual editor with live markdown rendering and global UI state orchestration.

#### Responsibilities
- Render WYSIWYG / Source mode markdown editing experience.
- Manage tab states, sidebars, panel positions, and theme settings.
- Maintain undo/redo buffer and autosave triggers.

#### Dependencies
- `@tiptap/react`, `@tiptap/pm`, `zustand`, `@tanstack/react-query`.

#### Interfaces
```typescript
interface IEditorState {
  activeDocumentPath: string | null;
  editorMode: 'wysiwyg' | 'source' | 'preview';
  isDirty: boolean;
  contentBuffer: string;
  setMode(mode: 'wysiwyg' | 'source' | 'preview'): void;
  updateBuffer(content: string): void;
}
```

#### Failure Modes
- **Browser Memory Leak:** Unbounded DOM nodes in long documents.
- **Unsaved State Loss:** User closes tab or window during active edit.

#### Recovery Strategy
- Virtualize long documents and code blocks.
- Synchronize content updates to `IndexedDB` draft storage on every keystroke (debounced 300ms) before writing to OS disk (debounced 1000ms).

#### Performance Expectations
- Input Latency (Keystroke to Screen): < 8 ms.
- Initial Editor Mount Time: < 45 ms.

#### Testing Strategy
- End-to-end Cypress/Playwright keystroke typing tests.
- Visual regression tests for rendered typography and math equations.

#### Future Extensibility
- Live multi-cursor collaborative editing (Yjs over WebSockets).

---

### 2.8 Subsystem 8: Plugin & Extension Runtime Host

#### Purpose
Executes third-party extensions safely in an isolated execution context, providing bounded access to vault APIs.

#### Responsibilities
- Load, register, and unregister user plugins.
- Provide sandboxed IPC channels for UI commands, status bar items, and custom parser rules.

#### Dependencies
- Web Workers / iframe sandbox, `quickjs-emscripten` (optional hardened isolation).

#### Interfaces
```typescript
interface IPluginHost {
  loadPlugin(manifest: PluginManifest): Promise<PluginInstance>;
  unloadPlugin(pluginId: string): Promise<void>;
  registerCommand(command: PluginCommand): void;
  executeHook(hookName: string, payload: unknown): Promise<unknown>;
}
```

#### Failure Modes
- **Plugin Infinite Loop:** Plugin blocks main process thread.
- **Unauthorized FS Access:** Plugin attempts reading arbitrary host filesystem paths outside vault.

#### Recovery Strategy
- Enforce strict API boundary: plugins access vault only through exposed RPC functions.
- Monitor plugin execution times; terminate and disable any worker thread exceeding 3,000ms execution timeout.

#### Performance Expectations
- Plugin Initialization Time: < 20 ms per plugin.
- IPC Call Overhead: < 1.5 ms.

#### Testing Strategy
- Security sandbox escape tests verifying file isolation.
- Plugin lifecycle tests verifying clean memory release on unload.

#### Future Extensibility
- Extension marketplace with code signature verification and permissions prompts.

---

## 3. Detailed Implementation Decisions

### 3.1 Frontend Architecture
- **Framework:** Next.js 14 App Router, configured for static output export (`output: 'export'`) when wrapped in Electron, or hosted as a local React single-page interface.
- **State Management:** `Zustand` for atomic synchronous UI state (sidebar open, selected theme, active tab). `TanStack Query (v5)` for server-state caching, asynchronous file fetching, and revalidation.
- **Styling & Design System:** Vanilla CSS + CSS Modules using CSS custom properties for dark/light Wikipedia themes. `Tailwind CSS` for utility layouts.
- **Typography:** `Inter` (UI interface text), `Lora` or `Merriweather` (Wikipedia serif reading mode), `JetBrains Mono` (Code & Markdown source).

### 3.2 Backend Engine
- **Runtime & Framework:** Python 3.11+ with `FastAPI` running on `uvicorn` (loopback `127.0.0.1:8000`).
- **Database Engine:** Embedded `SQLite3` with `FTS5` (full-text search) and `sqlite-vec` (vector similarity search extension compiled for host target).
- **Concurrency Model:** Python `asyncio` event loop handling HTTP endpoints and file watching tasks asynchronously. ThreadPoolExecutor (4 workers) dedicated to CPU-bound tasks (ONNX embedding calculations, AST parsing).

### 3.3 Markdown Parsing, Transclusion & Custom Directives
- **Parser Stack:** `Unified.js` engine pipeline:
  - `remark-parse` -> `remark-frontmatter` -> `remark-gfm` -> `remark-wiki-link` (custom) -> `remark-math` -> `remark-rehype` -> `rehype-katex` -> `rehype-stringify`.
- **Wiki Link Syntax:** `[[Page Title]]` and `[[Page Title|Display Text]]`.
- **Transclusion Syntax:** `![[Page Title]]` inserts target note AST into host note render tree. `![[Page Title#Section]]` inserts specific heading subtree.

### 3.4 File Watching & FS Event Pipeline
- **Watcher Library:** `watchfiles` (Python backend using OS rust-based `notify`) and `chokidar` (Client fallback).
- **Event Debouncing & Batching:** Incoming raw filesystem events are buffered over a 300ms window to absorb batch modifications (e.g., `git checkout` or bulk file copy).
- **Event Pipeline Flow:**
```
[FS Event: Modify file.md] ---> [300ms Debounce Window] ---> [Deduplicate Events]
                                                                     |
                                                                     v
                                                          [File Hash Inspection]
                                                                     |
  +------------------------------------------------------------------+
  | (Hash Changed)
  v
[Read Content] ---> [Parse Frontmatter & Links] ---> [Update SQLite Graph Engine]
                                                                     |
                                                                     v
                                                          [Update FTS5 & Embeddings]
```

### 3.5 Metadata & Frontmatter Parsing
- **Frontmatter Format:** Strict YAML format bounded by standard triple-dashed lines (`---`).
- **Frontmatter Schema Validation:** Enforced via `Zod` schemas on Frontend and `Pydantic v2` models on Backend.

```yaml
id: "550e8400-e29b-41d4-a716-446655440000"
title: "Quantum Mechanics"
type: "atomic-note"
status: "active"
created: "2026-08-06T14:30:00Z"
modified: "2026-08-06T18:12:00Z"
tags:
  - physics
  - quantum-theory
aliases:
  - QM
  - Quantum Theory
owner_moc: "Physics MOC"
confidence: 85
source:
  url: "https://wikipedia.org/wiki/Quantum_mechanics"
```

### 3.6 Wiki Links & Backlinks Generation
- **Index Tables:**
  - `nodes`: `(id, path, title, hash, updated_at)`
  - `aliases`: `(alias, node_id)`
  - `edges`: `(source_node_id, target_title_or_alias, target_node_id, context_snippet)`
- **Resolution Strategy:** When `[[Target Note]]` is indexed, the backend checks `nodes.title` or `aliases.alias`. If matched, `target_node_id` is linked. If not matched, `target_node_id` remains `NULL` (uncreated/ghost link).

### 3.7 Graph Generation & Layout Engine
- **Engine Selection:** `Pixi.js` 2D WebGL canvas engine for high-performance rendering (up to 20,000 elements at 60 FPS).
- **Layout Algorithm:** Barnes-Hut force-directed graph simulation executed inside a dedicated Web Worker to prevent UI thread stuttering.
- **Node Classification:** Color-coded visual cues:
  - **Blue:** MOC Notes (`03_MOC/`).
  - **Green:** Permanent Atomic Notes (`02_NODES/`).
  - **Gray:** Raw Captures & Unprocessed Notes (`01_RAW/`).
  - **Dashed Red:** Ghost Nodes (linked notes that do not yet exist).

### 3.8 Search Indexing & BM25 / Vector Hybrid Search
- **BM25 Keyword Search:** Implemented using SQLite `FTS5` extension with Porter Stemming and unicode61 tokenizer.
- **Vector Semantic Search:** Implemented via `sqlite-vec` extension storing 384-dimensional dense vectors generated by `bge-small-en-v1.5`.
- **Hybrid Fusion (RRF Algorithm):**
$$\text{RRF\_Score}(d) = \frac{1}{60 + r_{\text{BM25}}(d)} + \frac{1}{60 + r_{\text{Vector}}(d)}$$
Final search results are sorted by combined `RRF_Score`.

### 3.9 Embeddings & Vector Management
- **Default Embedded Model:** `BAAI/bge-small-en-v1.5` running locally via ONNX Runtime inside Python backend.
- **Chunking Strategy:** Heading-Aware Chunking. Documents are split at `#`, `##`, `###` headers. Chunks exceeding 512 tokens are sub-split on paragraph boundaries with a 50-token overlap.

### 3.10 Caching Strategy
- **Layer 1 (Client Memory):** Zustand & TanStack Query cache active note ASTs and rendered HTML string snippets in RAM.
- **Layer 2 (Client Storage):** `IndexedDB` stores editor draft state, offline mutation logs, and cached graph layout configurations.
- **Layer 3 (Backend Memory):** Python LRU cache (`@lru_cache(maxsize=1024)`) retains rendered HTML and file hashes.
- **Layer 4 (Backend Storage):** SQLite caches pre-computed FTS indexes, backlinks, and vector embeddings.

### 3.11 Media Handling & Asset Management
- **Storage Location:** All attached media (images, PDFs, audio clips) are saved in the vault root folder `_assets/`.
- **Asset Naming Convention:** Hash-based content addressing:  
  `_assets/{SHA256_HASH_PREFIX8}_{ORIGINAL_FILENAME}`.
- **Deduplication:** Uploading the same image across multiple notes reuses the existing asset in `_assets/`.

### 3.12 Authentication & Security Boundaries
- **Threat Model:** Single-user local application execution. No public network listener.
- **Loopback Binding:** FastAPI backend binds strictly to `127.0.0.1`.
- **API Token Verification:** Upon startup, backend generates an in-memory ephemeral access token (`PIYUSH_WIKI_SECRET`) written to a local runtime file (`.piyush/runtime.json`). Client requests include this token in the `Authorization: Bearer <TOKEN>` header.

### 3.13 Version History, Undo/Redo & Snapshot Engine
- **Local Git Integration:** Behind the scenes, the vault is a standard Git repository managed via `GitPython` / `simple-git`.
- **Snapshot Triggers:**
  - Automatic commit on user manual save (`Ctrl+S` / `Cmd+S`).
  - Periodic background commit every 30 minutes if files were modified.
- **Undo Buffer:** In-memory stack for active editor tab (up to 100 keystroke transactions).

### 3.14 Autosave & Recovery System
- **Keystroke Autosave:** Editor content is written to client `IndexedDB` draft buffer 300ms after last keystroke.
- **Disk Flush:** Editor content flushes to OS filesystem Markdown file 1,000ms after last keystroke.
- **Crash Recovery:** On app startup, the client checks if `IndexedDB` draft timestamp is newer than disk file `mtime`. If newer, prompts user to recover unsaved changes.

### 3.15 Error Handling, Structured Logging & Telemetry
- **Telemetry:** Strictly 100% Zero-Telemetry. No tracking pixels, remote analytics, or telemetry ping requests exist.
- **Structured Logging:** Backend logs use `structlog` formatting JSON output to local log files (`.piyush/logs/app.log`).
- **Log Rotation:** Daily rotation with 7-day retention (max log folder size: 100 MB).

### 3.16 Background Workers & Async Processing
- **Task Queue:** Lightweight in-process Python `asyncio` Queue combined with a `ThreadPoolExecutor`.
- **Worker Jobs:**
  - Indexing newly created/modified files.
  - Generating ONNX embeddings for new text chunks.
  - Performing periodic backlink integrity sweeps.

### 3.17 Configuration Management
- **Config Hierarchy (Highest to Lowest Priority):**
  1. UI Settings Modal Overrides (saved in `.piyush/config.json`).
  2. Environment Variables (`PIYUSH_WIKI_*`).
  3. Default Fallback Configuration.
- **Validation:** Pydantic schema validation at application initialization.

### 3.18 Plugin Loading & IPC Sandbox
- **Plugin Manifest (`plugin.json`):** Defines `id`, `name`, `version`, `main` (JS bundle path), and requested `permissions`.
- **Execution Host:** Web Worker thread executing JavaScript plugins isolated from DOM access.
- **RPC Bridge:** Structured `postMessage` protocol passing serialized commands (`REGISTER_COMMAND`, `MODIFY_CONTENT`, `FETCH_METADATA`).

---

## 4. Library Selection Matrix

| Subsystem | Library Selected | Alternatives Evaluated | Primary Selection Justification | Trade-offs & Performance |
|---|---|---|---|---|
| **Frontend Framework** | `Next.js 14 (App Router)` | Vite + React SPA, SvelteKit | SSR capability for local web mode + SSG export capability for Electron bundle. | Larger initial build footprint vs pure Vite. |
| **WYSIWYG Editor** | `@tiptap/react` (ProseMirror) | Slate.js, Monaco Editor, Lexical | Proven stability, robust extension architecture, native Markdown ecosystem. | ProseMirror document model requires custom mapping to AST. |
| **Backend Framework** | `FastAPI` (Python 3.11) | Express.js (Node), Axum (Rust) | Native integration with AI/ML ecosystems (PyTorch, ONNX, LangChain). | Higher memory baseline than Rust (~60MB vs ~8MB). |
| **Database Engine** | `SQLite3` + `sqlite-vec` | PostgreSQL, DuckDB, LanceDB | Single-file zero-configuration database matching local-first file vault paradigm. | Concurrency limited to single-writer (resolved via WAL mode). |
| **Markdown Parsing** | `Unified.js` (Remark/Rehype) | markdown-it, marked | Complete AST transformation pipeline, massive plugin ecosystem. | Slightly higher bundle size and parsing overhead vs `marked`. |
| **Local Embedding Engine** | `FastEmbed` (ONNX Runtime) | PyTorch / SentenceTransformers | Lightweight execution without heavy PyTorch dependency (~200MB vs ~2.5GB). | Fixed model loading options compared to full HuggingFace stack. |
| **Graph Visualizer** | `Pixi.js (v8)` | D3.js, Cytoscape.js, Vis.js | Hardware-accelerated WebGL 2D rendering handling >10k nodes smoothly at 60 FPS. | Higher API complexity for simple network diagrams compared to D3. |
| **Client State Manager** | `Zustand` | Redux Toolkit, Recoil, Jotai | Minimal boilerplate, unopinionated, excellent TypeScript support, zero-wrapper overhead. | Manual discipline required to prevent unnecessary selector re-renders. |

---

## 5. Complete API Contracts & Interface Schemas

### 5.1 General Requirements
- **Base URL:** `http://127.0.0.1:8000/api/v1`
- **Headers Required:** `Content-Type: application/json`, `Authorization: Bearer <PIYUSH_WIKI_SECRET>`
- **Error Response Format:**
```json
{
  "error": {
    "code": "FILE_NOT_FOUND",
    "message": "The note path '02_NODES/non_existent.md' could not be located in the vault.",
    "details": { "path": "02_NODES/non_existent.md" },
    "timestamp": "2026-08-06T18:30:00Z"
  }
}
```

---

### 5.2 Vault Operations Endpoint

#### `GET /api/v1/vault/tree`
- **Description:** Returns the hierarchical directory tree of the vault.
- **Response 200 OK:**
```json
{
  "root": "/",
  "total_files": 420,
  "tree": [
    {
      "name": "01_RAW",
      "type": "directory",
      "path": "01_RAW",
      "children": [
        {
          "name": "capture.md",
          "type": "file",
          "path": "01_RAW/capture.md",
          "size_bytes": 1420,
          "updated_at": "2026-08-06T12:00:00Z"
        }
      ]
    }
  ]
}
```

#### `GET /api/v1/notes/read`
- **Query Parameters:** `path=02_NODES/quantum_mechanics.md`
- **Response 200 OK:**
```json
{
  "path": "02_NODES/quantum_mechanics.md",
  "hash": "a1b2c3d4e5f6...",
  "frontmatter": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Quantum Mechanics",
    "type": "atomic-note",
    "status": "active",
    "tags": ["physics", "quantum"]
  },
  "raw_content": "---\nid: 550e8400...\n---\n# Quantum Mechanics\n...",
  "ast": { "type": "root", "children": [] }
}
```

#### `POST /api/v1/notes/write`
- **Request Body:**
```json
{
  "path": "02_NODES/quantum_mechanics.md",
  "content": "---\ntitle: Quantum Mechanics\n---\nUpdated content...",
  "expected_hash": "a1b2c3d4e5f6..."
}
```
- **Response 200 OK:**
```json
{
  "success": true,
  "path": "02_NODES/quantum_mechanics.md",
  "new_hash": "f6e5d4c3b2a1...",
  "written_at": "2026-08-06T18:32:10Z"
}
```
- **Errors:** `409 Conflict` (Hash mismatch), `400 Bad Request` (Invalid Frontmatter Schema).

---

### 5.3 Graph & Metadata Endpoint

#### `GET /api/v1/graph/global`
- **Response 200 OK:**
```json
{
  "nodes": [
    { "id": "02_NODES/qm.md", "title": "Quantum Mechanics", "type": "atomic-note", "group": "NODES" },
    { "id": "02_NODES/physics.md", "title": "Physics", "type": "moc", "group": "MOC" }
  ],
  "edges": [
    { "source": "02_NODES/qm.md", "target": "02_NODES/physics.md", "label": "belongs_to" }
  ]
}
```

#### `GET /api/v1/notes/backlinks`
- **Query Parameters:** `path=02_NODES/quantum_mechanics.md`
- **Response 200 OK:**
```json
{
  "target_path": "02_NODES/quantum_mechanics.md",
  "backlinks": [
    {
      "source_path": "03_MOC/physics_moc.md",
      "source_title": "Physics MOC",
      "context_snippet": "...overview of [[Quantum Mechanics]] and its principles..."
    }
  ]
}
```

---

### 5.4 Search & AI Endpoints

#### `POST /api/v1/search/hybrid`
- **Request Body:**
```json
{
  "query": "superposition in physics",
  "limit": 10,
  "filters": {
    "tags": ["physics"],
    "folder": "02_NODES"
  }
}
```
- **Response 200 OK:**
```json
{
  "query": "superposition in physics",
  "total_results": 2,
  "results": [
    {
      "path": "02_NODES/quantum_superposition.md",
      "title": "Quantum Superposition",
      "score": 0.0312,
      "snippet": "Quantum superposition states that a physical system...",
      "match_type": "hybrid_rrf"
    }
  ]
}
```

#### `POST /api/v1/ai/rag-stream`
- **Request Body:**
```json
{
  "prompt": "Explain Quantum Superposition based on my vault notes.",
  "max_tokens": 1024,
  "temperature": 0.3,
  "provider": "local_ollama"
}
```
- **Response:** Server-Sent Events (`text/event-stream`).
```text
data: {"type": "context", "sources": ["02_NODES/quantum_superposition.md"]}

data: {"type": "token", "content": "Quantum "}

data: {"type": "token", "content": "superposition "}

data: {"type": "done"}
```

---

## 6. State Management & Data Synchronization Architecture

### 6.1 State Hierarchy Topology

```
+-------------------------------------------------------------------------------+
|                             CLIENT STATE LAYOUT                               |
|                                                                               |
|  +-------------------------------------------------------------------------+  |
|  | Zustand Store (UI Ephemeral State)                                      |  |
|  | - Sidebar toggle, Active tab ID, Active layout, Theme preferences        |  |
|  +-------------------------------------------------------------------------+  |
|                                     |                                         |
|  +-------------------------------------------------------------------------+  |
|  | TanStack Query Cache (Async Vault Data & API Responses)                 |  |
|  | - File ASTs, Backlink records, Search result sets, Graph network payload   |  |
|  +-------------------------------------------------------------------------+  |
|                                     |                                         |
|  +-------------------------------------------------------------------------+  |
|  | IndexedDB Store (Client Local Persistence)                              |  |
|  | - Keystroke draft buffer, Unsent sync queue, Cached vector embeddings    |  |
|  +-------------------------------------------------------------------------+  |
+-------------------------------------------------------------------------------+
```

### 6.2 Data Synchronization & Offline Queue Protocol

#### Mutation Queue Lifecycle
1. User performs an edit while offline or during remote server disconnect.
2. The mutation is recorded in an append-only `IndexedDB` table `pending_mutations`:
```typescript
interface PendingMutation {
  id: string; // UUID v4
  timestamp: number;
  operation: 'CREATE' | 'UPDATE' | 'DELETE' | 'MOVE';
  path: string;
  payload: string;
  base_hash: string;
}
```
3. The background sync worker monitors network availability.
4. When connection is established, the queue processes sequentially in FIFO order.
5. If server returns `409 Conflict`, execution pauses and triggers the 3-Way Merge Protocol.

#### 3-Way Text Merge Strategy
```
               [Base Ancestor (Commit H0)]
                           /  \
                          /    \
                         v      v
      [Local Version (H_loc)]  [Remote Version (H_rem)]
                         \      /
                          \    /
                           v  v
                [Diff-Match-Patch Engine]
                           |
            +--------------+--------------+
            |                             |
    (Clean Merge)                 (Conflict Found)
            |                             |
            v                             v
   [Apply Unified File]        [Create Conflict File]
                               "Note (Conflict).md"
```

---

## 7. File System & Storage Strategy

### 7.1 Reading & Writing Plain-Text Markdown
- **Encoding:** Strict `UTF-8` encoding without BOM (Byte Order Mark).
- **Line Endings:** Standardized to LF (`\n`). CRLF (`\r\n`) converted automatically on write.
- **Reading Large Vaults:** File listing uses OS-native directory streams (`scandir` in Python / `withFileTypes` in Node.js) to avoid loading all file descriptors into RAM simultaneously.

### 7.2 Atomic Write Protocol
To prevent data corruption during power outages or system crashes, all file writes follow the **Atomic Replacement Pattern**:

```
[Write Buffer] ---> [Write to ".piyush/tmp/note.tmp.uuid"] ---> [fsync()]
                                                                    |
                                                                    v
                                                     [Atomic Rename / Replace]
                                                    "02_NODES/note.md"
```

1. Generate temporary file `.piyush/tmp/{UUID}.tmp`.
2. Write content to the temporary file.
3. Call `fsync()` to force OS buffer flush to physical storage media.
4. Issue atomic filesystem rename operation (`os.replace` / `fs.rename`) overwriting the target path `02_NODES/target.md`.

### 7.3 Safe Rename, Move & Refactoring Pipeline
When a note is renamed from `Old Title.md` to `New Title.md`:

```
[User Renames Note] ---> [Lock Vault Refactoring Pipeline]
                                  |
                                  v
                    [Rename File on OS File System]
                                  |
                                  v
                    [Query Backlink Database for References]
                                  |
                                  v
                [Scan & Update [[Old Title]] to [[New Title]]
                  in all referencing Markdown documents]
                                  |
                                  v
                  [Update SQLite Graph Nodes & Aliases]
                                  |
                                  v
                    [Release Pipeline Lock & Notify UI]
```

### 7.4 Data Loss Prevention & Crash Recovery
- **Snapshot Backups:** Daily automatic local Git commit in `.git/` folder.
- **Trash Bin System:** Deleted files are moved to `.piyush/trash/{timestamp}_{filename}` rather than permanently unlinked. Files in trash are purged automatically after 30 days.

---

## 8. AI Engineering Architecture & RAG Pipeline

### 8.1 Prompt Engineering & Dynamic Context Management
System prompts are structured deterministically into four strict layers:

```
+-------------------------------------------------------------------------------+
| LAYER 1: SYSTEM INSTRUCTIONS & IDENTITY                                       |
| "You are Piyush Wiki AI Assistant. Answer strictly based on vault context."   |
+-------------------------------------------------------------------------------+
| LAYER 2: VAULT RETRIEVED CONTEXT (Dynamic RAG Payload)                        |
| Source: 02_NODES/quantum_mechanics.md                                          |
| ---                                                                           |
| Quantum mechanics is a fundamental theory in physics...                       |
+-------------------------------------------------------------------------------+
| LAYER 3: CONVERSATION HISTORY BUFFER (Last 5 Exchanges)                        |
| User: What is wave-particle duality?                                          |
| Assistant: Wave-particle duality refers to...                                 |
+-------------------------------------------------------------------------------+
| LAYER 4: CURRENT USER QUERY                                                   |
| User: Summarize the key claims made in my quantum notes.                      |
+-------------------------------------------------------------------------------+
```

### 8.2 Model Abstraction Layer
Unified interface wrapping multi-provider inference execution:

```python
class LLMProvider(ABC):
    @abstractmethod
    async def generate_stream(
        self, prompt: str, context: List[str], options: Dict[str, Any]
    ) -> AsyncGenerator[str, None]:
        pass

class OllamaLocalProvider(LLMProvider): ...
class OpenAIProvider(LLMProvider): ...
class AnthropicProvider(LLMProvider): ...
class GeminiProvider(LLMProvider): ...
```

### 8.3 Retrieval & Token Budget Allocation Algorithm

```
+-------------------------------------------------------------------------------+
| Total Context Budget: 4,096 Tokens                                            |
+------------------------------------+------------------------------------------+
| Reserve System Prompt: 500 Tokens  | Reserve User Query & Margin: 500 Tokens  |
+------------------------------------+------------------------------------------+
| Available Context Space: 3,096 Tokens                                         |
|                                                                               |
| [Chunk 1 (RRF Score: 0.033)] -> 450 Tokens (Accumulated: 450)                 |
| [Chunk 2 (RRF Score: 0.031)] -> 600 Tokens (Accumulated: 1,050)               |
| [Chunk 3 (RRF Score: 0.028)] -> 800 Tokens (Accumulated: 1,850)               |
| [Chunk 4 (RRF Score: 0.025)] -> 1,100 Tokens (Accumulated: 2,950)              |
| [Chunk 5 (RRF Score: 0.021)] -> 500 Tokens -> EXCEEDS BUDGET (Truncated)      |
+-------------------------------------------------------------------------------+
```

---

## 9. Performance Budgets & Measurable Targets

| Performance Metric | Target Threshold | Measurement Condition / Methodology |
|---|---|---|
| **Cold Startup Time** | **< 1,200 ms** | App launch to interactive UI with 10,000 vault notes loaded. |
| **Search Latency (BM25)** | **< 15 ms** | FTS5 full-text query across 50,000 indexed note chunks. |
| **Search Latency (Hybrid Vector)** | **< 45 ms** | Cosine similarity k-NN vector search + RRF fusion step. |
| **Editor Keystroke Latency** | **< 8 ms** | Time from hardware `keydown` event to DOM screen paint. |
| **Page Rendering Latency** | **< 30 ms** | Full AST parse, transclusion compilation, and render for 100k-word note. |
| **Indexing Throughput** | **> 250 notes/sec**| Initial vault ingestion and FTS database indexing speed. |
| **Embedding Generation Speed** | **> 50 chunks/sec**| ONNX local CPU execution throughput using `bge-small-en-v1.5`. |
| **Graph Render Frame Rate** | **60 FPS (stable)** | Interactive panning/zooming on WebGL graph with 10,000 nodes. |
| **Peak Backend RAM Usage** | **< 350 MB** | System memory footprint during continuous background AI indexing. |
| **Idle Memory Footprint** | **< 120 MB** | Client + Backend memory footprint after 10 minutes of inactivity. |

---

## 10. Test Plan & Quality Assurance Suite

### 10.1 Unit Testing Strategy
- **Frameworks:** `Vitest` (Client TypeScript components & Markdown AST tools), `Pytest` (Python backend, search logic, file system utilities).
- **Target Coverage:** > 85% line coverage across core utility modules.
- **Key Modules Tested:** Frontmatter parsing, AST transclusion resolution, link extraction, token counter, RRF fusion logic.

### 10.2 Integration & System Contract Tests
- **Framework:** `Pytest-asyncio` + `httpx.AsyncClient`.
- **Scope:** API endpoint verification, SQLite database schema migrations, FTS search queries, and atomic file write integrity.

### 10.3 Synchronization & Edge-Case Network Simulation
- **Testing Approach:** Simulated offline queue processing under unstable network conditions.
- **Scenarios:**
  - Connection drops mid-file upload.
  - Simultaneous file edit on Client A and Client B.
  - Massive batch modification (1,000 files renamed concurrently).

### 10.4 UI & End-to-End Automation
- **Framework:** `Playwright`.
- **E2E Workflows:**
  1. Launch app -> Create new atomic note -> Fill frontmatter -> Type Wiki links -> Verify graph node addition.
  2. Perform RAG query -> Verify stream tokens render in chat panel -> Click source citation link -> Verify note navigation.

### 10.5 AI Retrieval Evaluation Framework
- **Evaluation Benchmark:** Automated RAG evaluation using `Ragas` dataset metrics.
- **Target Metrics:**
  - **Faithfulness Score:** > 0.90 (AI answer matches retrieved context without hallucination).
  - **Context Recall:** > 0.85 (Relevant note chunks are successfully retrieved).
  - **Answer Relevance:** > 0.88 (Generated output directly addresses user query).

---

## 11. Appendix & Engineering Sign-Off

This Technical Specification bridges all architectural and design requirements into concrete, actionable implementation directives. Developers are instructed to adhere strictly to the library choices, schema formats, API routes, and performance constraints established in this document. Any deviation must be submitted via formal Architectural Decision Record (ADR).

**Specification Status:** `APPROVED FOR DEVELOPMENT`  
**Target Release Iteration:** `v1.0.0-alpha`
