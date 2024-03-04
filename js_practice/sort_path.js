/**
 * Using the JavaScript language, have the function shortestPath(strArr) take
 * strArr which will be an array of strings which models a non-looping Graph.
 * The structure of the array will be as follows: The first element in the array
 * will be the number of nodes N (points) in the array as a string. The next N
 * elements will be the nodes which can be anything (A, B, C .. Brick Street,
 * Main Street .. etc.). Then after the Nth element, the rest of the elements in
 * the array will be the connections between all of the nodes. They will look
 * like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there
 * may exist no connections at all.
 *
 * An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"].
 * Your program should return the shortest path from the first Node to the last
 * Node in the array separated by dashes. So in the example above the output
 * should be A-B-D. Here is another example with strArr being
 * ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"].
 * The output for this array should be A-E-D-F-G. There will only ever be one
 * shortest path for the array. If no path between the first and last node
 * exists, return -1. The array will at minimum have two nodes. Also, the
 * connection A-B for example, means that A can get to B and B can get to A.*/

function shortestPath(strArr) {
    const numNodes = parseInt(strArr[0], 10);
    const nodes = strArr.slice(1, numNodes + 1);
    const edges = strArr.slice(numNodes + 1);
  
    const graph = {};
    for (const edge of edges) {
      const [start, end] = edge.split('-');
      if (!graph[start]) graph[start] = [];
      if (!graph[end]) graph[end] = [];
      graph[start].push(end);
      graph[end].push(start);
    }
  
    const queue = [{ path: [nodes[0]], visited: new Set([nodes[0]]) }];
  
    while (queue.length > 0) {
      const { path, visited } = queue.shift();
      const current = path[path.length - 1];
  
      if (current === nodes[numNodes - 1]) {
        return path.join('-');
      }
  
      for (const neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          const newPath = path.concat(neighbor);
          const newVisited = new Set(visited);
          newVisited.add(neighbor);
          queue.push({ path: newPath, visited: newVisited });
        }
      }
    }
  
    return -1; // No path found
  }
  
  // Test cases
  
// Test cases
console.log(shortestPath(["4","A","B","C","D","A-B","B-D","B-C","C-D"])); // Output: A-B-D
console.log(shortestPath(["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"])); // Output: A-E-D-F-G