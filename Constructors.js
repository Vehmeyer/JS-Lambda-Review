// 1. initializing with an object

function Parent(param){
    
    // assign attributes here
    this.param1 = param.param1;
    this.param2 = param.param2;
    this.param3 = param.param3;
    }

Parent.prototype.methodName = function(){
// return something here
}
function Child(param){
    Parent.call(this, param)// binding this to parent attributes
    // any special attributes of child go here
}
Child.prototype = Object.create(Parent.prototype);

//creating your object (invoking the constructor function), uses "new" keyword
const objectName = new Parent({
    param1: 'arg1',
    param2: 'arg2',
    param3: 'arg3'
});

// 2. initializing with arguments

function Parent(param1, param2, param3){
    // assign attributes here
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }

Parent.prototype.methodName = function(){
// return something here
}
function Child(param1, param2, param3){
    Parent.call(this, param1, param2, param3)// binding this to parent attributes
// any special attributes of child go here
}

Child.prototype = Object.create(Parent.prototype);

//creating your object (invoking the constructor function)
const objectName = new Parent('arg1', 'arg2', 'arg3');