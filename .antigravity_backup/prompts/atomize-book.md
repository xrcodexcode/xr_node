# Prompt: Atomize Book

You are an expert knowledge engineer. Your task is to analyze the provided book chapter and extract key, atomic knowledge elements.

## Extraction Criteria
1. **Concepts**: Core theoretical ideas, structures, or principles.
2. **Facts**: Immutable factual rules, observations, or guidelines.
3. **Glossary (Definitions)**: Key terms defined in the text.
4. **Methods**: Procedures, algorithms, or step-by-step methodologies.
5. **Examples**: Concrete case studies, code blocks, or trace examples explaining a concept.
6. **Quotes**: High-impact direct quotes that encapsulate a major idea.

## Formatting Rules
For each extracted item:
- **Title**: A clear Title Case title (5-7 words max), reflecting the concept.
- **Type**: Must be one of: `concept`, `fact`, `glossary`, `example`, `quote`.
- **Tags**: A list of tags from `tag-schema.md`.
- **Core Idea**: A concise 1-3 sentence summary of the concept.
- **Details**: Full explanations, code snippets, or quotes.
- **Connections**: Other concepts or terms in the chapter that this note links to.
