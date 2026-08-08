class GraphEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.container.style.backgroundColor = '#0D1117';
    this.nodeCounter = 0;
    this.edgeCounter = 0;
    this._isDirected = false;
    this._isWeighted = false;
    this.changeCallbacks = [];
    
    this.cy = window.cytoscape({
      container: this.container,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#1C2333',
            'border-color': '#58A6FF',
            'border-width': '2px',
            'color': '#E6EDF3',
            'font-family': 'Inter, sans-serif',
            'font-size': '14px',
            'width': '45px',
            'height': '45px',
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center'
          }
        },
        {
          selector: 'edge',
          style: {
            'line-color': '#30363D',
            'width': 2,
            'curve-style': 'bezier',
            'target-arrow-color': '#58A6FF',
            'font-size': '12px',
            'color': '#F0883E',
            'text-background-color': '#0D1117',
            'text-background-opacity': 1,
            'text-background-padding': '2px'
          }
        },
        { selector: '.highlighted', style: { 'background-color': '#58A6FF', 'border-color': '#58A6FF', 'line-color': '#58A6FF', 'target-arrow-color': '#58A6FF' } },
        { selector: '.visited', style: { 'background-color': '#238636', 'border-color': '#7EE787', 'line-color': '#238636', 'target-arrow-color': '#238636' } },
        { selector: '.current', style: { 'background-color': '#F0883E', 'border-color': '#F0883E', 'line-color': '#F0883E', 'target-arrow-color': '#F0883E' } },
        { selector: '.start', style: { 'background-color': '#58A6FF', 'border-color': '#79C0FF' } },
        { selector: '.end', style: { 'background-color': '#BC8CFF', 'border-color': '#D2A8FF' } },
        { selector: '.path', style: { 'background-color': '#7EE787', 'border-color': '#7EE787', 'line-color': '#7EE787', 'target-arrow-color': '#7EE787', 'width': 4 } },
        { selector: '.component-0', style: { 'background-color': '#58A6FF', 'border-color': '#58A6FF' } },
        { selector: '.component-1', style: { 'background-color': '#7EE787', 'border-color': '#7EE787' } },
        { selector: '.component-2', style: { 'background-color': '#F0883E', 'border-color': '#F0883E' } },
        { selector: '.component-3', style: { 'background-color': '#BC8CFF', 'border-color': '#BC8CFF' } },
        { selector: 'edge.directed', style: { 'target-arrow-shape': 'triangle' } },
        { selector: 'edge.weighted', style: { 'label': 'data(weight)' } }
      ],
      layout: { name: 'preset' },
      userZoomingEnabled: true,
      userPanningEnabled: true
    });

    this.cy.on('add remove data dragfree', () => {
      this._triggerChange();
    });
  }

  _triggerChange() {
    this.changeCallbacks.forEach(cb => cb());
  }

  addNode(label, position = null) {
    this.nodeCounter++;
    const id = `n${this.nodeCounter}`;
    if (!position) {
      const w = this.container.clientWidth || 800;
      const h = this.container.clientHeight || 600;
      position = { x: Math.random() * w * 0.8 + w * 0.1, y: Math.random() * h * 0.8 + h * 0.1 };
    }
    this.cy.add({
      group: 'nodes',
      data: { id, label },
      position
    });
    return id;
  }

  removeNode(id) {
    this.cy.getElementById(id).remove();
  }

  renameNode(id, newLabel) {
    this.cy.getElementById(id).data('label', newLabel);
  }

  getNodeLabel(id) {
    const el = this.cy.getElementById(id);
    return el.length ? el.data('label') : null;
  }

  addEdge(sourceId, targetId, weight = 1) {
    this.edgeCounter++;
    const id = `e${this.edgeCounter}`;
    const el = this.cy.add({
      group: 'edges',
      data: { id, source: sourceId, target: targetId, weight }
    });
    this._updateEdgeStyles();
    return id;
  }

  removeEdge(id) {
    this.cy.getElementById(id).remove();
  }

  setEdgeWeight(id, weight) {
    this.cy.getElementById(id).data('weight', weight);
  }

  toggleEdgeDirection(id) {
    const edge = this.cy.getElementById(id);
    if (edge.length) {
      const source = edge.data('source');
      const target = edge.data('target');
      edge.move({ source: target, target: source });
      this._triggerChange();
    }
  }

  setDirected(bool) {
    this._isDirected = !!bool;
    this._updateEdgeStyles();
    this._triggerChange();
  }

  setWeighted(bool) {
    this._isWeighted = !!bool;
    this._updateEdgeStyles();
    this._triggerChange();
  }

  isDirected() {
    return this._isDirected;
  }

  isWeighted() {
    return this._isWeighted;
  }

  _updateEdgeStyles() {
    this.cy.edges().forEach(edge => {
      if (this._isDirected) edge.addClass('directed');
      else edge.removeClass('directed');
      
      if (this._isWeighted) edge.addClass('weighted');
      else edge.removeClass('weighted');
    });
  }

  getNodes() {
    return this.cy.nodes().map(n => ({
      id: n.id(),
      label: n.data('label'),
      position: { ...n.position() }
    }));
  }

  getEdges() {
    return this.cy.edges().map(e => ({
      id: e.id(),
      source: e.data('source'),
      target: e.data('target'),
      weight: e.data('weight')
    }));
  }

  getNodeCount() {
    return this.cy.nodes().length;
  }

  getEdgeCount() {
    return this.cy.edges().length;
  }

  getNeighbors(nodeId) {
    const node = this.cy.getElementById(nodeId);
    if (this._isDirected) {
      return node.outgoers('node').map(n => n.id());
    } else {
      return node.neighborhood('node').map(n => n.id());
    }
  }

  getDegree(nodeId) {
    const node = this.cy.getElementById(nodeId);
    if (this._isDirected) {
      return node.outdegree() + node.indegree();
    } else {
      return node.degree();
    }
  }

  getAdjacencyList() {
    const adj = {};
    this.cy.nodes().forEach(n => {
      adj[n.id()] = [];
    });
    this.cy.edges().forEach(e => {
      const src = e.data('source');
      const tgt = e.data('target');
      const w = e.data('weight');
      if (adj[src]) adj[src].push({ neighbor: tgt, weight: w });
      if (!this._isDirected && adj[tgt]) {
        adj[tgt].push({ neighbor: src, weight: w });
      }
    });
    return adj;
  }

  getAdjacencyMatrix() {
    const nodes = this.getNodes();
    const ids = nodes.map(n => n.id);
    const labels = nodes.map(n => n.label);
    const matrix = Array(ids.length).fill(0).map(() => Array(ids.length).fill(0));
    const idToIndex = {};
    ids.forEach((id, i) => idToIndex[id] = i);
    
    this.cy.edges().forEach(e => {
      const i = idToIndex[e.data('source')];
      const j = idToIndex[e.data('target')];
      const w = e.data('weight') || 1;
      if (i !== undefined && j !== undefined) {
        matrix[i][j] = w;
        if (!this._isDirected) {
          matrix[j][i] = w;
        }
      }
    });
    return { labels, ids, matrix };
  }

  highlightNodes(ids, className) {
    ids.forEach(id => this.cy.getElementById(id).addClass(className));
  }

  highlightEdges(ids, className) {
    ids.forEach(id => this.cy.getElementById(id).addClass(className));
  }

  clearHighlights() {
    const classes = ['highlighted', 'visited', 'current', 'start', 'end', 'path', 'component-0', 'component-1', 'component-2', 'component-3'];
    this.cy.elements().removeClass(classes.join(' '));
  }

  fitView() {
    this.cy.fit(this.cy.elements(), 50);
  }

  reset() {
    this.cy.elements().remove();
    this.nodeCounter = 0;
    this.edgeCounter = 0;
    this.clearHighlights();
  }

  loadExample(name) {
    this.reset();
    const cx = (this.container.clientWidth || 800) / 2;
    const cy = (this.container.clientHeight || 600) / 2;
    
    const layouts = {
      'simple': () => {
        const n1 = this.addNode('A', { x: cx, y: cy - 100 });
        const n2 = this.addNode('B', { x: cx + 100, y: cy });
        const n3 = this.addNode('C', { x: cx + 50, y: cy + 100 });
        const n4 = this.addNode('D', { x: cx - 50, y: cy + 100 });
        const n5 = this.addNode('E', { x: cx - 100, y: cy });
        
        this.addEdge(n1, n2);
        this.addEdge(n2, n3);
        this.addEdge(n3, n4);
        this.addEdge(n4, n5);
        this.addEdge(n5, n1);
        this.addEdge(n1, n3);
      },
      'tree': () => {
        const n1 = this.addNode('1', { x: cx, y: cy - 100 });
        const n2 = this.addNode('2', { x: cx - 100, y: cy });
        const n3 = this.addNode('3', { x: cx + 100, y: cy });
        const n4 = this.addNode('4', { x: cx - 150, y: cy + 100 });
        const n5 = this.addNode('5', { x: cx - 50, y: cy + 100 });
        const n6 = this.addNode('6', { x: cx + 50, y: cy + 100 });
        const n7 = this.addNode('7', { x: cx + 150, y: cy + 100 });
        
        this.addEdge(n1, n2);
        this.addEdge(n1, n3);
        this.addEdge(n2, n4);
        this.addEdge(n2, n5);
        this.addEdge(n3, n6);
        this.addEdge(n3, n7);
      },
      'complete': () => {
        const nodes = [];
        for (let i=0; i<5; i++) {
          const angle = -Math.PI/2 + (i * 2 * Math.PI / 5);
          nodes.push(this.addNode(String.fromCharCode(65 + i), {
            x: cx + 100 * Math.cos(angle),
            y: cy + 100 * Math.sin(angle)
          }));
        }
        for (let i=0; i<5; i++) {
          for (let j=i+1; j<5; j++) {
            this.addEdge(nodes[i], nodes[j]);
          }
        }
      },
      'dag': () => {
        const n1 = this.addNode('S', { x: cx - 150, y: cy });
        const n2 = this.addNode('A', { x: cx - 50, y: cy - 80 });
        const n3 = this.addNode('B', { x: cx - 50, y: cy + 80 });
        const n4 = this.addNode('C', { x: cx + 50, y: cy - 80 });
        const n5 = this.addNode('D', { x: cx + 50, y: cy + 80 });
        const n6 = this.addNode('T', { x: cx + 150, y: cy });
        
        this.setDirected(true);
        this.addEdge(n1, n2);
        this.addEdge(n1, n3);
        this.addEdge(n2, n4);
        this.addEdge(n2, n5);
        this.addEdge(n3, n4);
        this.addEdge(n3, n5);
        this.addEdge(n4, n6);
        this.addEdge(n5, n6);
      },
      'weighted': () => {
        const n1 = this.addNode('SF', { x: cx - 200, y: cy - 50 });
        const n2 = this.addNode('LA', { x: cx - 150, y: cy + 100 });
        const n3 = this.addNode('DEN', { x: cx - 50, y: cy - 20 });
        const n4 = this.addNode('CHI', { x: cx + 50, y: cy - 100 });
        const n5 = this.addNode('DAL', { x: cx + 50, y: cy + 100 });
        const n6 = this.addNode('NYC', { x: cx + 200, y: cy - 50 });
        
        this.setWeighted(true);
        this.addEdge(n1, n2, 381);
        this.addEdge(n1, n3, 1250);
        this.addEdge(n2, n3, 1011);
        this.addEdge(n2, n5, 1435);
        this.addEdge(n3, n4, 1003);
        this.addEdge(n3, n5, 796);
        this.addEdge(n4, n6, 790);
        this.addEdge(n5, n6, 1372);
        this.addEdge(n4, n5, 921);
      },
      'disconnected': () => {
        // C1
        const n1 = this.addNode('A1', { x: cx - 150, y: cy - 50 });
        const n2 = this.addNode('A2', { x: cx - 200, y: cy + 50 });
        const n3 = this.addNode('A3', { x: cx - 100, y: cy + 50 });
        this.addEdge(n1, n2); this.addEdge(n2, n3); this.addEdge(n3, n1);
        // C2
        const n4 = this.addNode('B1', { x: cx, y: cy - 50 });
        const n5 = this.addNode('B2', { x: cx, y: cy + 50 });
        this.addEdge(n4, n5);
        // C3
        const n6 = this.addNode('C1', { x: cx + 150, y: cy - 80 });
        const n7 = this.addNode('C2', { x: cx + 100, y: cy + 50 });
        const n8 = this.addNode('C3', { x: cx + 200, y: cy + 50 });
        this.addEdge(n6, n7); this.addEdge(n7, n8);
      },
      'bipartite': () => {
        const u = [];
        const v = [];
        for (let i=0; i<3; i++) {
          u.push(this.addNode('U'+(i+1), { x: cx - 100, y: cy - 100 + i*100 }));
          v.push(this.addNode('V'+(i+1), { x: cx + 100, y: cy - 100 + i*100 }));
        }
        this.addEdge(u[0], v[0]); this.addEdge(u[0], v[1]);
        this.addEdge(u[1], v[0]); this.addEdge(u[1], v[2]);
        this.addEdge(u[2], v[1]); this.addEdge(u[2], v[2]);
      }
    };

    if (layouts[name]) layouts[name]();
    this.fitView();
    this._triggerChange();
  }

  onChange(callback) {
    this.changeCallbacks.push(callback);
  }

  onNodeTap(callback) {
    this.cy.on('tap', 'node', (evt) => {
      callback(evt.target.id());
    });
  }

  onEdgeTap(callback) {
    this.cy.on('tap', 'edge', (evt) => {
      callback(evt.target.id());
    });
  }

  getCy() {
    return this.cy;
  }

  destroy() {
    if (this.cy) {
      this.cy.destroy();
      this.cy = null;
    }
  }
}

window.GraphEngine = GraphEngine;
