/**
 * app.js — Main Application Controller for Graph Engineering Lab
 * 
 * Connects the UI (HTML) to the GraphEngine and GraphAlgorithms modules.
 * Handles: navigation, theme toggle, toolbar interactions, modals,
 * representation updates, algorithm visualizer playback, and more.
 */

(function () {
  'use strict';

  // ─── Global State ──────────────────────────────────────────────
  let engine = null;
  let selectedNodeId = null;
  let selectedEdgeId = null;
  let algoSteps = [];
  let algoCurrentStep = -1;
  let algoPlaying = false;
  let algoPlayTimer = null;
  let currentAlgo = 'bfs';

  // ─── DOM Ready ─────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initTheme();
    initNavigation();
    initEngine();
    initToolbar();
    initModals();
    initAlgorithmLab();
    initScrollAnimations();

    // Load a default example so the playground isn't empty
    engine.loadExample('simple');
  }

  // ═══════════════════════════════════════════════════════════════
  //  THEME
  // ═══════════════════════════════════════════════════════════════
  function initTheme() {
    const stored = localStorage.getItem('graph-lab-theme');
    if (stored) {
      document.documentElement.setAttribute('data-theme', stored);
    }
    updateThemeIcon();

    document.getElementById('theme-toggle').addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('graph-lab-theme', next);
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    document.getElementById('theme-icon-dark').style.display = isDark ? 'block' : 'none';
    document.getElementById('theme-icon-light').style.display = isDark ? 'none' : 'block';
  }

  // ═══════════════════════════════════════════════════════════════
  //  NAVIGATION
  // ═══════════════════════════════════════════════════════════════
  function initNavigation() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    if (menuBtn && mobileNav) {
      menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
      });
      // Close mobile nav when a link is clicked
      mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => mobileNav.classList.remove('active'));
      });
    }

    // Active section tracking via IntersectionObserver
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    if (sections.length && navLinks.length) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.classList.toggle('active',
                link.getAttribute('data-section') === id ||
                (id === 'playground-section' && link.getAttribute('data-section') === 'playground') ||
                (id === 'representations-section' && link.getAttribute('data-section') === 'representations') ||
                (id === 'algo-section' && link.getAttribute('data-section') === 'algo-lab')
              );
            });
          }
        });
      }, { threshold: 0.2, rootMargin: '-56px 0px 0px 0px' });

      sections.forEach(section => observer.observe(section));
    }
  }

  // ═══════════════════════════════════════════════════════════════
  //  GRAPH ENGINE INIT
  // ═══════════════════════════════════════════════════════════════
  function initEngine() {
    engine = new window.GraphEngine('cy-container');

    // Update representations and status whenever the graph changes
    engine.onChange(() => {
      updateStatus();
      updateRepresentations();
      updateAlgoNodeSelectors();
      // Clear algorithm visualization when graph changes
      if (algoSteps.length > 0) {
        stopAlgo();
        algoSteps = [];
        algoCurrentStep = -1;
        document.getElementById('algo-controls').style.display = 'none';
        document.getElementById('ds-display').style.display = 'none';
        document.getElementById('step-display').innerHTML =
          '<div class="empty-state" style="color:var(--text-muted);text-align:center;padding:20px 0">Graph changed. Run the algorithm again to see updated results.</div>';
      }
    });

    // Node tap → select
    engine.onNodeTap(nodeId => {
      selectedEdgeId = null;
      selectedNodeId = nodeId;
      updateSelectionUI();
    });

    // Edge tap → select
    engine.onEdgeTap(edgeId => {
      selectedNodeId = null;
      selectedEdgeId = edgeId;
      updateSelectionUI();
    });

    // Click on background → deselect
    engine.getCy().on('tap', evt => {
      if (evt.target === engine.getCy()) {
        selectedNodeId = null;
        selectedEdgeId = null;
        updateSelectionUI();
      }
    });

    updateStatus();
  }

  // ═══════════════════════════════════════════════════════════════
  //  STATUS BAR
  // ═══════════════════════════════════════════════════════════════
  function updateStatus() {
    const modeDot = document.getElementById('status-mode-dot');
    const modeText = document.getElementById('status-mode');
    const weightDot = document.getElementById('status-weight-dot');
    const weightText = document.getElementById('status-weight');
    const nodesCount = document.getElementById('status-nodes');
    const edgesCount = document.getElementById('status-edges');

    const directed = engine.isDirected();
    const weighted = engine.isWeighted();

    modeDot.className = 'status-dot ' + (directed ? 'directed' : 'undirected');
    modeText.textContent = directed ? 'Directed' : 'Undirected';
    weightDot.className = 'status-dot ' + (weighted ? 'weighted' : 'unweighted');
    weightText.textContent = weighted ? 'Weighted' : 'Unweighted';
    nodesCount.textContent = engine.getNodeCount();
    edgesCount.textContent = engine.getEdgeCount();
  }

  function updateSelectionUI() {
    const selEl = document.getElementById('status-selection');
    const selLabel = document.getElementById('status-selected-label');
    engine.clearHighlights();

    if (selectedNodeId) {
      selEl.style.display = 'flex';
      const label = engine.getNodeLabel(selectedNodeId);
      selLabel.textContent = 'Node ' + (label || selectedNodeId);
      engine.highlightNodes([selectedNodeId], 'highlighted');
    } else if (selectedEdgeId) {
      selEl.style.display = 'flex';
      const edges = engine.getEdges();
      const edge = edges.find(e => e.id === selectedEdgeId);
      if (edge) {
        const srcLabel = engine.getNodeLabel(edge.source);
        const tgtLabel = engine.getNodeLabel(edge.target);
        selLabel.textContent = 'Edge ' + srcLabel + ' → ' + tgtLabel;
      } else {
        selLabel.textContent = 'Edge ' + selectedEdgeId;
      }
      engine.highlightEdges([selectedEdgeId], 'highlighted');
    } else {
      selEl.style.display = 'none';
    }
  }

  // ═══════════════════════════════════════════════════════════════
  //  TOOLBAR
  // ═══════════════════════════════════════════════════════════════
  function initToolbar() {
    // Add Node
    document.getElementById('btn-add-node').addEventListener('click', () => {
      const count = engine.getNodeCount();
      const label = String.fromCharCode(65 + (count % 26)) + (count >= 26 ? Math.floor(count / 26) : '');
      engine.addNode(label, null);
    });

    // Add Edge — open modal
    document.getElementById('btn-add-edge').addEventListener('click', () => {
      const nodes = engine.getNodes();
      if (nodes.length < 2) {
        showToast('Need at least 2 nodes to create an edge.');
        return;
      }
      populateEdgeModal(nodes);
      openModal('modal-add-edge');
    });

    // Delete selected
    document.getElementById('btn-delete').addEventListener('click', () => {
      if (selectedNodeId) {
        engine.removeNode(selectedNodeId);
        selectedNodeId = null;
        updateSelectionUI();
      } else if (selectedEdgeId) {
        engine.removeEdge(selectedEdgeId);
        selectedEdgeId = null;
        updateSelectionUI();
      } else {
        showToast('Select a node or edge first.');
      }
    });

    // Rename
    document.getElementById('btn-rename').addEventListener('click', () => {
      if (!selectedNodeId) {
        showToast('Select a node to rename.');
        return;
      }
      const currentLabel = engine.getNodeLabel(selectedNodeId);
      document.getElementById('input-rename').value = currentLabel || '';
      openModal('modal-rename');
    });

    document.getElementById('btn-confirm-rename').addEventListener('click', () => {
      const newLabel = document.getElementById('input-rename').value.trim();
      if (newLabel && selectedNodeId) {
        engine.renameNode(selectedNodeId, newLabel);
        updateSelectionUI();
      }
      closeModal('modal-rename');
    });

    // Edit Weight
    document.getElementById('btn-edit-weight').addEventListener('click', () => {
      if (!selectedEdgeId) {
        showToast('Select an edge to edit its weight.');
        return;
      }
      const edges = engine.getEdges();
      const edge = edges.find(e => e.id === selectedEdgeId);
      document.getElementById('input-weight').value = edge ? edge.weight : 1;
      openModal('modal-weight');
    });

    document.getElementById('btn-confirm-weight').addEventListener('click', () => {
      const weight = parseFloat(document.getElementById('input-weight').value);
      if (!isNaN(weight) && selectedEdgeId) {
        engine.setEdgeWeight(selectedEdgeId, weight);
        if (!engine.isWeighted()) {
          engine.setWeighted(true);
          document.getElementById('toggle-weighted').classList.add('active');
          document.getElementById('toggle-weighted').setAttribute('aria-checked', 'true');
        }
      }
      closeModal('modal-weight');
    });

    // Flip edge
    document.getElementById('btn-flip-edge').addEventListener('click', () => {
      if (!selectedEdgeId) {
        showToast('Select an edge to flip.');
        return;
      }
      engine.toggleEdgeDirection(selectedEdgeId);
      if (!engine.isDirected()) {
        engine.setDirected(true);
        document.getElementById('toggle-directed').classList.add('active');
        document.getElementById('toggle-directed').setAttribute('aria-checked', 'true');
      }
    });

    // Toggle directed
    document.getElementById('toggle-directed').addEventListener('click', function () {
      const active = !this.classList.contains('active');
      this.classList.toggle('active', active);
      this.setAttribute('aria-checked', String(active));
      engine.setDirected(active);
      updateStatus();
    });

    // Toggle weighted
    document.getElementById('toggle-weighted').addEventListener('click', function () {
      const active = !this.classList.contains('active');
      this.classList.toggle('active', active);
      this.setAttribute('aria-checked', String(active));
      engine.setWeighted(active);
      updateStatus();
    });

    // Example loader
    document.getElementById('example-select').addEventListener('change', function () {
      const val = this.value;
      if (val) {
        engine.loadExample(val);
        this.value = '';

        // Set toggles to match example
        const dirToggle = document.getElementById('toggle-directed');
        const wgtToggle = document.getElementById('toggle-weighted');
        const isDir = engine.isDirected();
        const isWgt = engine.isWeighted();
        dirToggle.classList.toggle('active', isDir);
        dirToggle.setAttribute('aria-checked', String(isDir));
        wgtToggle.classList.toggle('active', isWgt);
        wgtToggle.setAttribute('aria-checked', String(isWgt));
      }
    });

    // Reset
    document.getElementById('btn-reset').addEventListener('click', () => {
      engine.reset();
      selectedNodeId = null;
      selectedEdgeId = null;
      updateSelectionUI();
    });

    // Fit view
    document.getElementById('btn-fit').addEventListener('click', () => {
      engine.fitView();
    });

    // Confirm add edge
    document.getElementById('btn-confirm-edge').addEventListener('click', () => {
      const src = document.getElementById('input-edge-source').value;
      const tgt = document.getElementById('input-edge-target').value;
      const weight = parseFloat(document.getElementById('input-edge-weight').value) || 1;
      if (src && tgt && src !== tgt) {
        engine.addEdge(src, tgt, weight);
      } else if (src === tgt) {
        showToast('Source and target must be different.');
        return;
      }
      closeModal('modal-add-edge');
    });
  }

  function populateEdgeModal(nodes) {
    const srcSel = document.getElementById('input-edge-source');
    const tgtSel = document.getElementById('input-edge-target');
    srcSel.innerHTML = '';
    tgtSel.innerHTML = '';
    nodes.forEach(n => {
      const opt1 = document.createElement('option');
      opt1.value = n.id;
      opt1.textContent = n.label || n.id;
      srcSel.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = n.id;
      opt2.textContent = n.label || n.id;
      tgtSel.appendChild(opt2);
    });
    if (nodes.length > 1) tgtSel.selectedIndex = 1;

    // Show/hide weight input based on mode
    const weightGroup = document.getElementById('label-edge-weight-input');
    const weightInput = document.getElementById('input-edge-weight');
    if (engine.isWeighted()) {
      weightGroup.style.display = 'block';
      weightInput.style.display = 'block';
    } else {
      weightGroup.style.display = 'none';
      weightInput.style.display = 'none';
    }
  }

  // ═══════════════════════════════════════════════════════════════
  //  MODALS
  // ═══════════════════════════════════════════════════════════════
  function initModals() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      // Close on overlay click
      overlay.addEventListener('click', e => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
      // Close buttons
      overlay.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => overlay.classList.remove('active'));
      });
    });

    // Enter key in modals
    document.getElementById('input-rename').addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('btn-confirm-rename').click();
    });
    document.getElementById('input-weight').addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('btn-confirm-weight').click();
    });
  }

  function openModal(id) {
    const overlay = document.getElementById(id);
    overlay.classList.add('active');
    const input = overlay.querySelector('input');
    if (input) setTimeout(() => input.focus(), 100);
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove('active');
  }

  // ═══════════════════════════════════════════════════════════════
  //  REPRESENTATIONS
  // ═══════════════════════════════════════════════════════════════
  function updateRepresentations() {
    updateAdjacencyList();
    updateAdjacencyMatrix();
  }

  function updateAdjacencyList() {
    const container = document.getElementById('adj-list-display');
    const nodes = engine.getNodes();

    if (nodes.length === 0) {
      container.innerHTML = '<div class="empty-state" style="color:var(--text-muted);text-align:center;padding:40px 0">Add nodes and edges in the playground above to see the adjacency list.</div>';
      return;
    }

    const adjList = engine.getAdjacencyList();
    const weighted = engine.isWeighted();
    let html = '';

    for (const node of nodes) {
      const neighbors = adjList[node.id] || [];
      html += '<div class="adj-list-entry">';
      html += '<span class="adj-list-node">' + escapeHtml(node.label) + '</span>';
      html += '<span class="adj-list-arrow"> → </span>';

      if (neighbors.length === 0) {
        html += '<span style="color:var(--text-muted)">[ ]</span>';
      } else {
        html += '[ ';
        html += neighbors.map(n => {
          const neighborLabel = engine.getNodeLabel(n.neighbor) || n.neighbor;
          let s = '<span class="adj-list-neighbor">' + escapeHtml(neighborLabel) + '</span>';
          if (weighted) {
            s += '<span class="adj-list-weight">(' + n.weight + ')</span>';
          }
          return s;
        }).join(', ');
        html += ' ]';
      }
      html += '</div>';
    }

    container.innerHTML = html;
  }

  function updateAdjacencyMatrix() {
    const container = document.getElementById('adj-matrix-display');
    const nodes = engine.getNodes();

    if (nodes.length === 0) {
      container.innerHTML = '<div class="empty-state" style="color:var(--text-muted);text-align:center;padding:40px 0">Add nodes and edges in the playground above to see the adjacency matrix.</div>';
      return;
    }

    const matrixData = engine.getAdjacencyMatrix();
    const labels = matrixData.labels;
    const matrix = matrixData.matrix;
    const weighted = engine.isWeighted();

    let html = '<table class="matrix-table"><thead><tr><th></th>';
    labels.forEach(l => { html += '<th>' + escapeHtml(l) + '</th>'; });
    html += '</tr></thead><tbody>';

    matrix.forEach((row, i) => {
      html += '<tr><th>' + escapeHtml(labels[i]) + '</th>';
      row.forEach(val => {
        const hasEdge = val !== 0;
        const cls = hasEdge ? 'has-edge' : 'no-edge';
        const display = weighted ? val : (hasEdge ? '1' : '0');
        html += '<td class="' + cls + '">' + display + '</td>';
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    container.innerHTML = html;
  }

  // ═══════════════════════════════════════════════════════════════
  //  ALGORITHM LAB
  // ═══════════════════════════════════════════════════════════════
  function initAlgorithmLab() {
    // Algorithm selector tabs
    document.querySelectorAll('.algo-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.algo-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentAlgo = this.getAttribute('data-algo');
        updateAlgoConfigVisibility();
        stopAlgo();
        resetAlgoDisplay();
      });
    });

    // Run algorithm button
    document.getElementById('btn-run-algo').addEventListener('click', runAlgorithm);

    // Playback controls
    document.getElementById('btn-algo-restart').addEventListener('click', () => goToStep(0));
    document.getElementById('btn-algo-prev').addEventListener('click', () => goToStep(algoCurrentStep - 1));
    document.getElementById('btn-algo-play').addEventListener('click', toggleAlgoPlay);
    document.getElementById('btn-algo-next').addEventListener('click', () => goToStep(algoCurrentStep + 1));
    document.getElementById('btn-algo-end').addEventListener('click', () => goToStep(algoSteps.length - 1));

    updateAlgoNodeSelectors();
    updateAlgoConfigVisibility();
  }

  function updateAlgoConfigVisibility() {
    const endGroup = document.getElementById('algo-end-node-group');
    const needsEnd = ['dijkstra', 'shortestPath'].includes(currentAlgo);
    const needsStart = !['connectedComponents', 'cycleDetection', 'topologicalSort'].includes(currentAlgo);

    endGroup.style.display = needsEnd ? 'block' : 'none';

    const startGroup = document.getElementById('algo-start-node').parentElement;
    startGroup.style.display = needsStart ? 'block' : 'none';
  }

  function updateAlgoNodeSelectors() {
    const nodes = engine.getNodes();
    const startSel = document.getElementById('algo-start-node');
    const endSel = document.getElementById('algo-end-node');

    const startVal = startSel.value;
    const endVal = endSel.value;

    startSel.innerHTML = '<option value="">Select…</option>';
    endSel.innerHTML = '<option value="">Select…</option>';

    nodes.forEach(n => {
      const label = n.label || n.id;
      startSel.innerHTML += '<option value="' + n.id + '">' + escapeHtml(label) + '</option>';
      endSel.innerHTML += '<option value="' + n.id + '">' + escapeHtml(label) + '</option>';
    });

    // Restore previous selections if still valid
    if (nodes.find(n => n.id === startVal)) startSel.value = startVal;
    if (nodes.find(n => n.id === endVal)) endSel.value = endVal;
  }

  function runAlgorithm() {
    stopAlgo();

    const nodes = engine.getNodes();
    const edges = engine.getEdges();
    const directed = engine.isDirected();

    if (nodes.length === 0) {
      showToast('Add some nodes to the graph first.');
      return;
    }

    const startId = document.getElementById('algo-start-node').value;
    const endId = document.getElementById('algo-end-node').value;
    const algos = window.GraphAlgorithms;

    const needsStart = !['connectedComponents', 'cycleDetection', 'topologicalSort'].includes(currentAlgo);
    const needsEnd = ['dijkstra', 'shortestPath'].includes(currentAlgo);

    if (needsStart && !startId) {
      showToast('Select a start node.');
      return;
    }
    if (needsEnd && !endId) {
      showToast('Select an end node.');
      return;
    }

    try {
      switch (currentAlgo) {
        case 'bfs':
          algoSteps = algos.bfs(nodes, edges, startId, directed);
          break;
        case 'dfs':
          algoSteps = algos.dfs(nodes, edges, startId, directed);
          break;
        case 'dijkstra':
          algoSteps = algos.dijkstra(nodes, edges, startId, endId, directed);
          break;
        case 'shortestPath':
          algoSteps = algos.shortestPath(nodes, edges, startId, endId, directed);
          break;
        case 'connectedComponents':
          algoSteps = algos.connectedComponents(nodes, edges, directed);
          break;
        case 'cycleDetection':
          algoSteps = algos.cycleDetection(nodes, edges, directed);
          break;
        case 'topologicalSort':
          algoSteps = algos.topologicalSort(nodes, edges);
          break;
      }
    } catch (err) {
      console.error('Algorithm error:', err);
      showToast('Algorithm error: ' + err.message);
      return;
    }

    if (!algoSteps || algoSteps.length === 0) {
      showToast('No steps generated. Check the graph structure.');
      return;
    }

    algoCurrentStep = -1;
    document.getElementById('algo-controls').style.display = 'flex';
    goToStep(0);
  }

  function goToStep(index) {
    if (index < 0 || index >= algoSteps.length) return;
    algoCurrentStep = index;
    const step = algoSteps[index];

    // Update step counter
    document.getElementById('step-counter').textContent =
      'Step ' + (index + 1) + ' / ' + algoSteps.length;

    // Update step description
    const stepDisplay = document.getElementById('step-display');
    stepDisplay.innerHTML =
      '<div class="step-counter">Step ' + (index + 1) + ' / ' + algoSteps.length + '</div>' +
      '<div class="step-description">' + escapeHtml(step.description) + '</div>';

    // Update graph visualization
    engine.clearHighlights();

    if (step.highlightNodes && step.highlightNodes.length > 0) {
      // Group by class for efficient highlighting
      const byClass = {};
      step.highlightNodes.forEach(h => {
        const cls = h.class || h.className || 'highlighted';
        if (!byClass[cls]) byClass[cls] = [];
        byClass[cls].push(h.id);
      });
      Object.entries(byClass).forEach(([cls, ids]) => {
        engine.highlightNodes(ids, cls);
      });
    }

    if (step.highlightEdges && step.highlightEdges.length > 0) {
      const byClass = {};
      step.highlightEdges.forEach(h => {
        const cls = h.class || h.className || 'highlighted';
        if (!byClass[cls]) byClass[cls] = [];
        byClass[cls].push(h.id);
      });
      Object.entries(byClass).forEach(([cls, ids]) => {
        engine.highlightEdges(ids, cls);
      });
    }

    // Update data structure display
    updateDataStructureDisplay(step);

    // Update play button icon
    if (index >= algoSteps.length - 1) {
      stopAlgo();
    }
  }

  function updateDataStructureDisplay(step) {
    const dsDisplay = document.getElementById('ds-display');
    if (!step.data) {
      dsDisplay.style.display = 'none';
      return;
    }

    dsDisplay.style.display = 'grid';
    let html = '';

    const data = step.data;

    // Queue
    if (data.queue !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Queue</div><div class="ds-panel-content">';
      if (Array.isArray(data.queue) && data.queue.length > 0) {
        html += data.queue.map(id => {
          const label = engine.getNodeLabel(id) || id;
          return '<span class="ds-item in-queue">' + escapeHtml(label) + '</span>';
        }).join(' ');
      } else {
        html += '<span style="color:var(--text-muted)">empty</span>';
      }
      html += '</div></div>';
    }

    // Stack
    if (data.stack !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Stack</div><div class="ds-panel-content">';
      if (Array.isArray(data.stack) && data.stack.length > 0) {
        html += data.stack.map(id => {
          const label = engine.getNodeLabel(id) || id;
          return '<span class="ds-item in-stack">' + escapeHtml(label) + '</span>';
        }).join(' ');
      } else {
        html += '<span style="color:var(--text-muted)">empty</span>';
      }
      html += '</div></div>';
    }

    // Priority Queue
    if (data.pq !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Priority Queue</div><div class="ds-panel-content">';
      if (Array.isArray(data.pq) && data.pq.length > 0) {
        html += data.pq.map(item => {
          const label = engine.getNodeLabel(item.id) || item.id;
          return '<span class="ds-item in-queue">' + escapeHtml(label) + ':' + item.dist + '</span>';
        }).join(' ');
      } else {
        html += '<span style="color:var(--text-muted)">empty</span>';
      }
      html += '</div></div>';
    }

    // Distances
    if (data.distances !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Distances</div><div class="ds-panel-content">';
      const entries = Object.entries(data.distances);
      if (entries.length > 0) {
        html += entries.map(([id, dist]) => {
          const label = engine.getNodeLabel(id) || id;
          const d = dist === Infinity ? '∞' : dist;
          return '<span class="ds-item">' + escapeHtml(label) + '=' + d + '</span>';
        }).join(' ');
      }
      html += '</div></div>';
    }

    // Visited
    if (step.visited && step.visited.length > 0) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Visited</div><div class="ds-panel-content">';
      html += step.visited.map(id => {
        const label = engine.getNodeLabel(id) || id;
        return '<span class="ds-item visited">' + escapeHtml(label) + '</span>';
      }).join(' ');
      html += '</div></div>';
    }

    // Level (BFS)
    if (data.level !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Level / Depth</div><div class="ds-panel-content">';
      const entries = Object.entries(data.level);
      if (entries.length > 0) {
        html += entries.map(([id, lv]) => {
          const label = engine.getNodeLabel(id) || id;
          return '<span class="ds-item">' + escapeHtml(label) + ':L' + lv + '</span>';
        }).join(' ');
      }
      html += '</div></div>';
    }

    // Discovery / Finish times (DFS)
    if (data.discovery !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Discovery / Finish</div><div class="ds-panel-content">';
      const entries = Object.entries(data.discovery);
      if (entries.length > 0) {
        html += entries.map(([id, d]) => {
          const label = engine.getNodeLabel(id) || id;
          const f = data.finish && data.finish[id] !== undefined ? data.finish[id] : '-';
          return '<span class="ds-item">' + escapeHtml(label) + ' d=' + d + ' f=' + f + '</span>';
        }).join(' ');
      }
      html += '</div></div>';
    }

    // Components
    if (data.components !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Components</div><div class="ds-panel-content">';
      const colors = ['in-queue', 'visited', 'in-stack', 'current'];
      data.components.forEach((comp, i) => {
        html += '<div style="margin-bottom:4px"><strong style="color:var(--text-secondary)">C' + i + ':</strong> ';
        html += comp.map(id => {
          const label = engine.getNodeLabel(id) || id;
          return '<span class="ds-item ' + (colors[i % colors.length]) + '">' + escapeHtml(label) + '</span>';
        }).join(' ');
        html += '</div>';
      });
      html += '</div></div>';
    }

    // Colors (Cycle Detection)
    if (data.colors !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Node Colors</div><div class="ds-panel-content">';
      const entries = Object.entries(data.colors);
      entries.forEach(([id, color]) => {
        const label = engine.getNodeLabel(id) || id;
        let cls = '';
        if (color === 'gray') cls = 'in-stack';
        else if (color === 'black') cls = 'visited';
        html += '<span class="ds-item ' + cls + '">' + escapeHtml(label) + ':' + color + '</span> ';
      });
      html += '</div></div>';
    }

    // Has Cycle result
    if (data.hasCycle !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Result</div><div class="ds-panel-content">';
      html += data.hasCycle
        ? '<span style="color:var(--accent-red);font-weight:600">⚠ Cycle Detected</span>'
        : '<span style="color:var(--accent-green);font-weight:600">✓ No Cycle</span>';
      html += '</div></div>';
    }

    // In-degree (Topo sort)
    if (data.inDegree !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">In-Degree</div><div class="ds-panel-content">';
      const entries = Object.entries(data.inDegree);
      entries.forEach(([id, deg]) => {
        const label = engine.getNodeLabel(id) || id;
        html += '<span class="ds-item">' + escapeHtml(label) + ':' + deg + '</span> ';
      });
      html += '</div></div>';
    }

    // Sorted order (Topo sort)
    if (data.sorted !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Sorted Order</div><div class="ds-panel-content">';
      if (data.sorted.length > 0) {
        html += data.sorted.map(id => {
          const label = engine.getNodeLabel(id) || id;
          return '<span class="ds-item visited">' + escapeHtml(label) + '</span>';
        }).join(' → ');
      } else {
        html += '<span style="color:var(--text-muted)">empty</span>';
      }
      html += '</div></div>';
    }

    // Path result
    if (step.data && step.data.path !== undefined) {
      html += '<div class="ds-panel"><div class="ds-panel-title">Path</div><div class="ds-panel-content">';
      if (step.data.path && step.data.path.length > 0) {
        html += step.data.path.map(id => {
          const label = engine.getNodeLabel(id) || id;
          return '<span class="ds-item visited">' + escapeHtml(label) + '</span>';
        }).join(' → ');
      } else {
        html += '<span style="color:var(--accent-red)">No path found</span>';
      }
      html += '</div></div>';
    }

    dsDisplay.innerHTML = html;
  }

  function toggleAlgoPlay() {
    if (algoPlaying) {
      stopAlgo();
    } else {
      algoPlaying = true;
      document.getElementById('btn-algo-play').textContent = '⏸';
      playNextStep();
    }
  }

  function playNextStep() {
    if (!algoPlaying) return;
    if (algoCurrentStep >= algoSteps.length - 1) {
      stopAlgo();
      return;
    }
    goToStep(algoCurrentStep + 1);
    const speed = parseInt(document.getElementById('speed-slider').value);
    const delay = Math.max(100, 1500 - (speed * 130));
    algoPlayTimer = setTimeout(playNextStep, delay);
  }

  function stopAlgo() {
    algoPlaying = false;
    if (algoPlayTimer) {
      clearTimeout(algoPlayTimer);
      algoPlayTimer = null;
    }
    const playBtn = document.getElementById('btn-algo-play');
    if (playBtn) playBtn.textContent = '▶';
  }

  function resetAlgoDisplay() {
    algoSteps = [];
    algoCurrentStep = -1;
    document.getElementById('algo-controls').style.display = 'none';
    document.getElementById('ds-display').style.display = 'none';
    document.getElementById('step-display').innerHTML =
      '<div class="empty-state" style="color:var(--text-muted);text-align:center;padding:20px 0">Select an algorithm and click "Run" to see it in action.</div>';
    engine.clearHighlights();
  }

  // ═══════════════════════════════════════════════════════════════
  //  SCROLL ANIMATIONS
  // ═══════════════════════════════════════════════════════════════
  function initScrollAnimations() {
    const animateEls = document.querySelectorAll('.concept-card, .use-case-card, .info-box, .repr-panel, .pipeline-step');
    if (!animateEls.length) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animateEls.forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }

  // ═══════════════════════════════════════════════════════════════
  //  UTILITIES
  // ═══════════════════════════════════════════════════════════════
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  let toastTimer = null;
  function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:var(--bg-elevated);color:var(--text-primary);padding:10px 20px;border-radius:var(--radius-md);border:1px solid var(--border-default);font-size:0.9rem;z-index:3000;box-shadow:var(--shadow-md);transition:opacity 0.3s ease;pointer-events:none;';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.style.opacity = '0'; }, 3000);
  }

})();
