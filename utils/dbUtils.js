import mysql from 'mysql2';
import inquirer from 'inquirer';

class dbUtils {
    constructor() {
        this.db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'A5Nf6pkJT>R?*}&E',
            database: 'business'
        });
    }

    async printDepartments() {
        this.db.query('SELECT * FROM department', function (err, res) {
            if (err) throw err;
            console.log('')
            console.log('==============================')
            console.table(res);
            console.log('==============================')
        });
    }

    async printRoles() {
        this.db.query('SELECT * FROM role', function (err, res) {
            if (err) throw err;
            console.log('')
            console.table(res);
        });
    }

    async printEmployees() {
        this.db.query('SELECT * FROM employee', function (err, res) {
            if (err) throw err;
            console.log('')
            console.table(res);
        });
    }

    async addDepartment(department) {
        this.db.query('INSERT INTO department SET ?', department, function (err, res) {
            if (err) throw err;
        });
    }

    async addRole(role, salary, department) {
        this.db.query('INSERT INTO role SET ?', role, function (err, res) {
            if (err) throw err;
        });
    }

    async addEmployee(firstName, lastName, role, manager) {
        this.db.query('INSERT INTO employee SET ?', firstName, lastName, role, manager, function (err, res) {
            if (err) throw err;
        });
    }

    async updateEmployeeRole(newRole, employeeId) {
        this.db.query('UPDATE employee SET ? WHERE ?', role_id = newRole, id = employeeId, function (err, res) {
            if (err) throw err;
        });
    }

    mainMenu() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add department',
                    'Add role',
                    'Add employee',
                    'Update employee role']
            }
        ]).then((answer) => {
            switch (answer.choice) {
                case 'View all departments':
                    this.printDepartments();
                    break;
                case 'View all roles':
                    this.printRoles();
                    break;
                case 'View all employees':
                    this.printEmployees();
                    break;
                case 'Add department':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'What is the name of the department?'
                        }
                    ]).then((answer) => {
                        this.addDepartment(answer.name);
                    });
                    break;
                case 'Add role':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'title',
                            message: 'What is the title of the role?'
                        },
                        {
                            type: 'input',
                            name: 'salary',
                            message: 'What is the salary of the role?'
                        },
                        {
                            type: 'list',
                            name: 'department',
                            message: 'What department does the role belong to?',
                            choices: ['Sales', 'Engineering', 'Finance', 'Legal']
                        }
                    ]).then((answer) => {
                        this.addRole(answer.title, answer.salary, answer.department);
                    });
                    break;
                case 'Add employee':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'firstName',
                            message: 'What is the employee\'s first name?'
                        },
                        {
                            type: 'input',
                            name: 'lastName',
                            message: 'What is the employee\'s last name?'
                        },
                        {
                            type: 'list',
                            name: 'role',
                            message: 'What is the employee\'s role?',
                            choices: [
                                'Sales Lead',
                                'Salesperson',
                                'Lead Engineer',
                                'Software Engineer',
                            ]
                        },
                        {
                            type: 'list',
                            name: 'manager',
                            message: 'What is the employee\'s manager\'s ID?',
                            choices: [
                                '1',
                                '2',
                            ]
                        }
                    ]).then((answer) => {
                        this.addEmployee(answer.firstName, answer.lastName, answer.role, answer.manager);
                    });
                    break;
                case 'Update employee role':
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'employeeId',
                            message: 'What is the employee ID?'
                        },
                        {
                            type: 'input',
                            name: 'newRole',
                            message: 'What is their new role?'
                        }
                    ]).then((answer) => {
                        this.updateEmployeeRole(answer.newRole, answer.employeeId);
                    });
                    break;
            }
        }).then(() => {
            console.clear();
            this.mainMenu();
            console.clear();
        });
    }
}

export default dbUtils;