module.exports = changePossibilities = (targetAmount, arrDenom) => {
    const possibilities = (new Array(targetAmount + 1).fill(0)) // initializes an array where each element is 0. Each element will record the number of possible combinations
    possibilities[0] = 1; // there exists 1 possible permutation where targetAmount is 0
    for (let ele of arrDenom){ // loop through each element in the array of demoninations
        for (let amount = 1; amount < targetAmount + 1; amount++){ // we check each denomination that is smaller that the target targetAmount. It is impossible to use a denomination that is larger than the target.
            if (ele <= amount){
                possibilities[amount] += possibilities[amount - ele]
            }
        }
    }
    return possibilities[targetAmount]
}

