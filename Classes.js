// 1. initialize with an object 

class Parent{
    constructor(param){
        // assign attributes here
        this.param1 = param.param1;
        this.param2 = param.param2;
        this.param3 = param.param3;
    }
        // methods go here
        methodName(){
        // return something here
        }
    }
    
// child
class Child extends Parent{
    constructor(param){
        super(param1);
    // any special attributes for the child get assigned here
    }
    // any special methods for the child go here
}

// creating your object (invoking the constructor function)
const newObject = new Parent({
param1: 'arg1',
param2: 'arg2',
param3: 'arg3',
});

// 2. initialize with arguments

class Parent{
    constructor(param1, param2, param3){
        // assign attributes here
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }
        // methods go here
        methodName(){
        // return something here
        }
    }
    
    // child
class Child extends Parent{
    constructor(param1, param2, param3){
        super(param1, param2, param3);
    // any special attributes for the child get assigned here
    }
    // any special methods for the child go here
}

// creating your object (invoking the constructor function)
const newObject = new Parent('arg1','arg2','arg3');