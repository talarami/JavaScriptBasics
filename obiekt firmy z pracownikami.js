
let company = {
    name: "Example Ltd",
    city: "Waw",
    employees: [],
    addEmployee: function (name, surname) {
        const employee = {
            name: name,
            surname:surname,
            email: `${name}.${surname}@example.com`
        };

        let index = this.employees.length
        this.employees[index] = employee
    },
    showEmployees: function () {
        console.log("Employees from " + this.name);
        for (let i = 0; i < this.employees.length; i++) {
            const employee = this.employees[i];
            console.log(employee.name, employee.surname);
        }
    }
};

company.city = "Gdańsk";
company.name = "Extra Ltd."
company["name"] = "Special Ltd.";

company.addEmployee("Ania", "Talarowska");
company.addEmployee("Dominik", "Kożuch");

company.showEmployees();