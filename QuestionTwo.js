module.exports = decodeString = (s) => {
    // let result = ''

    // if (s.length === 0) return ''
    // else {
    //     for (let i = 0; i < s.length; i++){
    //         if (isOpen(s[i]) || isClose(s[i])){
    //             decodeString(s.slice(1), s.lastIndexOf(']'))
    //         }
    //         else if (isNum(s[i])){
    //             let numRepeat = parseInt(s[i])
    //             for (let j = 1; j < numRepeat; j++){
    //                 // console.log(s.slice(s.indexOf('[')+1, s.lastIndexOf('])')))
    //                 result += decodeString(s.slice(s.indexOf('[')+1, s.lastIndexOf(']')))
    //                 // let substring = s.slice(s.indexOf('[')+1, s.lastIndexOf('])'))
    
    //             }
    //         }
            
    //         else{
    //             result += s[i]
    //             decodeString(s.slice(1))
    //         }
    //     }
    // }
    // // console.log(result)
    // return result

    // let arrNums = []
    // let arrChars = []
    // let result = ''
    // let repeat = 0
    
    // for (let i = 0; i < s.length; i++){
    //     if (isNum(s[i])){
    //         repeat = s[i]
    //     }
    //     else if (isOpen(s[i])){

    //     }
    //     else if (isClose(s[i])){

    //     }
    //     else {

    //     }
    // }
    // return result

    let result = ''
   
    let arrRepeat = [];
    let accum = ''
    let accumCount = 0;
    let arrOpenCount = 0

    console.log(s)

    for (let i = 0; i < s.length; i++){
        // console.log(i)
        if (isNum(s[i])){
            arrRepeat.push(parseInt(s[i]))
            console.log('repeat set to ' + arrRepeat)
        }
        else if (isOpen(s[i])){
            arrOpenCount++
            console.log('arrOpenCount: ' + arrOpenCount)
        }
        else if (isChar(s[i])){
            accum += s[i]
            console.log('accum: ' + accum)
        }
        else if (isClose(s[i])){
            arrOpenCount--
            let repeat = arrRepeat.pop()
            if (arrOpenCount === 0){
                for (let j = 0; j < repeat; j++){
                    result += accum.slice(-accumCount) // only want the BACK of the string AFTER the [
                }
                accum = accum.slice(0,-accumCount) // only want the FRONT of the string BEFORE the [
            }
        }
    }
    console.log('result: ' + result)
    return result
}

isNum = (s) => !isNaN(s) // inverts the javascript built in isNan() function
isOpen = (s) => s === '['
isClose = (s) => s === ']'
isChar = (c) =>  c.toLowerCase() != c.toUpperCase();