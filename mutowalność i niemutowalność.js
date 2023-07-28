/*
Mutowalność to charakterystyka typu wartości w zmiennej, której wartość może być zmieniona.
W JavaScript tylko obiekty oraz tablice mogą być zmieniane, prymitywy nie.
W praktyce nazwa zmiennej wskazuje na nową wartość przy różnych operacjach.
*/

let str = "text"
console.log(str[0]) // t
str[0] = "L"
console.log(str) // "text" - dowód na to, że prymitywy są niemutowalne

str = str + "!"



let data = {
    a: 12
}

data.a = 34
console.log(data) // 34 - dowód na to, że obiekty są mutowalne