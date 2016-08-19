const { readIntegerFile } = require('../util.js')

const mergeSort = require('./merge-sort/mergeSort.js')
const quickSort = require('./quick-sort/quickSort.js')
const comparisonsCount = require('./quick-sort/comparisons_count.js')

const input = readIntegerFile('IntegerArray.txt')

console.log('Running sort algorithms...')

console.log('Input: ', input.reduce((acc, cur) => acc + ', ' + cur, ''))

console.log('--- Merge sort ---')

const result = mergeSort(input)

console.log('Result: ', result.reduce((acc, cur) => acc + ', ' + cur, ''))

console.log('--- Quick sort ---')

const qsInput = input.slice(0)

quickSort(qsInput)

console.log('Result: ', qsInput.reduce((acc, cur) => acc + ', ' + cur, ''))
