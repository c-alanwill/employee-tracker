INSERT INTO department (id, name)
VALUES	(1, "Engineering"),
				(2, "Finance"),
				(3, "Legal"),
				(4, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES	(100, "Software Engineer", 120,000, 1),
				(101, "Lead Engineer", 150,000, 1),
				(200, "Accountant", 125,000, 2),
				(201, "Finance Officer", 160,000, 2),
				(300, "Attorney", 190,000, 3),
				(301, "Lead Legal Counsel", 250,000, 3),
				(400, "Salesperson", 75,000, 4);
				(401, "Sales Lead", 110,000, 4),
				

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1001, "Bob", "Walker", 100, 1002)
				(1002, "Mary", "Stevens", 101, 1002)
				(1003, "Sherry", "Thompson", 200, 1004)
				(1004, "Tom", "Parker", 201, 1004)
				(1005, "Karen", "Johnson", 300, 1006)
				(1006, "Steven", "Wilson", 301, 1006)
				(1007, "Margaret", "Turner", 400, 1008)
				(1008, "Nancy", "Perry", 401, 1008)
