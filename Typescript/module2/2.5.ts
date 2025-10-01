{
    // Function with generic
    const createsArray = (params: string): string[] => {
        return [params]
    }
    const createsArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }
    const rest = createsArray('Arafat')
    const restGeneric = createsArrayWithGeneric<boolean>(true)

   interface User {id: number, name: string}

    const restGenericWithObject = createsArrayWithGeneric <User> ({id: 555, name: 'arafat'})

    // Tuple with generic

    const createsArrayWithTuple = <T,Q>(params1: T,params2: Q): [T,Q] => {
        return [params1,params2]
    }
    const restTuple = createsArrayWithTuple<boolean,string>(true,'arafat')

   interface User2 {id: number, name: string}

    const restTupleWithObject = createsArrayWithTuple <string,User2> ('arafat',{id: 555, name: 'arafat'})

    // function with generic fix and dynamic
    const addStudentsToCourse =<T>(students:T)=>{
        const course = 'Next level web development'
        return {
            ...students,
            course }
    }

    const student1 = addStudentsToCourse({name:'Mr.X',email:'x@gmail.com',bike:'palser'})
    const student2 = addStudentsToCourse({name:'Mr.Y',email:'y@gmail.com',watch:'apple'})
    // 
}