// Write a elegant solution for the below Acceptance Criteria. Import the json into your js file and start working. Please note that the function you write is generic and the edge cases covered.
// Find the country which has the highest income.
// Find the country which has the combined highest income
// Get all the users info (complete info) who has the email which ends with .gov
// Find the country name which has the maximum combined income for Female
// You have to complete the solutions by 7 pm and it should get reviewed after. I should have got the PR then
// Write a program to get paginated result from the json -  getPaginatedResult(pageNumber, pageSize);
// For example getPaginatedResult(2, 20) will return result from 21-40 from the json

const data = require("./users-db.json");
console.log(data)

function analyzeData(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return {
      highestIncomeCountry: null,
      highestCombinedIncomeCountry: null,
      govEmailUsers: [],
      maxFemaleIncomeCountry: null,
    };
  }

  //find the conuntry with highest income
  let richest = users[0];
  for (let i = 1; i < users.length; i++) {
    if (users[i].income > richest.income) {
      richest = users[i];
    }
  }
  const highestIncomeCountry = richest.country;

  //find the country with highest income combined
  const incomeByCountry = {};
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (!incomeByCountry[user.country]) {
      incomeByCountry[user.country] = 0;
    }
    incomeByCountry[user.country] += user.income;
  }

  let highestCombinedIncomeCountry = null;
  let maxIncome = 0;
  for (const country in incomeByCountry) {
    if (incomeByCountry[country] > maxIncome) {
      maxIncome = incomeByCountry[country];
      highestCombinedIncomeCountry = country;
    }
  }

  //find user email ends with .gov
  const govEmailUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].email.endsWith(".gov")) {
      govEmailUsers.push(users[i]);
    }
  }

  //find country with max combined income
  const femaleIncomeByCountry = {};
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.gender === "Female") {
      if (!femaleIncomeByCountry[user.country]) {
        femaleIncomeByCountry[user.country] = 0;
      }
      femaleIncomeByCountry[user.country] += user.income;
    }
  }

  let maxFemaleIncomeCountry = null;
  let maxFemaleIncome = -Infinity;
  for (const country in femaleIncomeByCountry) {
    if (femaleIncomeByCountry[country] > maxFemaleIncome) {
      maxFemaleIncome = femaleIncomeByCountry[country];
      maxFemaleIncomeCountry = country;
    }
  }

  return {
    highestIncomeCountry,
    highestCombinedIncomeCountry,
    govEmailUsers,
    maxFemaleIncomeCountry,
  };
}

//pagination
function getPaginatedResult(users, pageNumber, pageSize) {
  if (!Array.isArray(users) || pageNumber < 1 || pageSize < 1) {
   return null
  }

  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;

  const result = [];
  for (let i = start; i < end && i < users.length; i++) {
    result.push(users[i]);
  }
  return result;
}

console.log("Analysis:", analyzeData(data));
console.log("Pagination (page 2, size 2):", getPaginatedResult(data, 2, 2));
