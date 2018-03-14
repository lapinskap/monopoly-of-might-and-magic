class Person {
    constructor(name = 'Anonymous', age = 0) {
        //default value of name is Anonymous
        this.name = name;
        this.age = age; 
        
    }
    getGretting(){
        //return 'Hi, I am ' + this.name + '!';
        //I have also access here to this.name(current instance)
        return `Hi. I am ${this.name}!`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old...`;
    }
}   

class Student extends Person {
    constructor(name, age, major){
        //we dont need to configure properties for name and age again!
        //The 'super' keyword is used to access and call functions on an object's parent.
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
        //!! = shows is property true or false, ! changes current property
    }
    //let's overwrite parent-function
    getDescription(){
        let description = super.getDescription();

        
        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
constructor(name, age, homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
}
    getGretting(){
        let greeting = super.getGretting();

        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }

    return greeting;
    }

}

const me = new Traveler('Paulina Lapinska',18, 'Computer Science', 'Gorzow Wielkopolski');
//new instance/me is new person
console.log(me.getGretting());


const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGretting());

        //this.name = name || 'test';
        //use name if it exist, if not, do something else
        //name is definied as 'this' (wartosc ponad klasą?) - value I have access to
//The 'extends' keyword is used in class declarations or class expressions 
//to create a class which is a child of another class.
//console.log(me.getDescription());
//indyvidual method, but in this case value is static, so they don't provide indivudual result, just 'Hi!'