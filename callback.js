let add = (num,callback)=>{
    return callback(num+2,false);
};

let sub =(num,callback)=>{
    return callback(num-2, false);
};





add(5,(addRes,err)=>{
    if (!err) {
        console.log(addRes+" ::Add Res");
        sub(addRes,(subRes,err)=>{
            if(!err){
                console.log(subRes);
            }
        })
    }
});