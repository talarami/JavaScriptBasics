

    /* Napisz zmienną topSpeed jako 190, w której będzie przechowywana maksymalna prędkość
       auta. W instrukcji switch sprawdź następujące przypadki:
       - wartość 80 i 100 to informacja w konsoli "standardowa prędkość"
       - 170 - "szybkie auto"
       - 190 - "naprawdę szybkie auto"
       - 230 - "bardzo szybkie auto"
       - 270 - "super szybkie auto"
       - default - "nieznana prędkość"

*/

    let topSpeed = 190

    switch (topSpeed) {
        case 80:
            console.log("standardowa prędkość")
            break
        case 100:
            console.log("standardowa prędkość")
            break
        case 170:
            console.log("szybkie auto")
            break
        case 190: 
            console.log("naprawdę szybkie auto") 
            break
        case 230: 
            console.log("bardzo szybkie auto")
            break
        case 270:
            console.log("super szybkie auto")
            break
        defualt:
            console.log("nieznana prędkość")
    }

