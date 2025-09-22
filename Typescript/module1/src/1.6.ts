{
// Learning function
// Normal function
// Arrow function
function add(num1: number, num2: number): number {
    return num1 + num2
}
add(2, 4)

// Arrow function

const arrowFuntion = (num1: number, num2: number): number => num1 + num2

// Object --> function --> mathod

const poorUser = {
    name: 'arafat',
    balance: 0,
    addBlance(balance: number): string {
        return `My new blance is naw ${this.balance + balance}`
    }
}

// Itearation of number array

const array: number[] = [1, 3, 3, 4]
const newArray: number[] = array.map((elem: number): number => elem * elem)

}
