function quickSortCountComparisons(array, pivotType = 'left', left, right) {

  if (typeof left !== 'number') left = 0
  if (typeof right !== 'number') right = array.length - 1

  if (right <= left) return 0

  const pivotIndex = choosePivot(array, left, right, pivotType)

  const newPivotIndex = partition(array, pivotIndex, left, right)

  const comparisonsLeft = quickSortCountComparisons(array, pivotType, left, newPivotIndex - 1)
  const comparisonsRight = quickSortCountComparisons(array, pivotType, newPivotIndex + 1, right)

  return right - left + comparisonsLeft + comparisonsRight
}

function choosePivot(array, left, right, pivotType) {
  if (pivotType === 'left') return left
  if (pivotType === 'right') return right
  if (pivotType === 'median') {

    const first = array[left]
    const last = array[right]
    const middleInd = left + Math.floor((right - left) / 2)
    const middle = array[middleInd]

    if (first >= middle && first >= last) {
      if (middle >= last) return middleInd
      else return right
    }
    else if (middle >= first && middle >= last) {
      if (last >= first) return right
      else return left
    } else if (last >= first && last >= middle) {
      if (middle >= first) return middleInd
      else return left
    }
  }
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

module.exports = quickSortCountComparisons
