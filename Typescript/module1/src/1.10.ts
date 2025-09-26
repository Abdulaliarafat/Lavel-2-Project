{
    // Union type

    // type FrontendDeveloper = 'fakibajDeveloper' | 'jouniorDeveloper'
    // type FullstackDeveloper = 'frontendDeveloper' | 'fullstackDeveloper'

    // type Developer = FrontendDeveloper | FullstackDeveloper

    // const newDeveloper: FrontendDeveloper = "fakibajDeveloper"

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'O+' | 'B+' | 'AB+'
    }
    const user1: User = {
        name: 'Arafat',
        email: "abdulaliarafat@gmail.com",
        gender: 'male',
        bloodGroup: 'B+'
    }

    // Intersection type

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'frontend developer'
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: 'Backtend developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper: FullstackDeveloper = {
        skills:['HTML','CSS'],
        designation1: 'frontend developer',
        designation2: 'Backtend developer'
    }

}