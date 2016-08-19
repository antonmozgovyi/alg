function mergeSort(array) {
  if (array.length < 2) return array

  const half = Math.round(array.length / 2)

  const left = mergeSort(array.slice(0, half))
  const right = mergeSort(array.slice(half, array.length))

  return merge(left, right)
}

function merge(left, right) {
  const leftLength = left.length
  const rightLength = right.length
  const data = []
  let i = 0
  let j = 0

  for (let k = 0; k < leftLength + rightLength; ++k) {
    if (leftLength <= i && rightLength <= j) break

    if (leftLength <= i) data.push(right[j++])
    else if (rightLength <= j) data.push(left[i++])
    else if (left[i] < right[j]) data.push(left[i++])
    else data.push(right[j++])
  }

  return data
}

module.exports = mergeSort
