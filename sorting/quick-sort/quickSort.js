function quickSort(array, left, right) {

  if (typeof left !== 'number') left = 0
  if (typeof right !== 'number') right = array.length - 1

  if (right <= left) return

  const pivotIndex = choosePivot(array, left, right)

  const newPivotIndex = partition(array, pivotIndex, left, right)

  quickSort(array, left, newPivotIndex - 1)
  quickSort(array, newPivotIndex + 1, right)
}

function choosePivot(array, left, right) {
  return left
}

function swap(array, left, right) {
  const tmp = array[left]
  array[left] = array[right]
  array[right] = tmp
}

function partition(array, pivotIndex, left, right) {
  const pivot = array[pivotIndex]

  if (pivotIndex !== left) swap(array, left, pivotIndex)

  let i = left + 1
  for (let j = left + 1; j <= right; ++j) {
    if (array[j] < pivot) {
      swap(array, j, i)
      i++
    }
  }

  swap(array, left, i - 1)

  return i - 1
}

module.exports = quickSort
