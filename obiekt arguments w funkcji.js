
function sumAll(a, b, c) {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }

    return sum
}
    

const ret = sumAll (1, 2, 3, 4, 5, 6, 7)
console.log(ret)