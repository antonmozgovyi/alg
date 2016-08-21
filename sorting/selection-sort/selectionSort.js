function selectionSort(array) {
  for (let i = 0; i < array.length; ++i) {

    let minIndex = i

    for (let j = i + 1; j < array.length; ++j) {
      if (array[j] < array[minIndex]) minIndex = j
    }

    if (minIndex != i) {
      const tmp = array[i]
      array[i] = array[minIndex]
      array[minIndex] = tmp
    }
  }
}


module.exports = selectionSort
