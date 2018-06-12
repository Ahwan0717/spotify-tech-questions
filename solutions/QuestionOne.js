module.exports = sortByStrings = (s,t) => {
    let order = {}
    for (let i = 0; i < t.length; i++){ // loop through string t and record the order of each letter
        order[t[i]] = i
    }
    arr = s.split('') // split string s into an array
    arr.sort( (left,right) => { // use javascript sort() method by passing in a compareFunction
        return order[left] > order[right]
    })
    return arr.join('') // return the joined array
}