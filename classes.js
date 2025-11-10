// this -- refers to the current object being worked on
//class -- a blueprint for objects
//constructor -- function that is called automatically when you create a new object from a class


class Rabbit {
  
  //declare the constructor
  constructor(type){
    this.type = type;
  }
  
  //setting the age of the rabbit
  setAge(age){
    this.age = age;
  }
  
  //method of the object
  speak(line){
    console.log(`The ${this.type} says ${line}.`);
  }
}

let whiteRabbit = new Rabbit("White Rabbit");

whiteRabbit.speak("I am very hungry");

console.log(whiteRabbit.age)
whiteRabbit.setAge(5)
console.log(whiteRabbit.age)