
function addTryCatch (this: any) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target[propertyKey])
    const fn = target[propertyKey]
    descriptor.value = function () {
      try {
        fn.apply(this)
        throw 'this is error msg'
      } catch (error) {
        console.log('catch', error)
      }
    }
  }
}

class Person {
  name: string = ''
  constructor (name: string) {
    this.name = name
  }
  @addTryCatch()
  printName () {
    console.log('printName()', this.name)
  }

  sayHello () {
    console.log(this.name + 'hello')
  }
}

const p1 = new Person('小明')
p1.printName()
p1.sayHello()


