class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;

        this.details = function () {
            console.log(this.id + " " + this.name + " " + this.city);
        };
    }
}

let person=new Person(100,'Shantanu','Hyderabad');

person.details();

/*
function Emp(id,name,city,salary){

    Person.call(this,id,name,city);
    this.salary=salary;
    this.details=function(){
        console.log(this.id+" "+this.name+" "+this.city+" "+this.salary);
    }
}

let emp=new Emp(101,'Arun','Hyderabad',45000);

emp.details();
*/