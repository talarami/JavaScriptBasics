/*
IIFE (Immediately Invoked Function Expression) - funkcja natychmiastowa, czyli
anonimowan funkcja, która od razu jest wywołana. Taka funkcja ogranicza zakres dostępu
do zmiennych czy innych funkcji tylko do funkcji natychmiastowej, nie zaśmieca
globalnymi danymi naszego programu, czyli jest mniejsze ryzyko kolizji 
z innymi skryptami.
*/

(function (){
    let data = 10
    function test() {
        console.log("From IIFE: " + data)
    }

    test()
}()) // za pomocą umieszczenia () między } i ) wywołujemy funkcję anonimową

console.log(data) // błąd