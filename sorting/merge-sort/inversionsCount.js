function mergeSort(array, inversions) {

  if (typeof inversions !== 'number') inversions = 0

  if (array.length < 2) return { data: array, inversions: inversions }

  const half = Math.round(array.length / 2)

  const leftResult = mergeSort(array.slice(0, half), inversions)
  const rightResult = mergeSort(array.slice(half, array.length), inversions)

  return merge(leftResult.data, rightResult.data, leftResult.inversions + rightResult.inversions)
}

function merge(left, right, inversions) {
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
    else {
      data.push(right[j++])
      inversions += leftLength - i
    }
  }
  return { data: data, inversions: inversions }
}

module.exports = mergeSort
