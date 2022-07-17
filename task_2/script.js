class Person{
    constructor(){
        var name;
        var surname;
        var age;
    }
    getName(){
        return this.name;
    }
    setName(valueName){
        this.name=valueName;
    }

    getSurname(){
        return this.surname;
    }
    setSurname(valueSurname){
        this.surname=valueSurname;
    }

    getAge(){
        return this.age;
    }
    setAge(valueAge){
        this.age=valueAge;
    }

    showPersonFields(){
        return this.name+" "+this.surname+" "+this.age;
    }
}

class Worker extends Person{
    constructor()
    {
        super();
        let job;
        let salary;
    }

    getJob(){
        return this.job;
    }
    setJob(valueJob){
        this.job=valueJob;
    }

    getSalary(){
        return this.salary;
    }
    setSalary(valueSalary){
        if(valueSalary<2000)
        {alert("2000-den azdir");}
        else{
            this.salary=valueSalary;
        }
    }

    showWorkerFields(){
        return this.showPersonFields()+" "+this.job+" "+this.salary;
    }
}

let worker1=new Worker();
worker1.setName("Eli");
worker1.setSurname("Memmedov");
worker1.setAge(26);
worker1.setJob("developer");
worker1.setSalary(2500);
console.log(worker1.showWorkerFields());