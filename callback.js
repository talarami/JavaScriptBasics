// callback - funkcja przekazana jako argument do innej funkcji, dzięki czemu
// może zostać wywołana jeśli jest potrzebna

function msg(str) {
    console.log(str)
}

function greaterThan5(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (el > 5) callback(el) // funkcja wywołana jeśli ten warunek jest spełniony
    }
}

greaterThan5([2, 4, 6, 8, 10], msg)

greaterThan5([1, 3, 6, 9, 12], function(str) {
    console.log(str)
})