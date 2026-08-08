(function() {
  function buildAdjList(nodes, edges, directed) {
    const adj = {};
    nodes.forEach(n => {
      adj[n.id] = [];
    });
    edges.forEach(e => {
      if (!adj[e.source]) adj[e.source] = [];
      if (!adj[e.target]) adj[e.target] = [];
      adj[e.source].push({ target: e.target, weight: e.weight || 1, id: e.id });
      if (!directed) {
        adj[e.target].push({ target: e.source, weight: e.weight || 1, id: e.id });
      }
    });
    return adj;
  }

  function createEmptyStep(description, phase = 'init') {
    return {
      description,
      current: null,
      visited: [],
      frontier: [],
      highlightNodes: [],
      highlightEdges: [],
      data: null,
      phase
    };
  }

  function bfs(nodes, edges, startNodeId, directed) {
    if (!nodes || nodes.length === 0) {
      return [createEmptyStep('Graph is empty', 'complete')];
    }
    
    if (!startNodeId) startNodeId = nodes[0].id;
    const adjList = buildAdjList(nodes, edges, directed);
    const steps = [];
    const queue = [];
    const visited = new Set();
    const level = {};
    const highlightEdges = [];
    
    steps.push({
      description: `Starting Breadth-First Search (BFS) from node ${startNodeId}`,
      current: null,
      visited: [],
      frontier: [],
      highlightNodes: [{id: startNodeId, class: 'start'}],
      highlightEdges: [],
      data: { queue: [], level: {} },
      phase: 'init'
    });

    queue.push(startNodeId);
    visited.add(startNodeId);
    level[startNodeId] = 0;

    while (queue.length > 0) {
      const current = queue.shift();
      
      steps.push({
        description: `Dequeue node ${current}. Current level is ${level[current]}.`,
        current: current,
        visited: Array.from(visited),
        frontier: [...queue],
        highlightNodes: [{id: current, class: 'current'}],
        highlightEdges: [...highlightEdges],
        data: { queue: [...queue], level: {...level} },
        phase: 'process'
      });

      const neighbors = adjList[current] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.target)) {
          visited.add(neighbor.target);
          level[neighbor.target] = level[current] + 1;
          queue.push(neighbor.target);
          highlightEdges.push({id: neighbor.id, class: 'visited'});
          
          steps.push({
            description: `Check neighbor ${neighbor.target}: not visited. Adding to queue.`,
            current: current,
            visited: Array.from(visited),
            frontier: [...queue],
            highlightNodes: [{id: current, class: 'current'}, {id: neighbor.target, class: 'frontier'}],
            highlightEdges: [...highlightEdges],
            data: { queue: [...queue], level: {...level} },
            phase: 'process'
          });
        } else {
          steps.push({
            description: `Check neighbor ${neighbor.target}: already visited. Skipping.`,
            current: current,
            visited: Array.from(visited),
            frontier: [...queue],
            highlightNodes: [{id: current, class: 'current'}],
            highlightEdges: [...highlightEdges],
            data: { queue: [...queue], level: {...level} },
            phase: 'process'
          });
        }
      }
    }

    steps.push({
      description: `BFS Complete. Visited ${visited.size} nodes.`,
      current: null,
      visited: Array.from(visited),
      frontier: [],
      highlightNodes: [],
      highlightEdges: [...highlightEdges],
      data: { queue: [], level: {...level} },
      phase: 'complete'
    });

    return steps;
  }

  function dfs(nodes, edges, startNodeId, directed) {
    if (!nodes || nodes.length === 0) {
      return [createEmptyStep('Graph is empty', 'complete')];
    }

    if (!startNodeId) startNodeId = nodes[0].id;
    const adjList = buildAdjList(nodes, edges, directed);
    const steps = [];
    const stack = [];
    const visited = new Set();
    const discovery = {};
    const finish = {};
    let time = 0;
    const highlightEdges = [];

    steps.push({
      description: `Starting Depth-First Search (DFS) from node ${startNodeId}`,
      current: null,
      visited: [],
      frontier: [],
      highlightNodes: [{id: startNodeId, class: 'start'}],
      highlightEdges: [],
      data: { stack: [], discovery: {}, finish: {} },
      phase: 'init'
    });

    stack.push({id: startNodeId, edge: null});
    
    while (stack.length > 0) {
      const currentItem = stack[stack.length - 1];
      const current = currentItem.id;

      if (!visited.has(current)) {
        visited.add(current);
        time++;
        discovery[current] = time;
        if (currentItem.edge) {
            highlightEdges.push({id: currentItem.edge, class: 'visited'});
        }

        steps.push({
          description: `Discovered node ${current}.`,
          current: current,
          visited: Array.from(visited),
          frontier: stack.map(s => s.id),
          highlightNodes: [{id: current, class: 'current'}],
          highlightEdges: [...highlightEdges],
          data: { stack: stack.map(s => s.id), discovery: {...discovery}, finish: {...finish} },
          phase: 'process'
        });

        const neighbors = adjList[current] || [];
        // Add neighbors to stack in reverse order to process them in normal order
        for (let i = neighbors.length - 1; i >= 0; i--) {
            const neighbor = neighbors[i];
            if (!visited.has(neighbor.target)) {
                stack.push({id: neighbor.target, edge: neighbor.id});
                steps.push({
                  description: `Neighbor ${neighbor.target} is unvisited. Adding to stack.`,
                  current: current,
                  visited: Array.from(visited),
                  frontier: stack.map(s => s.id),
                  highlightNodes: [{id: current, class: 'current'}, {id: neighbor.target, class: 'frontier'}],
                  highlightEdges: [...highlightEdges],
                  data: { stack: stack.map(s => s.id), discovery: {...discovery}, finish: {...finish} },
                  phase: 'process'
                });
            }
        }
      } else {
        const popped = stack.pop();
        if (!finish[popped.id]) {
            time++;
            finish[popped.id] = time;
            steps.push({
                description: `Finished processing node ${popped.id}.`,
                current: popped.id,
                visited: Array.from(visited),
                frontier: stack.map(s => s.id),
                highlightNodes: [{id: popped.id, class: 'finished'}],
                highlightEdges: [...highlightEdges],
                data: { stack: stack.map(s => s.id), discovery: {...discovery}, finish: {...finish} },
                phase: 'process'
            });
        }
      }
    }

    steps.push({
      description: `DFS Complete. Visited ${visited.size} nodes.`,
      current: null,
      visited: Array.from(visited),
      frontier: [],
      highlightNodes: [],
      highlightEdges: [...highlightEdges],
      data: { stack: [], discovery: {...discovery}, finish: {...finish} },
      phase: 'complete'
    });

    return steps;
  }

  function dijkstra(nodes, edges, startNodeId, endNodeId, directed) {
    if (!nodes || nodes.length === 0) {
      return [createEmptyStep('Graph is empty', 'complete')];
    }
    
    if (!startNodeId) startNodeId = nodes[0].id;
    const adjList = buildAdjList(nodes, edges, directed);
    const steps = [];
    const distances = {};
    const previous = {};
    const pq = [];
    const visited = new Set();
    const highlightEdges = [];

    nodes.forEach(n => {
      distances[n.id] = Infinity;
      previous[n.id] = null;
    });
    distances[startNodeId] = 0;
    pq.push({id: startNodeId, dist: 0});

    steps.push({
      description: `Starting Dijkstra's Algorithm from node ${startNodeId}`,
      current: null,
      visited: [],
      frontier: [],
      highlightNodes: [{id: startNodeId, class: 'start'}],
      highlightEdges: [],
      data: { distances: {...distances}, previous: {...previous}, pq: [...pq] },
      phase: 'init'
    });

    let foundPath = false;

    while (pq.length > 0) {
      pq.sort((a, b) => a.dist - b.dist);
      const currentItem = pq.shift();
      const current = currentItem.id;

      if (visited.has(current)) continue;
      visited.add(current);

      steps.push({
        description: `Processing node ${current} with shortest known distance ${distances[current]}.`,
        current: current,
        visited: Array.from(visited),
        frontier: pq.map(p => p.id),
        highlightNodes: [{id: current, class: 'current'}],
        highlightEdges: [...highlightEdges],
        data: { distances: {...distances}, previous: {...previous}, pq: [...pq] },
        phase: 'process'
      });

      if (current === endNodeId) {
          foundPath = true;
          break;
      }

      const neighbors = adjList[current] || [];
      for (const neighbor of neighbors) {
        if (visited.has(neighbor.target)) continue;

        const newDist = distances[current] + neighbor.weight;
        if (newDist < distances[neighbor.target]) {
          distances[neighbor.target] = newDist;
          previous[neighbor.target] = { node: current, edge: neighbor.id };
          pq.push({id: neighbor.target, dist: newDist});
          
          // Temporary highlight for current check
          steps.push({
            description: `Found shorter path to ${neighbor.target} through ${current} (distance: ${newDist}).`,
            current: current,
            visited: Array.from(visited),
            frontier: pq.map(p => p.id),
            highlightNodes: [{id: current, class: 'current'}, {id: neighbor.target, class: 'frontier'}],
            highlightEdges: [...highlightEdges, {id: neighbor.id, class: 'checking'}],
            data: { distances: {...distances}, previous: {...previous}, pq: [...pq] },
            phase: 'process'
          });
        } else {
          steps.push({
            description: `Path to ${neighbor.target} through ${current} is not shorter (distance: ${newDist} >= ${distances[neighbor.target]}).`,
            current: current,
            visited: Array.from(visited),
            frontier: pq.map(p => p.id),
            highlightNodes: [{id: current, class: 'current'}],
            highlightEdges: [...highlightEdges],
            data: { distances: {...distances}, previous: {...previous}, pq: [...pq] },
            phase: 'process'
          });
        }
      }
    }

    const pathNodes = [];
    const pathEdges = [];
    if (endNodeId && foundPath) {
        let curr = endNodeId;
        while (curr) {
            pathNodes.unshift(curr);
            const prev = previous[curr];
            if (prev) {
                pathEdges.push(prev.edge);
                curr = prev.node;
            } else {
                curr = null;
            }
        }
    } else if (endNodeId && !foundPath) {
       steps.push({
           description: `Target node ${endNodeId} is unreachable from ${startNodeId}.`,
           current: null, visited: Array.from(visited), frontier: [], highlightNodes: [], highlightEdges: [],
           data: { distances: {...distances}, previous: {...previous}, pq: [] }, phase: 'complete'
       });
       return steps;
    }

    const finalData = { distances: {...distances}, previous: {...previous}, pq: [] };
    if (endNodeId) finalData.path = pathNodes;

    steps.push({
      description: endNodeId ? `Dijkstra Complete. Shortest path to ${endNodeId} found.` : `Dijkstra Complete. Computed shortest paths to all reachable nodes.`,
      current: null,
      visited: Array.from(visited),
      frontier: [],
      highlightNodes: pathNodes.map(id => ({id, class: 'path'})),
      highlightEdges: pathEdges.map(id => ({id, class: 'path'})),
      data: finalData,
      phase: 'complete'
    });

    return steps;
  }

  function shortestPath(nodes, edges, startNodeId, endNodeId, directed) {
      if (!nodes || nodes.length === 0) {
          return [createEmptyStep('Graph is empty', 'complete')];
      }
      
      const adjList = buildAdjList(nodes, edges, directed);
      const steps = [];
      const distances = {};
      const previous = {};
      const queue = [];
      const visited = new Set();
  
      nodes.forEach(n => distances[n.id] = Infinity);
      distances[startNodeId] = 0;
      queue.push(startNodeId);
      visited.add(startNodeId);
      previous[startNodeId] = null;
  
      steps.push({
        description: `Starting Shortest Path (BFS) from ${startNodeId} to ${endNodeId}`,
        current: null, visited: [], frontier: [], highlightNodes: [{id: startNodeId, class: 'start'}], highlightEdges: [],
        data: { distances: {...distances}, previous: {...previous}, queue: [...queue] }, phase: 'init'
      });
  
      let found = false;
      while (queue.length > 0) {
        const current = queue.shift();
        
        steps.push({
          description: `Dequeue node ${current}.`,
          current: current, visited: Array.from(visited), frontier: [...queue], highlightNodes: [{id: current, class: 'current'}], highlightEdges: [],
          data: { distances: {...distances}, previous: {...previous}, queue: [...queue] }, phase: 'process'
        });
  
        if (current === endNodeId) {
            found = true;
            break;
        }
  
        const neighbors = adjList[current] || [];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor.target)) {
            visited.add(neighbor.target);
            distances[neighbor.target] = distances[current] + 1;
            previous[neighbor.target] = { node: current, edge: neighbor.id };
            queue.push(neighbor.target);
            
            steps.push({
              description: `Added neighbor ${neighbor.target} to queue.`,
              current: current, visited: Array.from(visited), frontier: [...queue], highlightNodes: [{id: current, class: 'current'}, {id: neighbor.target, class: 'frontier'}], highlightEdges: [{id: neighbor.id, class: 'checking'}],
              data: { distances: {...distances}, previous: {...previous}, queue: [...queue] }, phase: 'process'
            });
          }
        }
      }
  
      const pathNodes = [];
      const pathEdges = [];
      if (found) {
          let curr = endNodeId;
          while (curr) {
              pathNodes.unshift(curr);
              const prev = previous[curr];
              if (prev) {
                  pathEdges.push(prev.edge);
                  curr = prev.node;
              } else {
                  curr = null;
              }
          }
      }
  
      const finalData = { distances: {...distances}, previous: {...previous}, queue: [] };
      if (found) finalData.path = pathNodes;
  
      steps.push({
        description: found ? `Shortest Path Complete. Path found.` : `Target node unreachable.`,
        current: null, visited: Array.from(visited), frontier: [],
        highlightNodes: pathNodes.map(id => ({id, class: 'path'})),
        highlightEdges: pathEdges.map(id => ({id, class: 'path'})),
        data: finalData, phase: 'complete'
      });
  
      return steps;
  }

  function connectedComponents(nodes, edges, directed) {
    if (!nodes || nodes.length === 0) {
      return [createEmptyStep('Graph is empty', 'complete')];
    }
    
    // For simplicity, implement undirected CC. Directed SCC uses Kosaraju's (simplified)
    const adjList = buildAdjList(nodes, edges, directed);
    const steps = [];
    const visited = new Set();
    const components = [];
    let currentComponent = 0;

    steps.push({
        description: directed ? `Starting Strongly Connected Components analysis (not fully implemented in this stub, treating as simple reachability)` : `Starting Connected Components analysis`,
        current: null, visited: [], frontier: [], highlightNodes: [], highlightEdges: [],
        data: { components: [], currentComponent: 0 }, phase: 'init'
    });

    for (const node of nodes) {
        if (!visited.has(node.id)) {
            const comp = [];
            components.push(comp);
            const queue = [node.id];
            visited.add(node.id);
            
            steps.push({
                description: `Starting new component ${currentComponent + 1} from node ${node.id}`,
                current: node.id, visited: Array.from(visited), frontier: [...queue], highlightNodes: [{id: node.id, class: `component-${currentComponent}`}], highlightEdges: [],
                data: { components: JSON.parse(JSON.stringify(components)), currentComponent }, phase: 'process'
            });

            while (queue.length > 0) {
                const current = queue.shift();
                comp.push(current);
                
                const neighbors = adjList[current] || [];
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor.target)) {
                        visited.add(neighbor.target);
                        queue.push(neighbor.target);
                    }
                }
            }
            currentComponent++;
        }
    }

    steps.push({
        description: `Connected Components Complete. Found ${components.length} components.`,
        current: null, visited: Array.from(visited), frontier: [], 
        highlightNodes: nodes.map(n => {
            let cIdx = components.findIndex(c => c.includes(n.id));
            return {id: n.id, class: `component-${cIdx}`};
        }),
        highlightEdges: [],
        data: { components, currentComponent: components.length }, phase: 'complete'
    });
    return steps;
  }

  function cycleDetection(nodes, edges, directed) {
    if (!nodes || nodes.length === 0) {
      return [createEmptyStep('Graph is empty', 'complete')];
    }
    
    const adjList = buildAdjList(nodes, edges, directed);
    const steps = [];
    const colors = {}; // white, gray, black
    let hasCycle = false;
    let cycleEdge = null;

    nodes.forEach(n => colors[n.id] = 'white');

    steps.push({
        description: `Starting Cycle Detection`,
        current: null, visited: [], frontier: [], highlightNodes: [], highlightEdges: [],
        data: { colors: {...colors}, hasCycle, cycleEdge }, phase: 'init'
    });

    function dfsCycle(current, parent) {
        if (hasCycle) return;
        colors[current] = 'gray';
        
        steps.push({
            description: `Exploring node ${current} (gray).`,
            current: current, visited: Object.keys(colors).filter(k => colors[k] !== 'white'), frontier: [],
            highlightNodes: [{id: current, class: 'gray'}], highlightEdges: [],
            data: { colors: {...colors}, hasCycle, cycleEdge }, phase: 'process'
        });

        const neighbors = adjList[current] || [];
        for (const neighbor of neighbors) {
            if (hasCycle) break;
            
            if (colors[neighbor.target] === 'gray') {
                if (!directed && neighbor.target === parent) continue; // Undirected: ignore parent
                
                hasCycle = true;
                cycleEdge = { source: current, target: neighbor.target, id: neighbor.id };
                steps.push({
                    description: `Cycle detected! Node ${neighbor.target} is already being explored (gray).`,
                    current: current, visited: Object.keys(colors).filter(k => colors[k] !== 'white'), frontier: [],
                    highlightNodes: [{id: current, class: 'gray'}, {id: neighbor.target, class: 'cycle-node'}], 
                    highlightEdges: [{id: neighbor.id, class: 'cycle-edge'}],
                    data: { colors: {...colors}, hasCycle, cycleEdge }, phase: 'process'
                });
                return;
            } else if (colors[neighbor.target] === 'white') {
                dfsCycle(neighbor.target, current);
            }
        }
        
        colors[current] = 'black';
        steps.push({
            description: `Finished node ${current} (black).`,
            current: current, visited: Object.keys(colors).filter(k => colors[k] !== 'white'), frontier: [],
            highlightNodes: [{id: current, class: 'black'}], highlightEdges: [],
            data: { colors: {...colors}, hasCycle, cycleEdge }, phase: 'process'
        });
    }

    for (const node of nodes) {
        if (colors[node.id] === 'white' && !hasCycle) {
            dfsCycle(node.id, null);
        }
    }

    steps.push({
        description: hasCycle ? `Cycle Detection Complete. Cycle found.` : `Cycle Detection Complete. No cycle found.`,
        current: null, visited: Object.keys(colors).filter(k => colors[k] !== 'white'), frontier: [], highlightNodes: [], highlightEdges: [],
        data: { colors: {...colors}, hasCycle, cycleEdge }, phase: 'complete'
    });

    return steps;
  }

  function topologicalSort(nodes, edges) {
    if (!nodes || nodes.length === 0) {
      return [createEmptyStep('Graph is empty', 'complete')];
    }
    
    // Always treated as directed
    const adjList = buildAdjList(nodes, edges, true);
    const steps = [];
    const inDegree = {};
    nodes.forEach(n => inDegree[n.id] = 0);
    
    edges.forEach(e => {
        if (inDegree[e.target] !== undefined) {
            inDegree[e.target]++;
        }
    });

    const queue = [];
    nodes.forEach(n => {
        if (inDegree[n.id] === 0) queue.push(n.id);
    });

    const sorted = [];
    let hasError = false;

    steps.push({
        description: `Starting Topological Sort (Kahn's algorithm)`,
        current: null, visited: [], frontier: [...queue], highlightNodes: queue.map(id => ({id, class: 'frontier'})), highlightEdges: [],
        data: { inDegree: {...inDegree}, queue: [...queue], sorted: [...sorted], hasError }, phase: 'init'
    });

    while (queue.length > 0) {
        const current = queue.shift();
        sorted.push(current);
        
        steps.push({
            description: `Extracted node ${current} with in-degree 0. Added to sorted array.`,
            current: current, visited: [...sorted], frontier: [...queue], highlightNodes: [{id: current, class: 'current'}], highlightEdges: [],
            data: { inDegree: {...inDegree}, queue: [...queue], sorted: [...sorted], hasError }, phase: 'process'
        });

        const neighbors = adjList[current] || [];
        for (const neighbor of neighbors) {
            inDegree[neighbor.target]--;
            if (inDegree[neighbor.target] === 0) {
                queue.push(neighbor.target);
            }
            steps.push({
                description: `Decremented in-degree of ${neighbor.target} to ${inDegree[neighbor.target]}.`,
                current: current, visited: [...sorted], frontier: [...queue], highlightNodes: [{id: current, class: 'current'}, {id: neighbor.target, class: 'frontier'}], highlightEdges: [{id: neighbor.id, class: 'checking'}],
                data: { inDegree: {...inDegree}, queue: [...queue], sorted: [...sorted], hasError }, phase: 'process'
            });
        }
    }

    if (sorted.length !== nodes.length) {
        hasError = true;
    }

    steps.push({
        description: hasError ? `Topological Sort Failed: Graph contains a cycle.` : `Topological Sort Complete.`,
        current: null, visited: [...sorted], frontier: [], highlightNodes: [], highlightEdges: [],
        data: { inDegree: {...inDegree}, queue: [], sorted: [...sorted], hasError }, phase: 'complete'
    });

    return steps;
  }

  window.GraphAlgorithms = {
    bfs,
    dfs,
    dijkstra,
    shortestPath,
    connectedComponents,
    cycleDetection,
    topologicalSort
  };
})();
