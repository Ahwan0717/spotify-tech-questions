module.exports = decodeString = (s) => {

    let arrNums = []
    let arrChars = []
    let repeat = 0
    let result = ''

    console.log(s)

    for (let i = 0; i < s.length; i++) {
        if (isNum(s[i])) {
            repeat = parseInt(s[i])
            console.log('repeat set to ' + repeat)
        }
        else if (isOpen(s[i])) {
            arrNums.push(repeat)
            console.log('arrNums: ' + arrNums)
            arrChars.push(result)
            console.log('arrChars: ' + arrChars)

            result = ''
            repeat = 0;
        }
        // else if (isChar(s[i])){
        //     arrRepeat.push(parseInt(s(i))
        //     result.push)
        // }
        else if (isClose(s[i])) {
            result = arrChars.pop() + result.repeat(arrRepeat.pop()); // uses string repeat() method
        }
        else {
            result += s[i]
        }
        return result
    }
}

isNum = (s) => !isNaN(s) // inverts the javascript built in isNan() function
isOpen = (s) => s === '['
isClose = (s) => s === ']'
isChar = (c) => c.toLowerCase() != c.toUpperCase()
