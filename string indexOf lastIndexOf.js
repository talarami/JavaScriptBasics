
let str = "Ola ma kota. Dodatkowo Ola ma psa i rybki"

let pos = str.indexOf("Ola") // pod jakim indeksem znajduje się dane słowo, w tej sytuacji 0
console.log(pos)

let pos2 = str.indexOf("Ola", 5) // pod jakim indeksem znajduje się dane słowo, szukając od 5 elementu
console.log(pos2)

let pos3 = str.lastIndexOfindexOf("Ola", 5) // pod jakim indeksem znajduje się dane słowo, szukając od 5 elementu od końca
console.log(pos3)

let frag = str.substring(pos3) // pobieranie fragmentu łańcucha znaków 
console.log(frag)