const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "McAndrew90)",
    database: "trackerdb"
});

connection.connect(function (err) {
    if (err) throw err;
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
        .then(function (response) {
            if (response.edits === "Departments") {
                departmentChoice();
            }
            if (response.edits === "Employees") {
                employeeChoice();
            }
            if (response.edits === "Roles") {
                roleChoice();
            }
    
        
        });
}

// add view update selection
// sidenote: im absolutely sure this could be drier, and I did attempt to add this
// within the first function, but I know 100% (with a grain of salt) I can understand it if i do, what im estimating to be, 9 functions lol 
function departmentChoice() {
    inquirer.prompt({
        name: "addview",
        type: "list",
        message: "What would you like to do within this area?",
        choices: ["Add", "View"]
    })
        .then(function (response) {
            if (response.addview === "Add") {
                dAdd();
            }
            if (response.addview === "View") {
                dView();
            }

        });

}

function employeeChoice() {
    inquirer.prompt({
        name: "empaddview",
        type: "list",
        message: "What would you like to do within this area?",
        choices: ["Add", "View", "Update"]
    })
        .then(function (response) {
            if (response.empaddview === "Add") {
                eAdd();
            }
            if (response.empaddview === "View") {
                eView();
            }
        });
}

function roleChoice() {
    inquirer.prompt({
        name: "roleaddviewup",
        type: "list",
        message: "What would you like to do within this area?",
        choices: ["Add", "View", "Update"]
    })
        .then(function (response) {
            if (response.roleaddviewup === "Add") {
                rAdd();
            }
            if (response.roleaddviewup === "View") {
                rView();
            }
            if (response.roleaddviewup === "Update") {
                rUpload();
            }

        });
}
// department add
function dAdd() {
    inquirer
        .prompt
        ({
            name: "addDept",
            type: "input",
            message: "What would you like to name this new department?"
        })
        .then(function (response) {
            connection.query(
                "INSERT INTO dept SET ?",
                {
                    dept_name: response.addDept
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your department has been added");
                    // return to a function??
                }
            );
        });
}

// department view
function dView (){
    console.log("Departments: ");
    connection.query("SELECT * FROM dept", function(err, res){
        if (err) throw err;
        console.log(res);
    });
}


// employee add
function eAdd() {
    inquirer
        .prompt
        ([
            {
                name: "addEmpFirst",
                type: "input",
                message: "What is your new employee's first name?"
            },
            {
                name: "addEmpLast",
                type: "input",
                message: "What is your new employee's last name?"
            }
        ])
        .then(function (response) {
            connection.query(
                "INSERT INTO staff SET ?",
                {
                    first_name: response.addEmpFirst,
                    last_name: response.addEmpLast
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your employee has been added");
                    // return to a function??
                }
            );
        });
}

// employee view
function eView (){
    console.log("Employees: ");
    connection.query("SELECT * FROM staff", function(err, res){
        if (err) throw err;
        console.log(res);
    });
}

// role add
function rAdd() {
    inquirer
        .prompt
        ([
            {
                name: "titleName",
                type: "input",
                message: "What is the name of the new employee role?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is this role's salary?"
            }
        ])
        .then(function (response) {
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: response.titleName,
                    salary: response.salary
                },
                // function (err) {
                //     if (err) throw err;
                //     console.log("Your employee has been added");
                //     // return to a function??
                // }
            );
        });
}

// role view
function rView (){
    console.log("Roles: ");
    connection.query("SELECT * FROM role", function(err, res){
        if (err) throw err;
        console.log(res);
    });
}
// role update

