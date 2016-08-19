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

  /**
   * Sorts the (sub-)array
   *
   * @param {Array} array The target array
   * @param {int} left The index of the leftmost element, defaults 0
   * @param {int} left The index of the rightmost element,
   defaults array.length-1
   */
  function sort(array, left, right) {

    var pivot = null;

    left = left || 0
    //
    // if(typeof left !== 'number') {
    //   left = 0;
    // }
    //

    // right = right || (array.length - 1)


    if(!right) {
      // console.log(right)
      right = array.length - 1;
    }

    // effectively set our base
    // case here. When left == right
    // we'll stop
    if(left >= right) return

      // pick a pivot between left and right
      // and update it once we've partitioned
      // the array to values < than or > than
      // the pivot value
      pivot     = choosePivot(array, left, right)
      newPivot  = partition(array, pivot, left, right)

      sort(array, left, newPivot - 1)
      sort(array, newPivot + 1, right)

  }

module.exports = quickSort
