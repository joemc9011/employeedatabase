const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
    host: "Employee",
    port: 8000,
    user: "employer",
    password: "McAndrew90)",
    database: ""
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("youre connected" + connection.threadId);
    afterConnection();
});
// starting point to determine what area we're working in
function afterConnection() {
    inquirer.prompt({
        name: "edits",
        type: "list",
        message: "Hello. Please select one area:",
        choices: ["Departments", "Employees", "Roles"]
    })
        .then(function (answers) {
            if (answer.edits === "Departments") {
                departmentChoice();
            }
            if (answer.edits === "Employees") {
                employeeChoice();
            }
            if (answer.edits === "Roles") {
                roleChoice();
            }
            else {
                connection.end();
            }
        });
}

// add view update selection
// sidenote: im absolutely sure this could be drier, and I did attempt to add this
// within the first function, but I know 100% (with a grain of salt) I can understand it if i do, what im estimating to be, 9 functions lol 
function departmentChoice() {
    inquirer.prompt({
        name: "edits",
        type: "list",
        message: "What would you like to do within this area?",
        choices: ["Add", "View", "Update"]
    })
        .then(function (answer) {
            if (answer.edits === "Add") {
                dAdd();
            }
            if (answer.edits === "View") {
                dView();
            }
            if (answer.edits === "Update") {
                dUpdate();
            }
            else {
                connection.end();
            }
        });

}

function employeeChoice() {
    inquirer.prompt({
        name: "edits",
        type: "list",
        message: "What would you like to do within this area?",
        choices: ["Add", "View", "Update"]
    })
        .then(function (answer) {
            if (answer.edits === "Add") {
                eAdd();
            }
            if (answer.edits === "View") {
                eView();
            }
            if (answer.edits === "Update") {
                eUpload();
            }
            else {
                connection.end();
            }
        });
}

function roleChoice() {
    inquirer.prompt({
        name: "edits",
        type: "list",
        message: "What would you like to do within this area?",
        choices: ["Add", "View", "Update"]
    })
        .then(function (answer) {
            if (answer.edits === "Add") {
                rAdd();
            }
            if (answer.edits === "View") {
                rView();
            }
            if (answer.edits === "Update") {
                rUpload();
            }
            else {
                connection.end();
            }
        });
}

function dAdd () {
    inquirer
    .prompt
    ({
            name: "addDept",
            type: "input",
            message: "What would you like to name this new department?"
        })
        .then(function(answer){
            connection.query(
                "INSERT INTO dept SET ?",
                {
                    dept_name: answer.addDept
                },
                function(err){
                    if (err) throw err;
                    console.log("Your department has been added");
                    // return to a function??
                }
            );
        });
}



