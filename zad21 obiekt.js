/*
Napisz obiekt reprezentujący szkołę z jej nazwą, miastem i tablicą ze studentami.
Dodaj metodę szkoły do utworzenia studenta na podstawie imienia i nazwiska, która
doda obiekt studenta do tablicy studentów.
Napisz metodę showStudents(), która w konsoli pokaże wszystkich studentów. 
Sprawdź czy ich ilość jest równa 0, jeśli tak pokaż w konsoli info, że 
nie ma studentów. 
Dodaj metodę getStudentsNum() która zwróci ilość studentów.
Zapisz metodę resetStudents List(), która przypisze pustą tablicę do tablicy
listy studentów.
*/

const school = {
    name: "highSchool",
    city: "Waw",
    students: [],
    addStudent: function(name, surname) {
        const student = {
            name: name,
            surname: surname
        }

        
        this.students[this.students.length] = student

    },
    showStudents: function () {
        if (this.students.length === 0) {
            console.log("Brak studentów w szkole: " + this.name);
        } else {
            for (let i = 0; i < this.students.length; i++) {
                const s = this.students[i];
                console.log("Student: " + s.name + " " + s.surname);
            }
        }
    },
    getStudentsNum: function () {
        return this.students.length;
    },
    resetStudentsList: function () {
        this.students = [];
    }
};

school.addStudent("Ania", "T");
school.addStudent("Dominik", "K");
school.showStudents();

console.log( "Liczba studentów: " + school.getStudentsNum() );
school.resetStudentsList();
console.log( "Liczba studentów: " + school.getStudentsNum() );

