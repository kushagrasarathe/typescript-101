//  basic types
let id: number = 5;
let name: string = "Kushagra Sarathe";
let isPublished: boolean = false;
let x: any = "Hello";
let age: number;

let ids: number[] = [1, 2, 1, 5, 9, 47, 9, 8];
let arr: any[] = [1, "Name", 9, false, 9, 8];

// tuple
let person: [number, string, boolean] = [1, "Kushagra", true];

// tuple array
let employee: [number, string][];

employee = [
  [1, "kushagra"],
  [2, "Sourabh"],
  [3, "Rahul"],
];

// union: use to assign a particular variable more than one type
let pid: string | number;

pid = "22";

// enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// console.log(Direction2.Left);

// objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Kushagra",
};

// const user:  {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'Kushagra'
// }

// type assertion
let cid: any = 1;
// let custId = <number> cid
let custId = cid as number;

// functions

function addNum(x: number, y: number): number {
  return x + y;
}

// console.log(addNum(1, 5))

function log(message: string | number): void {
  console.log(message);
}

// log('Hello')

// interfaces = custom type

interface UserInterface {
  readonly id: number; // readonly mean it cannot be changed
  name: string;
  age?: number; // adding ? mean its optional
}

const user1: UserInterface = {
  id: 1,
  name: "Kushagra",
};

// type can be used with primitives and with unions
type Point = number | string;
const p1: Point = 1;
//  interface wont work for above example

// console.log(user1)

// using interfaces with function
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// classes: classes are used to create objects
class Person {
  //   private id: number; // private mean we can only access within the class
  //   protected id: number; // protected mean we can only access within the class or any class extended from Person class
  public id: number; // public - by default its public means we can access it anywhere
  name: string;

  // constructor runs everytime a class is used
  constructor(id: number, name: string) {
    // console.log(123);
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const kush = new Person(1, "Kushagra");
const john = new Person(1, "John");
// console.log(kush, john);
// console.log(kush.register());

// console.log(john.id)

// john.id = 5

// interface in class
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person1 implements PersonInterface {
  //   private id: number; // private mean we can only access within the class
  //   protected id: number; // protected mean we can only access within the class or any class extended from Person class
  public id: number; // public - by default its public means we can access it anywhere
  name: string;

  // constructor runs everytime a class is used
  constructor(id: number, name: string) {
    // console.log(123);
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

// subclasse = extending a class
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Sourabh", "Manager")
// console.log(emp.position)
// console.log(emp.register())

// generics = used to build resuable components
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArr = getArray<number>( [1,2,5,3,4] )
let strArr = getArray<string>( ['Kushagra', 'Sourabh', 'Brad', 'John'] )

numArr.push(6)
console.log( numArr)
// strArr.push(6)
// console.log( strArr)

export {};
