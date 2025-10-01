{
    // Constration with type of and generic
    type Vahical = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = 'bike' | 'car' | 'ship' //menually
    type Owner2 = keyof Vahical

    const getPropertyValue = <x, y extends keyof x>(obj: x, key: y) => {
        return obj[key]
    }

    const student1 = {
        name: 'arafat',
        age: 28,
        address: 'sylhet'
    }

    const car = {
        modle: 'Toyota',
        year: 2007
    }
    const result = getPropertyValue(car, 'modle')

}