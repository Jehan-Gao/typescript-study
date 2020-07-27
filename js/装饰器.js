"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addTryCatch() {
    return function (target, propertyKey, descriptor) {
        console.log(target[propertyKey]);
        var fn = target[propertyKey];
        descriptor.value = function () {
            try {
                fn.apply(this);
                throw 'this is error msg';
            }
            catch (error) {
                console.log('catch', error);
            }
        };
    };
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = '';
        this.name = name;
    }
    Person.prototype.printName = function () {
        console.log('printName()', this.name);
    };
    Person.prototype.sayHello = function () {
        console.log(this.name + 'hello');
    };
    __decorate([
        addTryCatch()
    ], Person.prototype, "printName", null);
    return Person;
}());
var p1 = new Person('小明');
p1.printName();
p1.sayHello();
