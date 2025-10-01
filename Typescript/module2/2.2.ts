{
    // type alies Vs inerface
    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }

    // type alies carries premative data
    type String = string

    //   interface carries object
    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User2 {
        role: string
    }

    const user1: UserWithRole2 = {
        name: 'Arafat',
        age: 28,
        role: "Students"
    }
    // Js objects -- > objects , array ---> objects , function --> objects

    type Roll1 = number[]

    interface Roll2 {
        [index: number]: number
    }

    const roll1: Roll2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // function interface

    type Add1 = (num: number , num2 : number)=> number
    interface Add2 {
        (num1:number,num2:number):number
    }
    
    const add : Add2 = (num1: number, num2 : number)=>num1+num2
}