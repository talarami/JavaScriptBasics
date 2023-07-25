/* 
Stwórz funkcję filterNames, która przyjmie parametry:
- arr - tablica imion
- minLen - minimalna ilość znaków imienia
- callback - funkcja która pokaże przekazany łańcuch znaków w konsoli
Wywołaj filterNames z tablicą o wartościach:
Ania, Ola, Kasia, Daniel, Karolina przekazując minimalną ilość znaków
jako 4 i 5.
*/



function filterNames(arr, minLen, callback)  {
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        if (name.length >= minLen) callback(name)
    }
}

filterNames(["Ania", "Ola", "Kasia", "Daniel", "Karolina"])
    4, function (str) {
        console.log(str)
}

filterNames(["Ania", "Ola", "Kasia", "Daniel", "Karolina"])
    5, function (str) {
        console.log(str)
}