INSERT INTO department (name)
VALUES	("Engineering"),
				("Finance"),
				("Legal"),
				("Sales");

INSERT INTO role (title, salary, department_id)
VALUES	("Software Engineer", 120000, 1),
				("Lead Engineer", 150000, 1),
				("Accountant", 125000, 2),
				("Finance Officer", 160000, 2),
				("Attorney", 190000, 3),
				("Lead Legal Counsel", 250000, 3),
				("Salesperson", 75000, 4),
				("Sales Lead", 110000, 4);
				

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Bob", "Walker", 1),
				("Mary", "Stevens", 2),
				("Sherry", "Thompson", 3),
				("Tom", "Parker", 4),
				("Karen", "Johnson", 5),
				("Steven", "Wilson", 6),
				("Margaret", "Turner", 7),
				("Nancy", "Perry", 8);

UPDATE employee SET manager_id = 2 WHERE id = 1;
UPDATE employee SET manager_id = 4 WHERE id = 3;
UPDATE employee SET manager_id = 6 WHERE id = 5;
UPDATE employee SET manager_id = 8 WHERE id = 7;

--  I need to show in terminal for view all employees their title, salary and department, and could do manager name instead of id (everything in role).  Use Joins.