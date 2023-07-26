/*
Napisz funkcję createUser(name, surname, city) która zwróci obiekt
użytkownika z danymi jak w parametrze.
Zrób drugą funkcję promoteToEmployee(user) która przyjmie obiekt użytkownika
i zwróci nowy obiekt z przekazanymi danymi użytkownika oraz doda nowe właściwości:
- company jako "Example Ltd"
- position jako "programmer"
Na koniec nowy obiekt jest zwrócony z funkcji.
Utwórz nowego użytkownika z dowolnymi danymi oraz wywołaj drugą funkcję aby stał się
pracownikiem, pokaż obiekty w konsoli.
*/


function createUser(name, surname, city) {
    return {
        name: name,
        surname: surname,
        city:city
    }
}

function promoteToEmployee(user) {
    return {
        ...user,
        company: "Example Lts",
        position: "programmer"
    }
   
}


let user1 = createUser("Ania", "Talarowska", "Waw")
console.log(user1)

let employee1 = promoteToEmployee(user1)
console.log(employee1)