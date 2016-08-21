const { readIntegerFile } = require('../util.js')

const mergeSort = require('./merge-sort/mergeSort.js')
const quickSort = require('./quick-sort/quickSort.js')
const comparisonsCount = require('./quick-sort/comparisons_count.js')
const insertionSort = require('./insertion-sort/insertionSort.js')
const bubbleSort = require('./bubble-sort/bubbleSort.js')
const selectionSort = require('./selection-sort/selectionSort.js')
const heapSort = require('./heap-sort/heapSort.js')

const input = readIntegerFile('IntegerArray.txt')

console.log('Running sort algorithms...')
//
// console.log('Input: ', input.reduce((acc, cur) => acc + ', ' + cur, ''))
//
// console.log('--- Merge sort ---')
//
// const result = mergeSort(input)
//
// console.log('Result: ', result.reduce((acc, cur) => acc + ', ' + cur, ''))
//
// console.log('--- Quick sort ---')
//
// const qsInput = input.slice(0)
//
// quickSort(qsInput)
//
// console.log('Result: ', qsInput.reduce((acc, cur) => acc + ', ' + cur, ''))

// console.log('--- Insertions sort ---')
//
// const insertionInput = [3, 2, 7, 5, 1]//input.slice(0)
//
// insertionSort(insertionInput)
//
// console.log('Result: ', insertionInput.reduce((acc, cur) => acc + ', ' + cur, ''))

// console.log('--- Bubble sort ---')
//
// const bubbleInput = [3, 2, 7, 5, 1]//input.slice(0)
//
// bubbleSort(bubbleInput)
//
// console.log('Result: ', bubbleInput.reduce((acc, cur) => acc + ', ' + cur, ''))

// console.log('--- Selection sort ---')
//
// const selectionInput = [3, 2, 7, 5, 1]//input.slice(0)
//
// selectionSort(selectionInput)
//
// console.log('Result: ', selectionInput.reduce((acc, cur) => acc + ', ' + cur, ''))

console.log('--- Heap sort ---')

const heapInput = [3, 2, 7, 5, 1]//input.slice(0)

heapSort(heapInput)

console.log('Result: ', heapInput.reduce((acc, cur) => acc + ', ' + cur, ''))
