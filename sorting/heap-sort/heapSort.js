function parent(index) {
  return Math.floor((index - 1) / 2)
}

function leftChild(index) {
  return 2 * index + 1
}

function swap(array, left, right) {
  const tmp = array[left]
  array[left] = array[right]
  array[right] = tmp
}

function heapify(array) {
  let start = parent(array.length - 1)

  while (start >= 0) {
    siftDown(array, start, array.length - 1)
    start--
  }
}

function siftDown(array, start, end) {
  let root = start

  while (leftChild(root) <= end) {
    let child = leftChild(root)
    let swapInd = root

    if (array[swapInd] < array[child]) swapInd = child

    if (child + 1 <= end && array[swapInd] < array[child + 1])
      swapInd = child + 1

    if (swapInd === root) return
    else {
      swap(array, root, swapInd)
      root = swapInd
    }
  }
}

function heapSort(array) {
  heapify(array)

  let end = array.length - 1
  while (end > 0) {
    swap(array, end, 0)
    end--
    siftDown(array, 0, end)
  }
}

module.exports = heapSort
