{
    // Task 1: Basic Data Types and First Program

    const wellcome =(message:string):void=>{
         console.log(message)
    }
    wellcome('Hello World, I will complete this course successfully and become a Next level Web Developer!')

    // Task 2: Functions, Optional, and Literal Types
   
    const user1=(name:string,age:number,role?:'admin'|'user'|'guest')=>{
        
        if(role){
            console.log(`Name : ${name} Age : ${age} Role : ${role}`);
        }
        else {
            console.log(`Name : ${name} Age : ${age} Role : Not provide`);
        }
    }

    user1('arafat',28,'admin')
    user1('arman',25)

}