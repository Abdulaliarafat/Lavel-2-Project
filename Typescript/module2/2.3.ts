{
    // Genetic type

    type GeneticArray<T> = Array<T>

    const rollNo: GeneticArray<number> = [1, 3, 5]
    const teacher: GeneticArray<string> = ['Arafat', "Rimon"]
    const boolean: GeneticArray<boolean> = [true, false]

    // Generic Object
    type User1 = {
        name: string;
        age: number
    }
    interface User2 {
        name: string;
        age: number
    }
    const user: GeneticArray<User2> = [
        {
            name: 'Arafat',
            age: 28
        },
        {
            name: 'Rifat',
            age: 17
        }
    ]

    // Generic tuple

    type GenericTuple<a, b> = [a, b]

    const man: GenericTuple <number, { name: string, email: string }> =
        [2, { name: 'man', email: 'abdulaliarafat@gmail.com' }]
}