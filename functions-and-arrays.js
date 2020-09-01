function maxOfTwoNumbers(n1, n2) {

  if (n1 > n2) {
    return n1
  } else {
    return n2
  }

}

maxOfTwoNumbers(2, 1)  // 2 
maxOfTwoNumbers(-5, 3) // 3


// Iteration #2: Find longest word

// ['a', 'ab', 'c']

// 0 : a --> a
// 1 : ab --> ab
// 2 : c --> ab


// findLongestWord(['foo', 'bar']) // 'foo'

function findLongestWord(arrayOfWords) {

  if (arrayOfWords === []) {
    return null
  }

  let result = ""
  for (let i = 0; i < arrayOfWords.length; i++) {



    console.log(i)
    console.log(arrayOfWords[i])

    if (arrayOfWords[i].length > result.length) {
      result = arrayOfWords[i]
    }

    console.log(result)

  }

  return result

}


const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];





// Iteration #3: Calculate the sum


// DRY

function sumNumbers(arrayNumbers) {

  let result = 0
  for (let i = 0; i < arrayNumbers.length; i++) {

    result += arrayNumbers[i]

  }
  return result

}

function averageNumbers(arrayNumbers) {

  return sumNumbers(arrayNumbers) / arrayNumbers.length

}

function sum(array) {

  let result = 0
  for (let i = 0; i < array.length; i++) {

    if (typeof array[i] === 'string') {
      result += array[i].length
    } else if (typeof array[i] === 'number') {
      result += array[i]
    } else {
      if (array[i] === true) {
        result += 1
      } else {
        result += 0
      }
    }



  }
  return result

}
