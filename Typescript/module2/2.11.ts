{
    // Utility types
    // Pick
    type Person = {
        name:string;
        age:number;
        email?:string;
        contactNo:number;
    }

    type NameAge = Pick<Person,'age'|'contactNo'|"email">

    // Omit

    type ContactInfo=Omit<Person,'name'|'age'>

    // Requrired

    type PersonRequire = Required<Person>

    // Persial

    type PersialType = Partial<Person>

    // Read only

    type PersonReadOnly = Readonly<Person>

    const person1 : PersonReadOnly = {
        name:'Mr arafat',
        age:28,
        contactNo:1869653364,
    }

    // Record type
    type MyObj= Record <string,string>
    
    const EmptyObj:Record <string,unknown>={}

    const obj1 : MyObj = {
        a:'aa',
        b:'bb',
    }
}