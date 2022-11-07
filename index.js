const express = require('express');

const PORT = process.env.PORT || 3001;
const inquirer = require('inquirer');
const db = require('./config/connection');

require('console.table');

const app = express();

// Express middleware  
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function contain() {
inquirer.prompt([
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all Departments',
      'View all Roles',
      'View all Employees',
      'Add a Department',
      'Add a Role',
      'Add an Employee',
      'Update Employee Role',
      'Quit',
    ],
  }
])
.then ((answer) => {
  switch (answer.action) {
    case 'View all Departments':
      viewAllDepartments();
      break;
    case 'View all Roles':
        viewAllRoles();
        break;
      case 'View all Employees':
      viewAllEmployees();
      break;
    case 'Add a Department':
      addDepartment();
      break;
    case 'Add a Role':
      addRole();
      break;
    case 'Add an Employee':
      addEmployee();
      break;
    case 'Update Employee Role':
      updateEmployeeRole();
      break;
    default:
      process.exit();
  }
})
.catch((err) => console.log(err));
}
contain();

function viewAllDepartments() {
  const sql = 'SELECT * FROM department';
  db.query(sql, (err, result) => {
    if (err) return console.log(err);
    console.table(result);
    contain();
  });
}

function viewAllRoles(){
  const sql = 'SELECT * FROM role';
  db.query(sql, (err, result) => {
    if (err) return console.log(err);
    console.table(result);
    contain();
  });
}

function viewAllEmployees(){
  const sql = 'SELECT * FROM employee';
  db.query(sql, (err, result) => {
    if (err) return console.log(err);
    console.table(result);
    contain();
  });
}

function addDepartment(){
  inquirer.prompt([
    {
      type: 'input',
      name: 'department_name',
      message: 'What department would you like to add?',
    }
  ]).then (answer => {
    db.query('INSERT INTO department(name) VALUES (?)', [
      answer.department_name
    ], (err) => {
      viewAllDepartments()
    })
  });
}

function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your title?',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary of role?'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'What is the department id?'
    },
  ]). then (answer => {
    db.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?)', [
      answer.title, answer.salary, answer.department_id
    ], (err) => {
      viewAllRoles()
    });
  });
}

app.use((req, res) => {
    res.status(404).end();
  });
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

















  // On line 65 if it's not all you will have to write different.  See around :45 minutes in OOP day 1

  // function addDepartment() {
//   const sql = 'SELECT * FROM department';
//   db.query(sql, (err, result) => {
//     if (err) return console.log(err);
//     console.table(result);
//     contain();
//   });
  
  // Query database - department refers to the table
// db.query('SELECT * FROM department', function (err, results) {
//   console.log(results);
// });

// module.exports = db;

// Default response for any other request (Not Found)


    //  You can do lines 71 through 77 different using promise.  See video at 49:00 and after.  When you get into tougher callbacks you have to nest and becomes callback hell when looking at bonus, but not sure if it applies to the non-bonus callbacks we need to do.

