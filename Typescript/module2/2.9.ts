{
    // Conditional type
    type a1 = number
    type b1 = string
    
    type x = a1 extends null ? true : false;
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any

    // Use keyof operator  in conditional type
    type Sheikh ={
        bike:string;
        car:string;
        ship:string;
        plane:string;
    }

    type ChackVahical<T> = T extends keyof Sheikh ? true : false
    
    type HasPlane = ChackVahical <"plane">
}