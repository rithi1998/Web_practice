class Employee{
    constructor(Name,id){
        this.Name=Name;
        this.id=id;
    }
    employ(){
        console.log(`Hi I am ${this.Name} and my id is ${this.id} `);
    }
}
class Manager extends Employee{
    constructor(domain){
        // super(Name,id);
        this.domain=domain;
    }
    manage(){
        console.log(`Hi Iam ${this.Name} and my id is ${this.id}. I work for ${this.domain}`);
    }
}

const newobject = new Manager("Lamp");
// newobject.employ();
newobject.manage();