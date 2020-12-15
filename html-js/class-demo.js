var Person = /** @class */ (function () {
    /*
    private id: number;
    private name: string;
    private city: string;
    private salary: number;
    */
    function Person(id, name, city, salary) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.salary = salary;
        /* this.id = id;
         this.name = name;
         this.city = city;
         this.salary = salary;
         */
    }
    Person.prototype.details = function () {
        return this.id + " " + this.name + " " + this.city + " " + this.salary;
    };
    return Person;
}());
var person = new Person(100, 'Shantanu', 'Hyderabad', 45000);
console.log(person.details());
