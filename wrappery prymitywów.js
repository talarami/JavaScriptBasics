/*
Prymitywy jak liczby, łańcuchy znaków itd mogą zachowywać się jak obiekty,
gdy użyjemy ich metod lub właściwości. Java Script automatycznie skonwertuje je na obiekt
korzystając z konstruktora-wrappera. Wywołuje metodę i przywraca wartość do prymitywu.
*/

let str = "test" 

str.length

let txt = new String("test")
txt.length

let num = 123.456
console.log(num.toFixed(2)) // obcięcie do 2 miejsc po przecinku

let numb = new Number(123.456)
console.log(num.toFixed(2))