const { readIntegerFile } = require('./util.js')

const inversionsCount = require('./week-1/inversionsCount.js')
const comparisonsCount = require('./week-2/comparisons_count.js')

const week1Input = readIntegerFile('IntegerArray.txt')

console.log('Running week 1 tasks...')

const result = inversionsCount(week1Input)

console.log(`Merge-sort inversions count is ${result.inversions}`)

/* ------------------------------------------------------------ */

const week2Input = readIntegerFile('quickSort.txt')
console.log('Running week 2 tasks...')

console.log('Left pivot.')
const result1 = comparisonsCount(week2Input.slice(0), 'left')
console.log(`Quick-sort left inversions count is ${result1}`)

console.log('Right pivot.')
const result2 = comparisonsCount(week2Input.slice(0), 'right')
console.log(`Quick-sort right inversions count is ${result2}`)

console.log('Median pivot.')
const result3 = comparisonsCount(week2Input, 'median')
console.log(`Quick-sort median inversions count is ${result3}`)
