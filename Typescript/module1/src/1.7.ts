{
    //spared oparator 

    const Bros1: string[] = ['Rahat', 'Rifat', 'Rony']
    const Bros2: string[] = ['Nisan', 'Shipon', 'Hiron']
    Bros1.push(...Bros2)

    const mentors1  ={
     typescript:'Mizba',
     redux: 'Tonmoy',
     dbms:'Rofiq'
    }

    const mentors2 = {
        nextJs:'Firoz',
        prosma:'Tonmoy',
        cloude:'nahid'
        }
    const mentorlist = {...mentors1,...mentors2}    

    // Rest operator

    const greetFriends =(...friends:string[])=>{
     
        friends.forEach((friend:string)=>console.log(`Hi ${friend}`));
    }

    greetFriends('Arafat','Rahat','Dalim')
}