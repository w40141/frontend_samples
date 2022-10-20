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
