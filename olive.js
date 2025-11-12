//showing classes
class student{
    constructor(name,id,age,grade,feebalance=0){
        this.name=name;
        this.id=id;
        this.age=age;
        this.grade=grade;
        this.feebalance = feebalance;
    }
    getname(){
     return this.name;
    }
    getid(){
        return this.id;
    }
    getgrade(){
        return this.grade;
    }

    getBalance(){
        return this.feebalance;
    }

    setage(newage){
        this.age=newage;
    }
    setid(newid){
        this.id=newid;
    }
    setfeebalance(balance){
        this.feebalance = balance;
    }
   
}

let student1=new student("June",5670,23,'B', 89765);
console.log(student1);
//student1.setfeebalance(85674);
console.log(student1.getname(), student1.getgrade());
//console.log(student1.getgrade());
console.log(`Student Details \nName: ${student1.getname()} \nGrade: ${student1.getgrade()} \nFee Balance: ${student1.getBalance()}`);


let student2=new student("Mary",4500,18,'C')
console.log(student2);