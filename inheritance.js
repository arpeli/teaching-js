//showing inheritance
/**
 * A school has staff
 * Types of staff: teacher, cook , security, cleaner
 */

class Staff{
    constructor(name, id_number, email, age, salary=0){
        this.name = name;
        this.id_number = id_number;
        this.email = email;
        this.age = age;
        this.salary = salary;
    }

    //setters 
    setName = (name) =>{
        this.name = name;
    }
    setId(id_number){
        this.id_number =id_number;
    }

    setEmail(email){
        this.email = email;
    }

    setAge(age){
        this.age = age;
    }
    setSalary(salary){
        this.salary = salary;
    }

    //getters
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id_number;
    }
    getSalary(){
        return this.salary;
    }

    //methods
    getInfo(){
        return `STAFF DETAILS: \nName: ${this.name} \nAge: ${this.age} \nEmail: ${this.email} \nID Number: ${this.id_number} \nSalary: ${this.salary}`;
    }

    requestLeave(){
        return `${this.name} has requested a leave of absence`;
    }


}


class Lecturer extends Staff {
    constructor(name, id_number, email, age, salary=0, tsc_number, specialty){
        super(name, id_number, email, age,salary);
        this.tsc_number = tsc_number;
        this.specialty = specialty;
    }

    //setters
    setTscNumber(tsc_number){
        this.tsc_number = tsc_number;
    }
    setSpecialty(specialty){
        this.specialty = specialty;
    }

    //getters
    getTscNumber(){
        return this.tsc_number;
    }
    getSpecialty(){
        return this.specialty;
    }

    //methods
    changeGrade(){
        console.log("This object can modify grades!!");
    }

    writeRecommendation(){
        console.log("This object can write recommendations");
    }


}

class Cook extends Staff{
    constructor(name, id_number, email, age , salary=0, certified=true){
        super(name,id_number,email,age, salary);
        this.certified = certified;
    }

    //setter
    setCertified(certified){
        this.certified = certified;
    }

    //getter
    getCertified(){
        return this.certified;
    }

    //methods
    orderFood(){
        console.log("This object can order food");
    }

    sellFood(){
        console.log("This object can sell food");
    }
}

//creating a new object from Lecturer class
let object1 = new Lecturer("Olive N", 8347365, "null@example.com", 45, 786737, 676372637, "Computer Architecture");
console.log(object1);
object1.writeRecommendation();
object1info = object1.getInfo(); //remember the getinfo() method was declared in the Staff class and not Lecturer class
console.log(object1info);


//creating new object from Cook class
let object2 = new Cook("Quentin O", 8246342, "q@mku.ke", 33,56343,);
console.log(object2);
object2.sellFood();
object2info = object2.getInfo(); //getinfo() also works on Cook object since it is from parent class
console.log(object2info);