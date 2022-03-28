export const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}
export function capitalize(str) {
  if (typeof str !== 'string') {
    return ''
  }
  return str[0].toUpperCase() + str.slice(1)
}

export function quickSort(arr) {
  if (arr.length < 1) {
    return arr
  }
  let pivot = arr[Math.floor(arr.length / 2)][1]
  let less = []
  let equal = []
  let greater = []
  let common = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] < pivot) {
      less.push(arr[i])
    }
    if (arr[i][1] === pivot) {
      equal.push(arr[i])
    }
    if (arr[i][1] > pivot) {
      greater.push(arr[i])
    }
  }
  return common.concat(quickSort(less), equal, quickSort(greater))
}
export function geIfAdminUid(adminUid, user) {
  console.log(adminUid.find(i => i === user.uid) === user.uid)
  return adminUid.find(i => i === user.uid)
}

