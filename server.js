import dbUtils from './utils/dbUtils.js';

console.log('Employee Tracker');

const db = new dbUtils()

console.clear();
db.mainMenu();