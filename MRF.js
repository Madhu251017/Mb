//MAP      
const a = [10,20,30,40,50,60,70]
const b = a.map((val,ind,acc)=> val / 5)
console.log(b);  

let a1 = [1,2,3,45,5];

let c = a1.map(num => num * 6);

console.log(c);

let m = [10,20,30,30,40,50,60,70];
let n =m.filter(hmm => hmm > 30);
console.log(n);


let yoy = [50,60,80,100];
let yee = yoy.reduce((a3,b3) =>(a3+b3));
console.log(yee);
