
let arr = [1,2,3,4]

arr = new Array(1, 2, 3, 4, {a: 23}, "12")

arr = [ 1, 2, 3, [], [5, 6, 7] ]

arr =[
    [1, 2, 3],
    [4, 5, 6],
    [1, 2, 3]
]

arr = [
    {a: 12},
    {a: 12},
    {a: 12}
]

let data = []
data.push(22) // dodanie elementu do tablicy
data.push(33)
data.push(55)
console.log(data) // [22, 33, 44, 55]

console.log(data.pop()) // pobranie ostatniego elementu i jednocześnie usunięcie go z tablicy; 55

console.log(data.reverse()) // odwrócenie elementów tablicy; [55, 44, 33, 22]

data = data.concat( [1, 2, 3, 4] ) // dodanie nowych elementów do tablicy
console.log(data)

let str = data.join("__")  // połączenie wszystkich elementów tablicy do łańcucha znaków za pomocą "__"
console.log(str)

let arr3 = Array(10).fill(5) // tablica 10 elementów, każdy z wartością 5
console.log(arr3)