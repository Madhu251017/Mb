function js (){
    var a = 30;
    var a = 20;
    console.log(a);
    let  d = 40;
    d =50;
    console.log(d);
    const b = 60;
    console.log(b);
}
js();
// function statement declaration=parameters & arguments
function jsg (mano){
    console.log(mano)
    
}
jsg("called the name");

//function expression or anonymous
let a = function jsm (madhu)
{console.log(madhu);

}
a("name");
let ab = function  (madhu2)
{
    console.log(madhu2);

}
ab("name2");
//immediate invoke function
(function (role)
{
    console.log(role);

})
("model");

//arrow function
//()=>{}
    let mk = (jj)=>{
        console.log(jj);
    }
    mk("arrow function");
function km (){}