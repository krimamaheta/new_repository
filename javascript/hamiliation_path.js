/**
 * Using the JavaScript language, have the function hamiltonianPath(strArr) take
 * strArr which will be an array of length three. The first part of the array
 * will be a list of vertices in a graph in the form (A,B,C,...), the second
 * part of the array will be the edges connecting the vertices in the form
 * (A-B,C-D,...) where each edge is bidirectional. The last part of the array
 * will be a set of vertices in the form (X,Y,Z,...) and your program will have
 * to determine whether or not the set of vertices given forms a Hamiltonian
 * path on the graph which means that every vertex in the graph is visited only
 * once in the order given.
 *
 * For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C,A,D,B)"] then
 * the vertices (C,A,D,B) in this order do in fact form a Hamiltonian path on
 * the graph so your program should return the string yes. If for example the
 * last part of the array was (D,A,B,C) then this doesn't form a Hamiltonian
 * path because once you get to B you can't get to C in the graph without
 * passing through the visited vertices again. Here your program should return
 * the vertex where the path had to terminate, in this case your program should
 * return B.
 *
 * The graph will have at least 2 vertices and all the vertices in the graph
 * will be connected.*/

function hamiltonianPath(strArr) {
    const [vertices, edges, targetVertices] = strArr.map(part => part.slice(1, -1).split(','));
  
    const graph = {};
    edges.forEach(edge => {
      const [start, end] = edge.split('-');
      graph[start] = graph[start] || [];
      graph[start].push(end);
      graph[end] = graph[end] || [];
      graph[end].push(start);
    });
  
    function isHamiltonianPath(path) {
      for (let i = 0; i < path.length - 1; i++) {
        const currentVertex = path[i];
        const nextVertex = path[i + 1];
  
        if (!graph[currentVertex] || !graph[currentVertex].includes(nextVertex)) {
          return false;
        }
      }
  
      // Check if every vertex is visited exactly once
      const visitedSet = new Set(path);
      return visitedSet.size === vertices.length;
    }
  
    function findHamiltonianPath(startVertex, path) {
      if (path.length === vertices.length) {
        return path;
      }
  
      for (const neighbor of graph[startVertex] || []) {
        if (!path.includes(neighbor)) {
          const newPath = path.concat(neighbor);
          const result = findHamiltonianPath(neighbor, newPath);
  
          if (result) {
            return result;
          }
        }
      }
  
      return null;
    }
  
    // Try to find a Hamiltonian path starting from each target vertex
    for (const targetVertex of targetVertices) {
      const path = findHamiltonianPath(targetVertex, [targetVertex]);
  
      if (path && isHamiltonianPath(path)) {
        return 'yes';
      }
    }
  
    // If no Hamiltonian path is found, return the last visited vertex in the path
    return path[path.length - 1];
  }
  
  // Example usage:
  const input = ["(A,B,C,D)", "(A-B,A-D,B-D,A-C)", "(C,A,D,B)"];
  const output = hamiltonianPath(input);
  console.log(output);