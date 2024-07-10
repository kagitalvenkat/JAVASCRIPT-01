let arr = [10,20,30,40,50,60,70,80,90,100];

//access array elements by using indexes
console.log(arr[1]);    //op: 20
console.log(arr[-1]); //op :: undefined

//length
console.log(arr.length); //op:7

delete arr[2];  
console.log(arr);        //[ 10, 20, <1 empty item>, 40, 50, 60, 70 ]
console.log(arr.length); //7

//map function

let arr1 = arr.map((e,i)=> e*10);
console.log(arr1);      //[100, 200, 300, 400, 500, 600, 700, 800, 900,1000]

//filter function
let arr2 = arr.filter((e,i)=> e>50);
console.log(arr2)        // [ 60, 70, 80, 90, 100 ]
//reduce function
let arr3 = arr.reduce((e1,e2)=> e1+e2);console.log(arr3);           //550
let arrn = arr.map((e,i)=>e/2).filter(e=>e>=45).reduce((fe,nel)=> fe+nel);console.log(arrn); // 95