# ENGRAM

## The First Bio-Synthetic Mind

[![Version](https://img.shields.io/badge/version-0.1.0-gold.svg)](https://engram.cloud)
[![Status](https://img.shields.io/badge/status-Gold%20Standard-success.svg)](https://engram.cloud)

**A Cognitive System That Learns Like Biology, Thinks Like AI**

[🌐 Live Website](https://engram.cloud) | [📖 Documentation](#system-architecture) | [🎨 Gallery](#visual-gallery)

---

## Executive Summary

ENGRAM is **the first bio-synthetic cognitive system capable of true learning**. It represents a breakthrough in artificial intelligence, integrating **Large Language Models (LLMs)** with **knowledge graph-based memory structures**, powered by a pioneering **Hebbian plasticity mechanism**—the same principles that govern learning in biological brains.

### Key Innovation: The Plastify Module

The Plastify module is the first successful application of **Hebbian synaptic plasticity principles** to computational knowledge graphs. This breakthrough enables the system to not only store information but to **learn and adapt** like biological neural networks.

> **Core Principle**: "Cells that fire together, wire together" — Donald Hebb (1949)

### Most Valuable Capability: Context Learning

The system's most significant achievement is its ability to **remember and learn through context memory**, generating **new edges never provided in the original input**.

---

## System Architecture

### Hybrid Cognitive System Design

```
┌─────────────────────────────────────────────────────────────┐
│                    HYBRID COGNITIVE SYSTEM                   │
├─────────────────────────────────────────────────────────────┤
│  INPUT LAYER          PROCESSING CORE        MEMORY SYSTEM  │
│  ───────────          ───────────────        ─────────────  │
│  • Text               • LLM (Ollama)        • Knowledge Graph│
│  • JSON               • Embeddings          • Vector Store  │
│  • Ontologies                                                │
│  • Conversations                                             │
│                        ↓                                     │
│  ┌─────────────────┐    ┌─────────────────┐                 │
│  │ COGNIFY PIPELINE│◄──►│ PLASTIFY MODULE │                 │
│  └─────────────────┘    └─────────────────┘                 │
│                        ↓                                     │
│  OUTPUT LAYER                                                │
│  • 3D Visualization                                          │
│  • Semantic Query                                            │
│  • RAG                                                       │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow Pipeline

1. **Ingestion** (`cognee.add()`) → Text/JSON/Ontology input
2. **Processing** (`cognee.cognify()`) → Tokenization, entity extraction
3. **Memory** (`cognee.memify()`) → Graph construction, vector indexing
4. **Plasticity** (`cognee.plastify()`) → Hebbian strengthening
5. **Retrieval** (`cognee.search()`) → Vector search, graph traversal

---

## Theoretical Foundations

### Hebb's Principle (1949)

> "When an axon of cell A is near enough to excite a cell B and repeatedly or persistently takes part in firing it, some growth process or metabolic change takes place in one or both cells such that A's efficiency, as one of the cells firing B, is increased."
> 
> — **Donald Hebb**, *Organization of Behavior*

### Computational Translation

```
Δwᵢⱼ = η · log(1 + f_co)

Where:
  Δwᵢⱼ = Weight change between nodes i and j
  η (eta) = Learning rate (typically 0.1)
  f_co = Co-occurrence frequency between nodes
```

The logarithmic scaling prevents weight explosion while ensuring meaningful updates for frequently co-occurring nodes.

### Bio-Inspired Architecture

| Component | Biological Analog | Function |
|-----------|------------------|----------|
| **LLM Module** | Prefrontal Cortex | Natural language processing, abstract reasoning, semantic embeddings |
| **Temporal Graph** | Hippocampus | Episodic memory storage, temporal indexing, associative retrieval |
| **Plastify Module** | Synaptic Plasticity | Connection potentiation, competitive depression, new association discovery |

---

## Memory System

### Graph-Node Memory Architecture

#### Node Structure

```python
Node
├── id: UUID
├── type: String
├── embedding: Vector[768]          # High-dimensional semantic representation
├── properties: Dict
├── activation_level: Float (0.0-1.0)
├── plasticity_metrics: Dict
│   ├── average_edge_weight: Float
│   ├── edge_count: Integer
│   ├── plasticity_score: Float
│   └── connection_diversity: Integer
├── connection_weights: Dict[UUID, Float]
├── last_activation: Timestamp
└── total_activations: Integer
```

#### Edge Structure

```python
Edge
├── source_id: UUID
├── target_id: UUID
├── relationship_type: String
├── weight: Float (0.1-5.0)         # Synaptic strength
├── properties: {
│   ├── hebbian_strengthened: Bool
│   ├── co_occurrence_count: Integer
│   ├── last_hebbian_update: Timestamp
│   ├── learning_rate_applied: Float
│   └── discovered_by: String        # "shared_neighbor", "hebbian", etc.
└── metadata: Dict
```

#### Vector Space Geometry

Embeddings project concepts into a **768-dimensional vector space** where Euclidean distance corresponds to semantic distance.

**Similarity Calculation**:
```python
similarity = cos(θ) = (A · B) / (||A|| ||B||)
SIMILARITY_THRESHOLD = 0.7
```

---

## The Plastify Module

### Hebbian Strengthening

```python
async def apply_hebbian_strengthening(
    edge: Edge,
    co_occurrence: int,
    learning_rate: float = 0.1,
    max_weight: float = 5.0,
) -> Edge:
    """
    Apply Hebbian strengthening to an edge.
    
    Formula: Δw = η × log(1 + f_co)
    """
    if co_occurrence > 0:
        strength_increase = learning_rate * math.log1p(co_occurrence)
        new_weight = min(edge.weight + strength_increase, max_weight)
        
        return Edge(
            ...,
            weight=new_weight,
            hebbian_strengthened=True,
            co_occurrence_count=co_occurrence,
        )
```

### Competitive Weakening

Similar connections compete while weaker ones decay, mimicking biological synaptic pruning:

```python
async def apply_competitive_weakening(
    node: Node,
    similar_nodes: List[Node],
    competition_rate: float = 0.05,
    min_weight: float = 0.1,
) -> List[Edge]:
    """Apply competitive weakening to similar connections."""
    for edge in node.edges:
        if edge.target in similar_nodes:
            current_weight = edge.weight
            weakened_weight = max(
                current_weight * (1 - competition_rate),
                min_weight
            )
            edge.weight = weakened_weight
            edge.competitively_weakened = True
```

### Shared Neighbor Discovery

The most revolutionary aspect: generating **completely new knowledge** through contextual inference.

**Algorithm**:
```python
async def discover_shared_neighbor_associations(
    min_shared_neighbors: int = 2,
    confidence_threshold: float = 0.6,
) -> Dict[str, Any]:
    """
    Discover new associations based on shared neighbors.
    
    If A→C and B→C (both connected to C),
    infer relationship between A and B.
    
    Confidence = |shared_neighbors| / min(|neighbors_A|, |neighbors_B|)
    """
```

**Confidence Levels**:
- **≥ 0.60**: `shares_context_with`
- **≥ 0.80**: `strongly_related_to` (planned v0.2.0)
- **≥ 0.95**: `functionally_equivalent` (planned v0.2.0)

### Real Example from the System

**Before Plastify (Cognify)**:
```
FastAPI ────▶ Python
FastAPI ────▶ Asyncio
Django ─────▶ Python
Django ─────▶ ORM
```

**After Plastify (New Edge Discovered)**:
```
🆕 FastAPI ←──[shares_context_with]──▶ Django
   Confidence: 0.943
   Reason: Both share neighbors [Python, Web, Backend, Framework]
   → INFERENCE: Both are Python web frameworks
```

The system discovered that **FastAPI and Django are related** as Python web frameworks, *without this relationship ever being explicitly provided*.

---

## Experimental Results

### Performance Metrics

| Metric | Value | Significance |
|--------|-------|--------------|
| **Nodes Processed** | 74 | 100% coverage |
| **Edges Updated** | 5,888 | Hebbian strengthening |
| **New Associations** | 116 | +39.5% growth |
| **Average Confidence** | 0.943 | 94.3% precision |
| **Nodes with New Edges** | 54 (73%) | High participation |
| **Plasticity Score** | 0.2473 | Adaptability index |

### Knowledge Generation

```
Initial Edges:        294
New Associations:    +116 (+39.5%)
──────────────────────────────
Final Total:          410
```

All new associations use the `shares_context_with` relationship type in v0.1.0.

### Execution Timeline (~90 seconds)

```
09:18:07 — Start: 74 nodes, 294 initial edges
09:18:21 — Processed 10 nodes
09:18:28 — Processed 20 nodes
09:18:54 — Processed 30 nodes
09:19:14 — Processed 40 nodes
09:19:18 — Processed 50 nodes
09:19:35 — Processed 60 nodes
09:19:37 — Processed 70 nodes
09:19:38 — Shared neighbor discovery initiated
09:19:54 — Complete: 410 final edges (294 + 116 new)
```

---

## Technical Implementation

### Main API Usage

```python
from datetime import timedelta
import cognee

# Apply Hebbian plasticity to the graph
plastify_result = await cognee.plastify(
    dataset="main_dataset",
    learning_rate=0.1,          # Strengthening rate
    competition_rate=0.05,      # Competition rate
    max_weight=5.0,             # Maximum allowed weight
    min_weight=0.1,             # Minimum weight
    temporal_window=timedelta(days=30),
)

# Result:
# {
#     "status": "completed",
#     "processed_nodes": 74,
#     "updated_edges": 5888,
#     "new_associations_discovered": 116,
#     "new_associations_avg_confidence": 0.943,
#     "nodes_with_new_associations": 54,
#     "plasticity_score": 0.2473
# }
```

### Project Structure

```
cognee/modules/plastify/
├── __init__.py                    # Public API exports
├── plastify.py                    # Main module API
├── hebbian_rules.py               # Hebbian rules implementation
└── shared_neighbor_discovery.py   # Association discovery
```

### Technologies

- **KùzuDB**: Native property graph database
- **LanceDB**: Vector storage and indexing
- **Ollama**: Local LLM inference (Phi4, Qwen3)
- **Cognee**: Base cognitive architecture framework

---

## Roadmap: v0.2.0+

### Planned Features

| Feature | v0.1.0 (Current) | v0.2.0+ (Planned) |
|---------|------------------|-------------------|
| **Learning** | ✓ Hebbian | ✓ Hebbian |
| **Forgetting** | Static | Dynamic Decay |
| **Clustering** | Visual Only | Auto Consolidation |
| **Query Complexity** | O(n) linear | O(log n) prioritized |
| **Memory Model** | Growth only | Growth + Pruning |

### Auto Consolidation
Meta-nodes for conceptual clusters. Dense connection regions automatically identified and abstracted into high-level representations.

### Temporal Decay
Gradual weight reduction for obsolete nodes. Implements the complementary principle: **"What is not used, is lost."**

### Selective Forgetting
Resource liberation for irrelevant information. Dynamic memory management mimicking biological optimization.

---

## Visual Gallery

ENGRAM features a stunning collection of **29 AI-generated neural-themed images** that create an immersive visual experience.

### Featured Images

- **Neural Constellation** (Hero background)
- **Knowledge Galaxy** (Memory system section)
- **Deep Neural Field** (Plastify module)
- **Circuit Garden** (Results section)
- **Neural Artistry** (Bio-inspired architecture)

### Complete Image Collection

The project includes 29 unique AI-generated images across these categories:

- **Hero Backgrounds**: 3 variations
- **Section Backgrounds**: 8 neural-themed environments
- **Card Backgrounds**: 6 textured surfaces
- **Gallery Pieces**: 12 artistic compositions

All images were generated using custom prompts with a consistent cyan/magenta/violet color palette.

**📸 View the complete gallery:** Visit [engram.cloud/#gallery](https://engram.cloud/#gallery)

**🎨 Generate your own:** See [imagez_prompts.md](imagez_prompts.md) for the complete prompt library

---

## Website Features

### Visual Design

- **29 AI-generated images** creating immersive neural-themed backgrounds
- **Interactive neural network visualization** with canvas animations
- **Glassmorphism design** with cyan/magenta/violet color palette
- **Responsive layout** optimized for desktop and mobile
- **Smooth scroll animations** and micro-interactions
- **Code syntax highlighting** with copy-to-clipboard functionality

### Sections

1. **Hero** - Introduction with animated neural network
2. **Executive Summary** - Key innovations overview
3. **System Architecture** - Technical diagram and pipeline
4. **Theoretical Foundations** - Hebb's principle explanation
5. **Memory System** - Graph-node architecture details
6. **Plastify Module** - Hebbian rules implementation
7. **Experimental Results** - Performance metrics and analysis
8. **Implementation** - API reference and code examples
9. **Roadmap** - Future development plans
10. **Visual Gallery** - Neural imagery collection
11. **Newsletter** - Stay updated

---

## Technical Stack

- **Jekyll**: Static site generator
- **Sass/CSS**: Styling with CSS custom properties
- **Vanilla JavaScript**: Interactive animations
- **GitHub Pages**: Hosting and continuous deployment
- **GitHub Actions**: Build automation

### File Structure

```
.
├── _config.yml                    # Jekyll configuration
├── _layouts/
│   └── default.html               # Main HTML template
├── assets/
│   ├── css/
│   │   └── style.css              # Complete design system
│   ├── js/
│   │   └── main.js                # Interactive animations
│   └── images/                    # 29 neural-themed images
├── index.html                     # Main page
├── README.md                      # This file
├── IMAGE_IMPLEMENTATION_GUIDE.md  # Visual asset guide
├── imagez_prompts.md              # AI image generation prompts
└── .github/workflows/             # GitHub Actions
    └── jekyll-gh-pages.yml
```

---

## Local Development

### Requirements

- Ruby 2.7 or higher
- Bundler

### Installation

```bash
# Install dependencies
bundle install

# Development server
bundle exec jekyll serve

# With live reload
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000`

---

## Annexes: Visual Asset Documentation

### Annex A: Visual Asset Integration Guide
**[📖 IMAGE_IMPLEMENTATION_GUIDE.md](IMAGE_IMPLEMENTATION_GUIDE.md)**

This comprehensive guide documents the complete workflow for generating and integrating the 29 neural-themed visual assets into the ENGRAM website. It serves as a practical reference for understanding how the site's immersive visual experience was achieved.

**What's Included:**
- Complete image mapping (which image goes where)
- CSS implementation techniques with gradient overlays (75-85% opacity)
- Responsive handling strategies for 1200x1200px images
- Performance optimization approaches
- Technical specifications for all visual assets
- Integration patterns for glassmorphism effects

**Technical Stack Used:**
- **Generation**: ImageZ AI (Stable Diffusion-based)
- **Integration**: CSS3 with custom properties
- **Optimization**: Web-ready PNG format with gradient overlays
- **Performance**: Lazy loading and parallax effects

**Perfect for:** Frontend developers, UI/UX designers, and anyone wanting to understand or replicate the visual implementation.

---

### Annex B: AI Image Generation Prompts  
**[🎨 imagez_prompts.md](imagez_prompts.md)**

The complete library of 30+ production-ready prompts used to generate the neural-themed images with ImageZ, Midjourney, or any AI image generation tool. These prompts maintain consistent cyan (#00d4ff), magenta (#ff006e), and violet (#8338ec) color palette across all images.

**What's Included:**
- 10 categories of prompts (Hero, Sections, Cards, Dividers, Decorative)
- Specific prompt engineering for scientific elegance aesthetic
- Aspect ratio and resolution specifications (1200x1200px, 16:9)
- Style guidelines and parameters (--style raw --v 6)
- Generation workflow recommendations
- Color consistency techniques

**Prompt Categories:**
1. Hero Backgrounds (3 variations)
2. Section Backgrounds (8 environments)
3. Card Backgrounds (6 textures)
4. Header/Logo Elements (3 designs)
5. Section Dividers (3 styles)
6. Footer Backgrounds (3 options)
7. Icon & Illustration Elements (4 icons)
8. Architecture Diagram Backgrounds (3 visuals)
9. Special Effects Elements (3 effects)
10. Mobile-Specific Assets (2 variants)

**Perfect for:** Graphic designers, AI artists, and anyone wanting to create similar neural-themed visuals for their projects.

**Usage Rights:** These prompts are provided as **free supplementary resources** for the community. Modify and adapt them for your own projects, learn from the implementation techniques described, and extend the visual system with your own generated images.

---

### Annex C: Cognitive Architecture Technical Documentation
**[📚 COGNITIVE_ARCHITECTURE_HEBBIAN_PLASTICITY.md](COGNITIVE_ARCHITECTURE_HEBBIAN_PLASTICITY.md)**

The complete technical documentation describing the cognitive architecture with Hebbian plasticity in knowledge graphs. This comprehensive paper details the theoretical foundations, system architecture, implementation details, and experimental results of the ENGRAM system.

**What's Included:**
- Complete theoretical foundations of Hebbian plasticity applied to knowledge graphs
- Detailed system architecture and component diagrams
- Memory system design with graph-node structures
- Plastify module implementation with code examples
- Experimental results and metrics analysis
- Context learning capabilities and new knowledge generation
- Roadmap for future development (v0.2.0+)
- Scientific implications and applications

**Key Topics Covered:**
1. **Executive Summary** - System overview and key innovations
2. **Theoretical Foundations** - Hebb's principle and bio-inspired architecture
3. **System Architecture** - Hybrid cognitive system design
4. **Language Processing Layer** - LLM integration and embeddings
5. **Graph-Node Memory System** - Data models and KùzuDB backend
6. **Vector Geometry** - Semantic space and LanceDB indexing
7. **Plastify Module** - Hebbian rules, synaptic competition, shared neighbor discovery
8. **Technical Implementation** - APIs, algorithms, and code structure
9. **Experimental Results** - Metrics, analysis, and knowledge generation
10. **Implications and Applications** - Scientific relevance and potential uses
11. **Conclusions** - Achievements, contributions, and future roadmap

**Perfect for:** Researchers, AI engineers, neuroscientists, and anyone interested in the technical implementation of bio-inspired cognitive systems. The document provides both theoretical depth and practical implementation details.

**Original Document:** The Spanish version of this document is also available as `ARQUITECTURA_COGNITIVA_PLASTICIDAD_HEBBIANA.md`.

---

## Brand Identity

### Core Message
**"The First Bio-Synthetic Cognitive System Capable of True Learning"**

This tagline encapsulates ENGRAM's groundbreaking achievement: bridging biological neural plasticity with computational systems to create the first AI capable of genuine learning through context and association.

### Visual Identity

**Color Palette:**
- **Cyan (#00d4ff)**: Primary accent, represents neural energy and data flow
- **Magenta (#ff006e)**: Secondary accent, highlights innovation and plasticity
- **Violet (#8338ec)**: Tertiary accent, signifies deep learning and cognition
- **Gold (#ffd700)**: Success metrics and achievement indicators
- **Deep Space (#0a0a0f)**: Background, creates infinite depth sensation

**Typography:**
- **Primary**: Inter (clean, modern, highly legible)
- **Monospace**: JetBrains Mono (code blocks, technical data)
- **Display**: Cal Sans/Inter (headlines with gradient effects)

**Visual Language:**
- Neural networks and synaptic connections
- Bioluminescent accents and glowing effects
- Glassmorphism and depth layering
- Scientific elegance with technological sophistication
- Cosmic/space themes representing infinite knowledge

---

## License

© 2026 ENGRAM Systems. All rights reserved.

**The First Bio-Synthetic Cognitive System Capable of True Learning** 🧠⚡

[Visit Website](https://engram.cloud) • [View Gallery](https://engram.cloud/#gallery)

