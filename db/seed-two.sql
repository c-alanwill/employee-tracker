INSERT INTO department (name)
VALUES	("Engineering"),
				("Finance"),
				("Legal"),
				("Sales");

INSERT INTO role (title, salary, department_id)
VALUES	("Software Engineer", 120,000, 1),
				("Lead Engineer", 150,000, 1),
				("Accountant", 125,000, 2),
				("Finance Officer", 160,000, 2),
				("Attorney", 190,000, 3),
				("Lead Legal Counsel", 250,000, 3),
				("Salesperson", 75,000, 4);
				("Sales Lead", 110,000, 4),
				

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Bob", "Walker", 100, 1002)
				("Mary", "Stevens", 101, 1002)
				("Sherry", "Thompson", 200, 1004)
				("Tom", "Parker", 201, 1004)
				("Karen", "Johnson", 300, 1006)
				("Steven", "Wilson", 301, 1006)
				("Margaret", "Turner", 400, 1008)
				("Nancy", "Perry", 401, 1008)

-- should manager have a manager_id for themself and then that same id shows on person they manage?  For example, line 19 and 20 are both 1002 because Mary, the lead engineer would manage Bob.