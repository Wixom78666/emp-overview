const inquirer = require("inquirer");
const fs =require("fs");
const Manager = require("./emp-util/manager");
const Engineer = require("./emp-util/engineer");
const Intern = require("./emp-util/intern");

const createManager = () => {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter Manager Name",
    },
    {
        type: "input",
        name: "id",
        message: "Enter Manager ID Number",
    },
    {
        type: "input",
        name: "email",
        message: "Enter Manager Email",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter Manager Office Number",
    }
])
.then(managerInput => {
    const {
        name, id, email, officeNumber
    } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);
})
}