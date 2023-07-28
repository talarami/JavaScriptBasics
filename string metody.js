
let str = "Text".concat("tr") // concat służy do łączenia łańcuchów znaków

str = str.toUpperCase() // zmienia na duże litery
console.log(str) // TEXTTR

str = str.toLowerCase // zmienia na małe litery
console.log(str) // texttr

let txt = " text ".trim() // usuwa białe znaki
console.log(txt)

console.log(txt.charAt(0)) // wyświetlenie konkretnego znaku ( // t )
console.log(txt.charCodeAt(0)) // liczba reprezentująca znak "t" w tablicy unicode

txt = "A B C D F S D F S"
let strArr = txt.split(" ") // rozbicie łańcucha znaków ze względu na spację (w praktyce uzyskanie tablicy tych elementów)
console.log(strArr)

txt = strArr.join("|") // łączenie łańcucha znaków (tutaj za pomocą |)
console.log(txt)

let names = "Asia Kasia Ola Kasia Daniel"
names = names.replace("Asia", "Zuza") // podmienianie elementów
names = names.replace("Kasia", "Karol") // tylko pierwsza "Kasia" zmienia się na "Karol"
names = names.replace(/Kasia/g, "Karol") // wszystkie elementy o nazwie "Kasia" zmnieniają się na "Karol"