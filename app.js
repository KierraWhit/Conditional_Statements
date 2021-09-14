var ele = document.body.querySelector(".box");
var question_one = Number(prompt("What is your first number?"));
var question_two = Number(prompt("What is your second number?"));
//This is the conditional of my program
if (question_one > 0 || question_one < 0 || question_one === 0 || question_two === 0 || question_two < 0 || question_two > 0) {
    ele.innerHTML = "The numbers are good";
} else {
    ele.innerHTML = "Something is wrong, try again."
    system.exit()
};
//This is the math part of the program
var question_three = prompt("What do you want to do with your numbers?");
if (question_three =="add" || question_three=="Add"|| question_three=="ADD"|| question_three=="addition"|| question_three=="Addition"|| question_three=="ADDITION"){
    ele.innerHTML= question_one +question_two
}
else if (question_three =="subtract" || question_three=="Subtract"|| question_three=="SUBTRACT"|| question_three=="subtraction"|| question_three=="Subtraction"|| question_three=="SUBTRACTION"){
    ele.innerHTML= question_one - question_two
}
else if (question_three =="divide" || question_three=="Divide"|| question_three=="DIVIDE"|| question_three=="division"|| question_three=="Division"|| question_three=="DIVISION"){
    ele.innerHTML= question_one /question_two
}
else if (question_three =="multiple" || question_three=="Multiple"|| question_three=="MULTIPLE"|| question_three=="multiplication"|| question_three=="Multiplication"|| question_three=="MULTIPLICATION"){
    ele.innerHTML= question_one *question_two
}
else{
    ele.innerHTML = "Something is wrong, try again"
    system.exit()
};