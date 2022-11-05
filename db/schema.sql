DROP DATABASE IF EXISTS
team_db;
CREATE DATABASE team_db;

USE team_db;

CREATE TABLE department (
	id INT PRIMARY KEY,
	name VARCHAR(30)
);

CREATE TABLE role (
	id INT PRIMARY KEY,
	title VARCHAR(30),
	salary INT,
	department_id INT, 
	FOREIGN KEY (department_id)
	REFERENCES department(id)
	ON DELETE SET NULL
);

CREATE TABLE employee (
	id INT PRIMARY KEY,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	role_id INT,
	manager_id INT, 
	FOREIGN KEY (role_id)
	REFERENCES role(id)
	ON DELETE SET NULL
	FOREIGN KEY (manager_id)
	REFERENCES employee(id)
	ON DELETE SET NULL
);

-- do i need a comma after line 31 between foreign keys?  Do I need null on any of these lines sucn as after ID for each table?  Line 8, 14 and 24 to write: id INT NOT NULL PRIMARY KEY, and line 9 to say: name VARCHAR(30) NOT NULL



