INSERT INTO `department` (`name`)
VALUES
('IT'),
('HR'),
('Sales'),
('Marketing'),
('Finance');

INSERT INTO `role` (`title`, `salary`, `department_id`)
VALUES
('IT Manager', 100000, 1),
('IT Developer', 50000, 1),
('IT Support', 40000, 1),
('HR Manager', 100000, 2),
('HR Assistant', 50000, 2),
('Sales Manager', 100000, 3),
('Sales Assistant', 50000, 3),
('Marketing Manager', 100000, 4),
('Marketing Assistant', 50000, 4),
('Finance Manager', 100000, 5),
('Finance Assistant', 50000, 5);

INSERT INTO `employee` (`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES
('Sam', 'Smith', 1, NULL),
('John', 'Doe', 2, 1),
('Jane', 'Doe', 3, NULL),
('Mark', 'Doe', 4, NULL),
('Paul', 'Doe', 5, 2),
('Mary', 'Doe', 6, NULL),
('John', 'Smith', 7, NULL),
('Jane', 'Smith', 8, 3),
('Mark', 'Smith', 9, NULL),
('Paul', 'Smith', 10, NULL),
('Mary', 'Smith', 11, 4);
