let f1 = (a)=>{
    return (b)=>{
        return (c)=>{
            console.log(a+b+c);
        }
    }
}

f1(1)(2)(3);
