

    // Oblicz sumę parzystych elementów tablicy liczb od 1 do 20.

    const tab = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let sum = 0

    for (let i = 0; i <tab.length; i++) {
        const num = tab[i]

        if ((num % 2) == 0) {
            sum += num
        }
    }

    console.log("suma:", sum)

