const getDate = require('./get-date.js');
const getTotalCases = require('./get-total-cases.js');
const getNewCases = require('./get-new-cases.js');
const getNewCasesByDay = require('./get-new-cases-by-day.js');
const getRow = require('./get-row.js');
const getRows = require('./get-rows.js');
const getTotalCasesByDay = require('./get-total-cases-by-day.js');
const fs = require('fs');
const file = fs.readFileSync('./owid-covid-usa-data.csv', 'utf-8');


const command = process.argv[2]  //This will capture the user's command input

const date = process.argv[3]  //This will capture the user's date input



const newArray = getRows(file);






    
if (command === 'new'){
console.log(getNewCasesByDay(date, newArray))
}



if (command === 'total'){
console.log(getTotalCasesByDay(date, newArray))
}




if (command !== 'new' && command !== 'total'){
    console.log("You did not input a valid command. Please input 'new' followed by a date(YYYY-MM-DD) if you want to find out the new cases at a spefici date; 'total' followed by a date(YYYY-MM-DD) if you want to find out the total cases by at a specific date")
}

