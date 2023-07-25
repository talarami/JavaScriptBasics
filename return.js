// return - pozwala na zwrócenie wartości i przerwanie działania funkcji lub pętli

function sum(a, b) {
    return a + b
}

let result = sum(12, 5)
console.log(result) // 17

function test(data) {
    if (data == 0) return -1 

    data += 5
    return data * 3
}

console.log(test(10)) // 45, bo dodaliśmy do data 5 i pomnożyliśmy przez 3

