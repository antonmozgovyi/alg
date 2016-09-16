const fs = require('fs')

function readIntegerFile(name) {
  const data = fs.readFileSync(name, { encoding: 'utf-8'})

  return data.split('\n').filter(item => item).map((item) => (+item))
}

function readGraphFromFile(name) {
  return (
    fs.readFileSync(name, { encoding: 'utf-8'})
      .split('\n')
      .filter(item => item)
      .map(item => {
        const data = item.split('\t').filter(i => i.trim())
        return {
          name: data[0]
        , edges: data.slice(1)
        }
      })
  )
}

function readDirectedGraphFromFile(name) {
  const graph = {}

  const data = fs.readFileSync(name, { encoding: 'utf-8' })
    data.split('\n')
    .filter(row => row)
    .forEach(row => {
      const edge = row.split(' ')
          , v = edge[0]
          , u = edge[1]

      graph[v] = graph[v] || { edges: [] }
      graph[v].edges.push(u)
      graph[u] = graph[u] || { edges: [] }
    })

    delete data

  return graph
}

function readDirectedWeightedGraph(name) {
  const graph = {}

  const data = fs.readFileSync(name, { encoding: 'utf-8' })
    data.split('\n')
    .filter(row => row)
    .forEach(row => {
      const edge = row.split(' ')
          , v = edge[0]
          , u = edge[1]
          , distance = (+edge[2])

      graph[v] = graph[v] || { edges: [] }
      graph[v].edges.push({ key: u, distance })
      graph[u] = graph[u] || { edges: [] }
    })

    delete data

  return graph
}

module.exports = {
  readIntegerFile
, readGraphFromFile
, readDirectedGraphFromFile
, readDirectedWeightedGraph
}
