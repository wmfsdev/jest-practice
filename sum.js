

function capitalise(string) {
  let first = string.charAt(0).toUpperCase()
  let second = string.slice(1)
  const test = `${first}${second}`
  return test
}

function reverseString(string) {
  let word = ""
  for ( let i = string.length ; i >= 0 ; i--) {
    let letter = string.charAt(i)
    word = word.concat(letter)
  }
  return word
}

const calc = {

  add: (a, b) => {
    return a + b
  },

  multiply: (a, b) => {
    return a * b
  },

  subtract: (a, b) => {
    return a - b
  },

  divide: (a, b) => {
    return a / b
  }
};


function caesar(string, shift) {
  const charCode = getCharCode(string)
  const shiftedCharCode = shiftCharCode(charCode, shift)
  return convertCharCode(shiftedCharCode)
}  

function getCharCode(string) {
  let codeList = []
  for (const element of string) {
    let charCode = element.charCodeAt()
    codeList.push(charCode)
  }
  return codeList
}


function shiftCharCode(charCode, shift) {
  let shiftedCodeList = []
  charCode.forEach(char => {
    
    if (char >= 65 && char <= 90 && char + shift > 90) {
      let steps = 90 - char
      let remaining = shift - steps
      shiftedCodeList.push(65 + remaining - 1)
      
    } else if (char >= 65 && char <= 90 && char + shift <= 90) {
      shiftedCodeList.push(char + shift)
    
    } else if (char >= 97 && char <= 122 && char + shift > 122) {
      let steps = 122 - char
      let remaining = shift - steps
      shiftedCodeList.push(97 + remaining - 1)

    } else if (char >= 97 && char <= 122 && char + shift <= 122) {
      shiftedCodeList.push(char + shift)

    } else shiftedCodeList.push(char)
  });
  return shiftedCodeList
}


function convertCharCode(array) {
  return String.fromCharCode(...array)
}

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}


export {  caesar, capitalise, reverseString, forEach, calc  }

