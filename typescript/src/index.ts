import {type} from "os";

function sayHello(firstName: string) {
    console.log('Hello ' + firstName);
}

let firstName: string = 'Takuya'
sayHello(firstName)

function calc(isSum: boolean): number {
    let a = 100
    if (isSum) {
        let b = a + 1
        return b
    }
    return a
}

const user: {name: string; age: number} = {
    name: 'Takuya',
    age: 36
}
console.log(user.name);
console.log(user.age);

const printName = (obj: {firstName: string; lastName?: string}) => {

};

printName({firstName: "Takuya", lastName: 'Tejima'})
printName({firstName: "Takuya"})

function sayHello2(name: string): string {
    return `Hello ${name}`
}

function sayHello3(name: string, greeting?: string): string {
    return `${greeting} ${name}`
}

const sayHello4 = (name: string): string => `Hello ${name}`

const genBirdsInfo = (name: string): string[] => name.split(',')
const singBirds = (birdInfo: (x: string) => string[]): string => birdInfo('hato, kiji')[0] + 'piyp piyo'

type Name = string
type Point = {
    x: number;
    y: number;
}

function distance(point: Point) {
    const x = point.x
    const y = point.y
    return x * x + y * y
}

type Label = {
    [key: string]: string
}

interface PPoint {
    x: number
    y: number
    printt: () => string
}

class MyPoint implements PPoint {
    x: number;
    y: number;
    constructor(_x: number = 0, _y: number = 0) {
        this.x = _x
        this.y = _y
    }
    printt(): string {
        return `${this.x}, ${this.y}`
    }
}
