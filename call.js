/** //call function
 let obj ={
    num1:10,
    num2:20
}

function fOne(num){
    console.log(this.num1+this.num2+num);
}

fOne.call(obj,20);
 */

let obj ={
    n1:10,
    n2:20
}

function applyfun(n3,n4,n5,n6){
    console.log(
        this.n1+this.n2+n3+n4+n5+n6
    );
}

let arr = [1,2,3,4];
applyfun.apply(obj,arr);


let obj1 = {
    a:10
}

function funBind(a1,a2,a3){
    console.log(this.a+a1+a2+a3);
}

let new_memory_bind = funBind.bind(obj1);
new_memory_bind(15,25,20);

