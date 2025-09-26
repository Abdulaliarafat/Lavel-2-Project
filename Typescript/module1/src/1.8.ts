// Object distracturing
const user={
    name:{
        firstName:'Abdul',
        middleName:'Ali',
        lastName:'Arafat'
    },
    contactNo:'01869653364',
    address:'Sylhet'
}

const {name:{lastName:callName},contactNo}=user

// Array distracturing
const myFriends:string[]=['Reyad','Rocky','Onik','Akib']

const [a,bestFriend,...all]=myFriends
