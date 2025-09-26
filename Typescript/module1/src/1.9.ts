{
    // Name type alies
    type Students = {
        name: string;
        gender: string
        age: number;
        contactNo?: string;
        address: string;
    }

    const student1: Students = {
        name: 'Arafat',
        gender: 'male',
        age: 28,
        contactNo: '01869653364',
        address: 'Feni'
    }

    // String type alise

    type UserName = string
    type IsAdmin = boolean

    const name : UserName = 'Arafat'
    const isAdmin : IsAdmin = true

    // Function type alise

    type Add = (num1:number,num2:number)=>number;

    const add : Add =(num1,num2)=>num1+num2
    add(1 , 2)
}