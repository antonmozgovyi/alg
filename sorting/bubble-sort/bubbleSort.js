
function bubbleSort(array) {
  for (let i = 0; i < array.length; ++i) {
    for (let j = array.length - 1; j >= i; --j) {
      if (array[j] < array[j - 1]) swap(array, j, j - 1)
    }
  }
}

function swap(array, left, right) {
  const tmp = array[left]
  array[left] = array[right]
  array[right] = tmp
}

module.exports = bubbleSort
