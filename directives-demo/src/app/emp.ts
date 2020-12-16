export class Emp {
    constructor(private id: number, private name: string, private city: string, private salary: number) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.salary = salary;
    }

    public printDetails():string{
        return this.id+" "+this.name+" "+this.city+" "+this.salary;
    }
}
