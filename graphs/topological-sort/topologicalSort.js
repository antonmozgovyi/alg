const R = require('ramda')

function topologicalSort(graph) {
  let label = R.keys(graph).length

  function dfs(v) {
    R.forEach(e => {
      if (!graph[e].visited) {
        graph[e].visited = true
        dfs(graph[e])
      }
    }, v.edges)

    v.order = label
    label--
  }

  R.forEach(key => {
    if (!graph[key].visited) dfs(graph[key])
  }, R.keys(graph))

  R.forEach(key => {
    console.log(`Vertex ${key} order is ${graph[key].order}`)
  }, R.keys(graph))
}

module.exports = topologicalSort
