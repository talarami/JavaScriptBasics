

    // Operator modulo - reszta z dzielenia

    console.log( 30 % 12 ) // reszta z dzielenia przez 12, wynik: 6

    console.log( 432534654654 % 11 )

    console.log( 10 % 2 ) // sprawdzenie czy liczba jest parzysta, jeśli reszta z dzielenia przez 2 to 0 to liczba jest parzysta, jeśli nie to nie

    console.log( 11 % 2 ) // reszta: 1, liczba nieparzysta

    const arr = [0,1,2,3,4,5,6,7,8,9,10]

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i]

        if ((num % 2) == 0) {
            console.log(num, "jest liczbą parzystą")
        } else {
            console.log(num, "jest liczbą nieparzystą")
        }
    }




