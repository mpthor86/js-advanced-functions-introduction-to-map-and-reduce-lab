// Your code here
function mapToNegativize(arr) {
    let newArr = []
    arr.forEach(element => {
            let newNum = element * -1
            newArr.push(newNum)
        })
        return newArr
    }

function mapToNoChange(arr) {
    let newArr = []
    arr.forEach(element => newArr.push(element))
    return newArr
}

function mapToDouble(arr) {
    let newArr = []
    arr.forEach(element => {
            let newNum = element * 2
            newArr.push(newNum)
        })
        return newArr
}

function mapToSquare(arr) {
    let newArr = []
    arr.forEach(element => {
            let newNum = element * element
            newArr.push(newNum)
        })
        return newArr
}

function reduceToTotal(arr, start = 0) {
    let int = start
    for(let i = 0; i < arr.length; i++){
        int = arr[i] + int
    }
    return int
}

function reduceToAllTrue(arr){
    for (let i = 0; i < arr.length; i++ ) {
      if (!arr[i]){
          return false
      }
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i]){
            return true
        }
    }
    return false
}