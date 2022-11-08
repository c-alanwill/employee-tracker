# Employee Tracker

## Description

The repository shows a Node.js command-line application for a content management system.  The command-line application can be used to manage a company's employee database, using Node.js, Inquirer and MySQL.  


## Functionality

The command-line application will be invoked by using the following command in the terminal: node index.js

When the application is started, the user is presented with the following option to: 
* view all departments; 
* view all roles; 
* view all employees; 
* add a department; 
* add a role; 
* add an employee; 
* update an employee role.  

When a user chooses to **view all departments** they are presented with a formatted table showing department names and department ids.  

When a user chooses to **view all roles** they are presented with:
* role id; 
* the job title; 
* the salary for the role.
* the department id that role belongs to; 

When a user chooses **view all employees** they are presented with a formatted table showing employee data, including: 
* employee ids; 
* first names; 
* last names; 
* job titles;
* departments; 
* salaries; 
* managers that the employees report to.

When a user chooses to **add a department** they are prompted to:
* enter the name of the department.<br>
*Then that department is added to the database.*

When a user chooses to **add a role** they are prompted to: 
* enter the job title for the role;
* enter the salary for the role; 
* enter the department id for the role.<br>
*Then that role is added to the database.*

When a user chooses to **add an employee** they are prompted to enter the employee's:
* first name;
* last name;
* role id; 
* manager id.<br>
*Then that employee is added to the database.*

When a user chooses to **update an employee role** they are prompted to:
* select an employee to update; 
* select the employee's new role.<br>
*Then that employee role is updated in the database.* 

## Code

The application uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to the MySQL database and perform queries.

The application uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4) to interact with the user via the command line.

The application uses the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

Comments have been applied to the different files in the code to identify each section of code. 

There is an index.js file that starts the application.

Included is a package.json file with the required dependencies, as well as gitignore, node_modules and .DS_Store files.

The application includes a seeds.sql file to pre-populate the database. 

The database schema as shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)


## Installation

The code for this project can be found on GitHub at: https://github.com/c-alanwill/employee-tracker

A link to a video that shows a walkthrough demonstrating how this readme works is available at: https://drive.google.com/file/d/1hYZIiH_7irIb0jmRP0-DzZEkAsUq4Cr3/view?usp=sharing

## Usage

The following image demonstrates the appearance of the application being run from the command line:

![Team](./Assets/12-sql-homework-video-thumbnail.png)

## Credits

N/A

## License

Please refer to the license in the repo.

## Contributing

N/A