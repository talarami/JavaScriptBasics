

    // Stwórz tablicę elementów od -10 do 10 co 2. Dodaj wszystkie elementy tablicy
    // do siebie, pokaż sumę w konsoli. Podczas iteracji tablicy pokaż w konsoli tylko
    // liczby większe od zera.

    const arr = [-10,-8,-6,-4,-2,0,2,4,6,8,10]
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        sum = sum + num;

        if(num > 0) console.log("num", num)

    }

    console.log("SUM:", sum)

