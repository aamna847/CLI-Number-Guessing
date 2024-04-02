#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessednumber",
        type: "number",
        message: "Please guess a number between 1 to 10",
    },
]);
if (answers.UserGuessednumber === randomnumber) {
    console.log("Congratulations!You guessed a Right Number.");
}
else {
    console.log("You guessed a wrong number");
}
