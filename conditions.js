//if else
let age=50;
if(age<=45){
    console.log("young person");
}
else{
    console.log("old person");
}
//else if
let mark=60;
if(mark>=90){
    console.log("A grade");
}
else if(mark>=80){
    console.log("B grade");
}
else if(mark>=70){
    console.log("C grade");
}
else if(mark>=60){
    console.log("D grade");
}
else if(mark>=50){
    console.log("Average");
}
else if(mark>=40){
    console.log("below average");
}
else{
    console.log("fail");
}
// task -- else if(Using NOT operator)
 
let mark1 = 88;

if (mark1 === 100) {
  console.log("A Grade");
} else if (!(mark1 === 100) && mark1 >= 90) {
  console.log("B grade");
} else if (!(mark1 < 50)) {
  console.log("C Grade");
} else if (!(mark1 >= 50)) {
  console.log("You failed.");
} else {
  console.log("Re-attempt");
}
let mark2 = 82;  

if (mark2 === 100) {
  console.log("Grade A");
} else if (!(mark2 !== 90)) {
  console.log("Grade B");
} else if (!(mark2 !== 80)) {
  console.log("Grade C");
} else if (!(mark2 !== 70)) {
  console.log("Grade D");
} else if (!(mark2 !== 60)) {
  console.log("Grade E");
} else if (!(mark2 !== 50)) {
  console.log("Fail");
} else if (!(mark2 >= 1 && mark2 <= 100)) {
  console.log("Invalid mark. Reattempt.");
} else {
  console.log("Reattempt");
}
