import inquirer from "inquirer"

let myPin = 1234;
let balance = 10000

let enterPin = await inquirer.prompt([
    {
    name: "pin",
    type: "number",
    message: "Enter your PIN"
}
]);

if (enterPin.pin === myPin) {
    console.log("You have entered the correct PIN!")

    let atm = await inquirer.prompt([{
        name: "chose",
        type: "list",
        message: "What would you like to do?",
        choices: ["Check Balance", "Withdraw", "Exit"]}]
    )

    switch (atm.chose) {
        case "Check Balance":
            console.log("Your balance is " + balance);
            break;
        case "Withdraw":
            let withdraw = await inquirer.prompt([{
                name: "amount",
                type: "number",
                message: "How much would you like to withdraw?"
            }])
            if (withdraw.amount > balance) {
                console.log("You don't have that much money!")
            } else {
                balance = balance - withdraw.amount
                console.log("You have withdrawn " + withdraw.amount + " from your account!\n Your new balance is " + balance)
            }
            break;
        case "Exit":
            console.log("Thank you for using the ATM!")
            break;
        default:
            console.log("Invalid option")
            break;
    }
} else {
    console.log("Wrong PIN")
}