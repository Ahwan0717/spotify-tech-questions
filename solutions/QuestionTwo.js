module.exports = decodeString = (s) => {

    let arrNums = []
    let arrChars = []
    let repeat = 0
    let result = ''
    
    for (let i = 0; i < s.length; i++) {
        if (isNum(s[i])) {
            repeat = parseInt(s[i])
        }
        else if (isOpen(s[i])) {
            arrNums.push(repeat)
            arrChars.push(result)
            result = ''
            repeat = 0
        }
        else if (isClose(s[i])) {
            result = arrChars.pop() + result.repeat(arrNums.pop()); // uses string repeat() method
        }
        else {
            result += s[i]
        }
    }
    return result
}
isNum = (s) => !isNaN(s) // inverts the javascript built in isNan() function
isOpen = (s) => s === '['
isClose = (s) => s === ']'
