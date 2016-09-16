const R = require('ramda')

function dijkstra(graph, from) {

  function getMinDistanceNode() {
    let node = nodes[0]

    for (let i = 1; i < nodes.length; ++i) {
      if (distances[node] > distances[nodes[i]]) node = nodes[i]
    }

    return node
  }

  const distances = {}
  const previous = {}
  const nodes = []

  R.forEach(key => {
    distances[key] = Infinity
    previous[key] = null
    nodes.push(key)
  }, R.keys(graph))

  distances[from] = 0

  while (nodes.length) {
    // get node with minimum distance
    const node = getMinDistanceNode(nodes)

    // remove from nodes
    const ind = nodes.indexOf(node)
    nodes.splice(ind, 1)

    R.forEach(neighbor => {
      const alt = distances[node] + neighbor.distance
      if (alt < distances[neighbor.key]) {
        distances[neighbor.key] = alt
        previous[neighbor.key] = node
      }
    }, graph[node].edges)
  }

  R.forEach(key => {
    console.log(`Distance to ${key} is ${distances[key]}`) 
  }, R.keys(distances))  


}

module.exports = dijkstra
