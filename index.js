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
      'Add a Department',
      'View all Roles',
      'Add a Role',
      'Update Employee Role',
      'View all Employees',
      'Add an Employee',
      'Quit',
    ],
  }
])
.then ((answer) => {
  switch (answer.action) {
    case 'View all Departments':
      viewAllDepartments();
      break;
    case 'Add a Department':
      addDepartment();
      break;
    case 'View all Roles':
      viewAllRoles();
      break;
    case 'Add a Role':
      addRole();
      break;
    case 'Update Employee Role':
      updateEmployeeRole();
      break;
    case 'View all Employees':
      viewAllEmployees();
      break;
    case 'Add an Employee':
      addEmployee();
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
  // if it's not all you will have to write different.  See around :45 minutes in OOP day 1
  db.query(sql, (err, result) => {
    if (err) return console.log(err);
    console.table(result);
    contain();
  });
  //  if we had a paramater on 74 we would pass it.  You will need to have a function for each add above where you replace console.log and move contain to down here.  See note on line 37.  You can do lines 71 through 77 different using promise.  See video at 49:00 and after.  When you get into tougher callbacks you have to nest and becomes callback hell when looking at bonus, but not sure if it applies to the non-bonus callbacks we need to do.
}

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
app.use((req, res) => {
    res.status(404).end();
  });
  
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });