let pu = [10,20.30];
pu.push(40);
console.log(pu);
let po = [10,20.30];
po.pop();
console.log(po); 
let sh = [10,20.30];
sh.shift();
console.log(sh); 
let un = [10,20.30];
un.unshift();
console.log(un); 
let days = ["sun","mon","tue","wed","thurs","fri","sat"]
days.splice(3,0,"wed");
console.log(days);
let ab = ["sun","mon","tue","wed","thurs","fri","sat"]
//days.splice(3,0,"wed");
console.log(ab.sort());
let rev = "trendnologies";
console.log(rev.split("").reverse().join(""));