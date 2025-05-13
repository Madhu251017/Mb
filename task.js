//let mark=82;
//iflet mark = 82; // Change this value to test


let mark=82;
if (mark === 100) {
  console.log("Grade A");
} else if (!(mark < 90 || mark > 99)) { 
  console.log("Grade B");
} else if (!(mark < 80 || mark > 89)) { 
  console.log("Grade C");
} else if (!(mark < 70 || mark > 79)) {
  console.log("Grade D");
} else if (!(mark < 60 || mark > 69)) {
  console.log("Grade E");
} else if (!(mark < 50 || mark > 59)) {
  console.log("Fail");
} else if (!(mark >= 1 && mark <= 49)) {
  console.log("Invalid mark. Reattempt.");
} else {
  console.log("Reattempt");
}
