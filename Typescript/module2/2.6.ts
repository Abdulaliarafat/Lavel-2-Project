{
    // Constrains in typescript
    const addStudentsToCourse = <T extends {id:number;name: string;email: string;}>(students: T) => {
        const course = 'Next level web development'
        return {
            ...students,
            course
        }
    }
    // const students3 = addStudentsToCourse({emni:'emni'})
    
    const student1 = addStudentsToCourse<{
        id: number;
        name: string;
        email: string;
        bike: string;
    }>(
        {
            id: 333,
            name: 'Mr.X',
            email: 'x@gmail.com',
            bike: 'palser'
        })
    const student2 = addStudentsToCourse<{
        id: number;
        name: string;
        email: string;
        watch: string;
    }>(
        {
            id: 444,
            name: 'Mr.Y',
            email: 'y@gmail.com',
            watch: 'apple'
        })
}