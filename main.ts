#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance = 10000; //Dollar
let pincode = 1234;

// Asking pincode
let pinanswer = await inquirer.prompt({
  name: "pin",
  message: "enter your pin",
  type: "number",
});
// if pin is correct then give options for withdraw or balance check
if (pinanswer.pin === pincode) {
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "Please select option",
      type: "list",
      choices: ["Withdraw", "check balance", "Fast Cash"],
    },
  ]);
  //   if user select withdraw ask for amount to withdraw
  if (operationAns.operation === "Withdraw") {
    console.log(`Your current balance is: ${mybalance}`);
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
      //   if user enter amount which is less then his current balance
    ]);
    if (amountAns.amount <= mybalance) {
      mybalance -= amountAns.amount;
      console.log(`Your withdraw amount is: ${amountAns.amount}`);
      console.log(`Your remaining balance is: ${mybalance}`);
    }
    //  if enter amount is greater then current balance
    else if (amountAns.amount > mybalance) {
      console.log("You have insufficient balance for this withdraw");
    }
  }
  //  if user select balance check
  else if (operationAns.operation === "Fast Cash") {
    let fastCash = await inquirer.prompt([
      {
        name: "amount1",
        message: "PLz select one of the amount",
        type: "list",
        choices: [2000, 5000, 10000, 15000],
      },
    ]);
    // if user select fast cash
    if (fastCash.amount1 <= mybalance) {
      mybalance -= fastCash.amount1;
      console.log(`Your withdraw amount is: ${fastCash.amount1}`);
      console.log(`Your remaining balance is: ${mybalance}`);
    } else if (fastCash.amount1 > mybalance) {
      console.log("You have insufficient balance for this withdrew");
    }
  } else if (operationAns.operation === "check balance") {
    console.log(`Your current balance is: ${mybalance}`);
  }
  //   if user give wrong pin
} else console.log(`Incorrect pin number`);
