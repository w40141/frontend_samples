import {log} from "console";
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

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let down: Direction = Direction.Down

enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'Left',
    Right = 'RIGHT'
}

const value = 'DOWN'
const enumValue = value as Direction2

class Queue<T> {
    private array: T[] = []
    push(item: T) {
        this.array.push(item)
    }

    pop(): T | undefined {
        return this.array.shift()
    }
}

const queue = new Queue<number>()
queue.push(112)
queue.push(100)
queue.pop()

type Id = number | string

function printId(id: Id) {
    log(id)
}

type Identiry = {
    id: Id;
    name: string;
}

type Contact = {
    name: string;
    email: string;
    phone: string
}

type IdentiryOrContact = Identiry | Contact

let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft'
// postStatus = 'drafts'

function error(message: string): never {
    throw new Error(message)
}

function foo(x: string | number | number[]): boolean {
    if (typeof x === 'string') {
        return true
    } else if (typeof x === 'number') {
        return false
    }
    return error('Never happens')
}

interface User {
    name: string
    social?: {
        facebook: boolean
        twitter: boolean
    }
}

let userInfo: User = {name: 'Takuya', social: {facebook: true, twitter: false}}

userInfo = {name: 'Takuya'}

function processUser(user?: User) {
    let s = user!.name
}

function addOne(value: number | string) {
    if (typeof value === 'string') {
        return Number(value) + 1
    }
    return value + 1
}

type UserJson = {
    info?: {
        name: string;
        age: number;
    }
}

let response = {}
const userJson = (response as any) as UserJson
if (userJson.info) {
    log(userJson.info.name)
}

interface Account {
    name: string;
    age: number;
    email: string;
}

type AccountKey = keyof Account
const key1: AccountKey = 'name'
// const key2: AccountKey = 'phone'
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const TakuyaAccount: Account = {
    name: 'Takuya',
    age: 36,
    email: 'test@example.com'
}

const accountName = getProperty(TakuyaAccount, 'name')
// const accountName2 = getProperty(TakuyaAccount, 'phone')

type SupportVersions = {
    [env: number]: boolean;
}

let versions: SupportVersions = {
    102: false,
    103: false,
    104: true,
}

type NameGender = {
    readonly name: string;
    readonly gender: string
}
let ng: NameGender = {name: 'Takuya', gender: 'Male'}
// ng.gender = 'Female'


