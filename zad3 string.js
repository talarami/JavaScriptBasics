

    // Stwórz zmiennąi dodaj do niej string: "Ala ma kota". Pokaż tekst w konsoli. Wyświetl w konsoli pierwszy i ostatni znak.
    // Dodaj do tekstu z pomocą operatora konkatenacji znak kota wyszukując go w google. Pokaż nowy łańcuch w konsoli.

    let exampleOne = "Ala ma kota"
    console.log(exampleOne)
        
    let exampleLen = exampleOne.length
    console.log(exampleLen)

    console.log(exampleOne[0])
    console.log(exampleOne[exampleOne.length - 1])

    let addCat = exampleOne + "🐈"
    console.log(addCat)
