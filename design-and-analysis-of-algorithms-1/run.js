const { readIntegerFile } = require('./util.js')

const inversionsCount = require('./week-1/inversionsCount.js')
const comparisonsCount = require('./week-2/comparisons_count.js')

const week1Input = readIntegerFile('IntegerArray.txt')

console.log('Running week 1 tasks...')

const result = inversionsCount(week1Input)

console.log(`Merge-sort inversions count is ${result.inversions}`)
