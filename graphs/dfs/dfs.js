function dfs(graph) {
  const input = graph.slice(0)

  walk(graph, graph[0])
}

function walk(graph, vertex) {
  if (!vertex.visited) {
    vertex.visited = true
    console.log(`Visited vertex '${vertex.name}'`)
    vertex.edges.forEach(v => walk(graph, getNode(graph, v)))
  }
}

function getNode(graph, name) {
  return graph.filter(v => v.name === name)[0]
}

module.exports = dfs
