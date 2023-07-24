
    // Array - tablica to zbiór różnych wartości, specjalny obiekt. Do elementów tablicy możemy się dostać
    // za pomocą notacji tablicowej czyli nawiasom kwadratowym oraz numeru indeksu (liczonego od 0).

    let brands = ["Ford", "Audi", "BMW", "GMC", 12, true, {a : 23}]
    console.log(brands)
    console.log(brands.length)

    brands[1] = "Dodge"
    console.log(brands)

    let brand1 = brands[0]
    console.log(brand1)

    console.log(brands[brands.length - 1])

