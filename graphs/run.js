const { readGraphFromFile, readDirectedGraphFromFile } = require('../util.js')
    , dfs = require('./dfs/dfs.js')
    , topologicalSort = require('./topological-sort/topologicalSort.js')

const graph = readGraphFromFile('kargerMinCut.txt')

console.log('Runnind DFS algorithm...')

dfs(graph)

/* ----------------------------------------------------------------------------------------- */

const directedGraph = readDirectedGraphFromFile('SCC.txt')

console.log('Runnind topological sort algorithm ...')

topologicalSort(directedGraph)
