{
    // Type assertion

    let anything: any
    anything = 'Next level web development';
    anything = 234;
    // (anything as number)

    const kgToGram = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value ${convertedValue}`
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    }
    const result2 = kgToGram('1000') as string
    const result1 = kgToGram(1000) as number
  
   type costomError = {
    message : string
   }
    
    try{

    }
    catch(error){
    console.log((error as costomError).message);
    }
    // 
}