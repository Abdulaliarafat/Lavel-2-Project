{
    // Asynchronous typescript

    // promise

    type Todo ={ userId: number, id: number, title: string, completed: boolean }

    const getTodo=async() :Promise<Todo>=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json();
        // console.log(data);
        return data
    }
    getTodo()


    // semulate
    type Something ={something:string}
    
    const createPromist =():Promise<Something>=>{
    return new Promise<Something>((resolve,reject)=>{
        const data:Something = {something:'data'}
        if(data){
            resolve(data)
        }else{
            reject("faild to resoved")
        }
    })
    }

    const showData =async():Promise<Something>=>{
        const data:Something =await createPromist()
        // console.log(data);
        return data
    }
   showData()
}