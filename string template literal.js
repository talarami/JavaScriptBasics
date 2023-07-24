

    // Template literal to string, ale zapisany w blacktikach a nie w cudzysłowie, może mieć treść
    // w wielu liniach i można w nim osadzać wartości zmiennych i stałych. Backtik czyli `.

    let str = `Tekst
        w
        wielu
        liniach`
        
    let a = 10
    let b = 23
    let data = `Pierwsza liczba to: ${a} i druga liczba 
        to ${b} ` + "!" // odwołanie do zmiennych lub stałych za pomocą znaku $

    console.log(data) // Pierwsza liczba to 10 i druga liczba to 23!

    
