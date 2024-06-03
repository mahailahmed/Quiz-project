import inquirer from "inquirer";
console.log("welcome to my advanture quiz");
console.log("you are required to gain 4 point for the window");
let points = 0;
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is the superset of",
        type: "list",
        choices: ["phyton", "c6", "java", "javascript"]
    },
]);
if (question1.one == "javascript") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who  is the founder of microsoft",
        type: "list",
        choices: ["elon musk", "marks", "ali", "bilgates"]
    },
]);
if (question2.two == "bilgates") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "who is the governer of sindh",
        type: "list",
        choices: ["nawaz sharef", "hamza", "kamran tessori", "khalid makbol"]
    },
]);
if (question3.three == "kamran tessori") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "national language is",
        type: "list",
        choices: ["urdu", "english", "pashto", "panjabi"]
    },
]);
if (question4.four == "urdu") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "what  is the extension of typescript",
        type: "list",
        choices: ["php", "c++", "js", "ts"]
    },
]);
if (question5.five == "ts") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
if (points >= 4) {
    console.log("congratulation!");
    console.log(`your points:${points}`);
}
else {
    console.log("you loss ! try next time");
    console.log(`your points: ${points}`);
}
