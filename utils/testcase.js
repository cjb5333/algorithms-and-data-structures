const chalk = require('chalk');
const { isEqual } = require('lodash');

module.exports = (func, expected, ...val) => {
    console.log(
    `${isEqual(func(...val), expected) ? chalk.green('PASSED') : chalk.red('FAILED')}`.padEnd(19).concat(`|   Expected: ${expected}`).padEnd(50).concat(`   |    ${val}`)
        );
};