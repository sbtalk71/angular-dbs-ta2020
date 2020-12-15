
class Person {
    /*
    private id: number;
    private name: string;
    private city: string;
    private salary: number;
    */
    constructor(private id: number, private name: string, private city: string, private salary: number) {
       /* this.id = id;
        this.name = name;
        this.city = city;
        this.salary = salary;
        */
    }

  

    public details() :string {
        return this.id + " " + this.name + " " + this.city + " " + this.salary;
    }

    public getId(){
        return this.id;
    }
}

var person=new Person(100,'Shantanu','Hyderabad',45000);

console.log(person.details());



