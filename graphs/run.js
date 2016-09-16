const { readGraphFromFile, readDirectedGraphFromFile, readDirectedWeightedGraph } = require('../util.js')
    , dfs = require('./dfs/dfs.js')
    , topologicalSort = require('./topological-sort/topologicalSort.js')
    , dijkstra = require('./dijkstra/dijkstra.js')
    , R = require('ramda')

const graph = readGraphFromFile('kargerMinCut.txt')

console.log('Runnind DFS algorithm...')

dfs(graph)

/* ----------------------------------------------------------------------------------------- */

const directedGraph = readDirectedGraphFromFile('SCC.txt')

console.log('Runnind topological sort algorithm ...')

topologicalSort(directedGraph)

/* ----------------------------------------------------------------------------------------- */

const weightedGraph = readDirectedWeightedGraph('dijkstra.txt')

dijkstra(weightedGraph, R.keys(weightedGraph)[0])

