{
    // Mapped type in typescript
    const arrayOfNumber: number[] = [1, 3, 4, 5, 6]
    const arrayOfString: string[] = arrayOfNumber.map(number => number.toString())
    // console.log(arrayOfString);
   
    type AreaNumber={
        hight:number;
        width:number;
        depth:number;
    }

    type Hight = AreaNumber['hight'] // lookup type

    type AreaString<T> = {
        [key in keyof T]:T[key]
    }
    const area1 :AreaString<{hight:string;width:number}>={
        hight:'100',
        width: 200
    }

}