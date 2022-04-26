//Very Easy Write a function named min that takes two arguments and returns their minimum.
function min(number1, number2){
    if (number1 > number2)
        return number1;
    else
        return number2;
}   


//Easy Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."
let firstName = ["Jodi", "Justin", "Jordon"];
let lastName = ["pierre", "mcneil", "doug"];
let age = ["12", "13", "14"]

console.log(`Hello my name is ${firstName[0]} ${lastName[0]} and I am ${age[0]} years old`);

//Medium Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

function month (){
    var userInput = prompt("Please enter a number 1-12 for a birth month.");
    var months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

    if (userInput == `1`){
        console.log(months[0]);
    }else if (userInput == `2`){
        console.log(months[1]);
    }else if (userInput == `3`){
        console.log(months[2]);
    }else if (userInput == `4`){
        console.log(months[3]);
    }else if (userInput == `5`){
        console.log(months[4]);
    }else if (userInput == `6`){
        console.log(months[5]);
    }else if (userInput == `7`){
        console.log(months[6]);
    }else if (userInput == `8`){
        console.log(months[7]);
    }else if (userInput == `9`){
        console.log(months[8]);
    }else if (userInput == `10`){
        console.log(months[9]);
    }else if (userInput == `11`){
        console.log(months[10]);
    }else if (userInput == `12`){
        console.log(months[11]);
    }else (userInput >= `13`){
        alert("Please enter a valid number 1-12!");
    }

}


//Hard Tom & Jerry BMI
const Tom = BMI(8,9);
const Jerry = BMI(45,10);

function BMI (mass, height) {
    return (mass) / (Math.pow(height, 2));
}

console.log(`Is Toms BMI higher than Jerrys? ${Boolean(Tom.BMI > Jerry.BMI)}`);
