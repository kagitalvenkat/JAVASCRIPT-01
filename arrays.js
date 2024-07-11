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


//push - add the elements at the end of the array
//unshift -  add the elements at the begining of the array
//pop - remove the elements at the end of the array
//shift - remove the elements at the begining of the arrays

let ele= [1,2,3,4,5,6,7,8,9,10];
ele.push(11);console.log(ele);  //[1,2,3,4,5,6,7,8,9,10,11]
ele.pop();console.log(ele);  //[1,2,3,4,5,6,7,8,9,10]
ele.shift(); console.log(ele); //[2,3,4,5,6,7,8,9,10]
ele.unshift(1); console.log(ele); //[1,2,3,4,5,6,7,8,9,10]

//splice - add or remove any element from array
let sele= [1,2,3,4,5,6,7,8,9,10];
sele.splice(2,2); console.log(sele);//[1,2,5,6,7,8,9,10]

sele.splice(2,0,30,40); console.log(sele);//[1,2,30,40,5,6,7,8,9,10]

sele.splice(4); console.log(sele);   //[ 1, 2, 30, 40 ]

//find the index of perticular element -findIndex
let fie= [1,2,3,4,5,6,7,8,9,10];
const findex = fie.findIndex((e,i)=>{return e ==5});console.log(findex);    //4

//splice+ findIndex
fie.splice(fie.findIndex(e=> e==5),1);console.log(fie); //[1,2,3,4,6,7,8,9,10]


//slice -- slice(includeEle,excludeEle)
let se= [1,2,3,4,5,6,7,8,9,10];
let seles=se.slice(4,7); console.log(seles); //[5,6,7]

//slice(ele) -means exclude upto 3rd index
console.log(se.slice(4));


//concatination of arrays
//using spred operator

let c1=[1,2,3,4,5];
let c2 = [6,7];
let c3 =[...c1,...c2]; console.log(c3); //[1,2,3,4,5,6,7]

//find 

let f =[10,20,30,40,50];
var e = f.find((e,i)=> e ==40); console.log(e);

//find 30 => remove it
let findEle = f.find(e=> e == 30);
if(findEle){
    const fi = f.findIndex(e => e ==30);
    f.splice(fi,1);
}

console.log(f); // [ 10, 20, 40, 50 ]

//include function- search the perticular element -boolean function
console.log([1,2,3,4,5].includes(e => e ==7)); //false

//copyWithIn funcion -shift indexes

let cEle = [1,2,3,4,5,6,7,8,9,10];
cEle.copyWithin(3); console.log(cEle); //[1,2,3,1,2,3,4,5,6,7]

let cEle1 = [1,2,3,4,5,6,7,8,9,10];
cEle1.copyWithin(2,6); console.log(cEle1); // 1 2 7 8 9 10 7 8 9 10


//indexOf function -won't create indexes repeated elements
let iArr = [1,2,3,1,3,4,5];
iArr.forEach((e,i)=>{
    console.log(iArr.indexOf(e),i);
})

let indxArr =iArr.filter((ele,indx)=>{
    return iArr.indexOf(ele) == indx
}); console.log(indxArr);

//sort  - sort the elements either asc or dec order

let sArr=[2,1,5,6,3,4];
console.log(sArr+"  :sArr");
let asc=sArr.sort((e1,e2)=> e1-e2);console.log(asc);
let dsc=sArr.sort((e1,e2)=> e2-e1);console.log(dsc);

//2nd Max Ele
console.log([2,1,5,6,3,4].sort((e1,e2)=>e2-e1)[1]);


//for ...in loop  - used to iterate json objs
let obj ={"pid":1001, "pname": "hp","pprice":89000.75};

for(let key in obj) {
    console.log(key,typeof key,obj[key]);
   // log
}


//some  - atleast one ele satisfies the condition it returns true

console.log([1,2,3,4,5].some(e => e>=5)); //true
console.log([1,2,3,4,5].some(e => e ==6)); //false

//every - all ele statisfies the condition it returs ture otherwise false
console.log([1,2,3,4,5].some(e => e>5)); //false


//flat - create the single dimensional array
console.log([1,[2],[3,4,5],6].flat(1));  //[ 1, 2, 3, 4, 5, 6 ]



//flatMap 

//[ [ 1, 'One' ], [ 2, 'Two' ], [ 3, 'Three' ] ]
let a1 = [1,2,3];
let a2 = ["One","Two","Three"];
let a3 = a1.flatMap((e,i) => {
    return [e, a2[i]];
});
console.log(a3); [ 1, 'One', 2, 'Two', 3, 'Three' ]
//console.log(a3.flat(Infinity)); [ 1, 'One', 2, 'Two', 3, 'Three' ]


console.log([1,2,3,4].reverse()) ;   //[ 4, 3, 2, 1 ]


//HELLO   -  OLLEH
console.log(Array.from("HELLO").reverse().join().replace(/,/g,""));