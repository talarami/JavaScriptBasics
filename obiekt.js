

    // Object - typ złożony, który posiada różne dane jako pary właściwości oraz wartości. Obiekty można utworzyć 
    // w różny sposób, jednym z najbardziej popularnych to tzw. "literał obiektu", który zwany jest też "notacją literałową".

    let name = "Ania"
    let age = 23
    let city = "Waw"
    
    // literał obiektu:
    let userData = {
        name : "Ania",
        age : 23,
        city : "Waw",
        favColor : "red"
    }

    console.log(userData)

    console.log(userData.name) // Ania

    userData.city = "Krk"
    console.log(userData)
