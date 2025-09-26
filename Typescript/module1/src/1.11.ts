{
    // Optional chaining || Ternary operator || Nullish coalhing

    const age:number = 19
    if(age >= 18){
        console.log('Adult')
    }else{
        console.log('Not adult');
      }
   // Ternary operator
    const isAdult = age >= 18 ? "Adult" : "Not adult"
    console.log(isAdult);

    // Nulling coalashing

    const isAuthenticated = undefined
     
    const result1 = isAuthenticated ?? "Guest"
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'


    console.log({result1},{result2});
    
    // Optional chaining 
    type User = {
        name : string;
        address:{
            city:string;
            road:string;
            presentAddress:string;
            permanentAddress?:string;
        }
    }

    const user:User = {
        name:'Arafat',
        address:{
            city:'Feni',
            road:'Syedpur house , sahi eidgah',
            presentAddress:'Sylhet',
        }
    }

    const permanent = user?.address?. permanentAddress ?? 'Not found addres'
    
    console.log(permanent);

}