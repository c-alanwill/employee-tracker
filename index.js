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
      //  this is how it should be changed.  change console log in others like viewAllDepartments and remove contain();
      break;
    case 'Add a Department':
      console.log('You want to add a department');
      contain();
      break;
    case 'View all Roles':
      console.log('You want to view all roles');
      contain();
      break;
    case 'Add a Role':
      console.log('You want to add a role');
      contain();
      break;
    case 'Update Employee Role':
      console.log('You want to a role');
      contain();
      break;
    case 'View all Employees':
      console.log('You want to view all employees');
      contain();
      break;
      case 'Add an Employee':
      console.log('You want to add an employee');
      contain();
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