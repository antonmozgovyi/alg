function kargerMinCut(graph) {
  let minCuts = Infinity
  const repeats = 100

  for (let i = 0; i < repeats; ++i) {
    const input = JSON.parse(JSON.stringify(graph))

    const result = cut(input)
    if (minCuts > result[0].edges.length) minCuts = result[0].edges.length
  }

  console.log(`Min cust - ${minCuts}`)
}

function cut(graph) {
  if (graph.length < 3) return graph

  const vIndex = Math.floor(Math.random() * graph.length)
      , v = graph[vIndex]
      , edge = Math.floor(Math.random() * v.edges.length)
      , u = getNode(graph, v.edges[edge])
      , uIndex = graph.indexOf(u)

  concat(graph, v, u)

  delete graph[uIndex]
  graph.splice(uIndex, 1)

  return cut(graph)
}

function concat(graph, v, u) {
  v.vertexes = v.vertexes || [v.name]

  if (u.vertexes) v.vertexes = v.vertexes.concat(u.vertexes)
  else v.vertexes.push(u.name)

  v.edges = v.edges.concat(u.edges).filter(e => v.vertexes.indexOf(e) === -1)
}

function getNode(graph, name) {
  return graph.filter(v => v.name === name || (v.vertexes && v.vertexes.indexOf(name) !== -1))[0]
}


module.exports = kargerMinCut
