const { readGraphFromFile } = require('../util.js')
const dfs = require('./dfs/dfs.js')

const graph = readGraphFromFile('kargerMinCut.txt')

console.log('Runnind DFS algorithm...')

dfs(graph)
