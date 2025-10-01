{
    // Generic type with interface
    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWhatch: T;
        bike ?: X
    }

    interface HP {
         brand: string, model: string, display: string 
        }

    const poorDeveloper: Developer<HP> = {
        name: "Arafat",
        computer: {
            brand: 'HP',
            model: '22jhg',
            releaseYear: 2022
        },
        smartWhatch: {
            brand: 'Xiome',
            model: '555hg',
            display: 'LED'
        }
    }
    
    interface Apple  {
            brand: string,
            model: string,
            display: string,
            heartTrack: boolean,
            sleepTrack: boolean
        }

    interface Yamaha {
        model: string;
        engineCapacity: string;
    } 
       
    const richDeveloper: Developer<Apple,Yamaha> = {
        name: "Fahad",
        computer: {
            brand: 'Apple',
            model: '22ghif',
            releaseYear: 2025
        },
        smartWhatch: {
            brand: 'Apple',
            model: '5hg',
            display: 'Super amolaid',
            heartTrack: true,
            sleepTrack: true
        },
        bike:{
            model:'yamaha',
            engineCapacity:'100cc'
        }
    }
}