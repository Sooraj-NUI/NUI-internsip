const data = require("./people_dataset_500.json");
console.log(data);

function findCountriesWithHigherIncome(peopleDetails) {
     if (!Array.isArray(peopleDetails) || peopleDetails.length === 0) {
    console.error("peopleDetails must be a non-empty array");
    return false;
  }
  let countriedWithHigherIncome = [];
  let onlyContryNames = [];
  peopleDetails.map((item) => {
    console.log(item);
    if (item.income > 100) {
      console.log(item.country);
      countriedWithHigherIncome.push(item);
      if (!onlyContryNames.includes(item.country)) {
        onlyContryNames.push(item.country);
      }
    }
  });
  console.log(countriedWithHigherIncome);
  console.log(onlyContryNames);
  return { countriedWithHigherIncome, onlyContryNames };
}
const countriesWithHighIncome = findCountriesWithHigherIncome(data);

function findCount(countries) {
    if (!Array.isArray(countries) || countries.length === 0) {
    console.error("countries must be a non-empty array");
    return false;
  }
  let countryCount = {};
  countries.map((item) => {
    console.log(item);
    if (!countryCount.hasOwnProperty(item.country)) {
      console.log(!countryCount[item.country]);
      countryCount[item.country] = 0;
    } else {
      countryCount[item.country]++;
    }
  });
  console.log(countryCount);
  return countryCount;
}
const countyTotalCount = findCount(
  countriesWithHighIncome.countriedWithHigherIncome
);

function findAverage(countries, totalCountryCount) {
    if (!Array.isArray(countries) || countries.length === 0) {
    console.error("countries must be a non-empty array");
    return false;
  }
  console.log(totalCountryCount);
  let totalIncomeOfPeople = {};
  countries.map((item) => {
    console.log(item);
    if (!totalIncomeOfPeople.hasOwnProperty(item.country)) {
      totalIncomeOfPeople[item.country] = item.income;
    } else {
      totalIncomeOfPeople[item.country] += item.income;
    }
  });
  let result = {};
  for (let key in totalCountryCount) {
    result[key] =
      Math.round((totalIncomeOfPeople[key] / totalCountryCount[key]) * 100) /
      100;
  }
  console.log(totalIncomeOfPeople);
  console.log(result);
  return result;
}
const averageValue = findAverage(
  countriesWithHighIncome.countriedWithHigherIncome,
  countyTotalCount
);

function findSortedCountryDetails(averageValue, totalCountryCount) {
    if (!averageValue || typeof averageValue !== "object") {
    console.error("averageValue must be an object");
    return false;
  }
  console.log(averageValue);
  console.log(totalCountryCount);
  let countyWithCountAndAverageIncome = [];
  for (let key in averageValue) {
    countyWithCountAndAverageIncome.push({
      country: key,
      averageValue: averageValue[key],
      count: totalCountryCount[key],
    });
  }

  //   console.log(
  //     countyWithCountAndAverageIncome.sort((a, b) => b.count - a.count)
  //   );
  //sort using bubble sort
  for (let i = 0; i < countyWithCountAndAverageIncome.length; i++) {
    for (j = 0; j < countyWithCountAndAverageIncome.length - i - 1; j++) {
      if (
        countyWithCountAndAverageIncome[j].count <
        countyWithCountAndAverageIncome[j + 1].count
      ) {
        temp = countyWithCountAndAverageIncome[j].count;
        countyWithCountAndAverageIncome[j].count =
          countyWithCountAndAverageIncome[j + 1].count;
        countyWithCountAndAverageIncome[j + 1].count = temp;
      }
    }
  }
  console.log(countyWithCountAndAverageIncome);
  return countyWithCountAndAverageIncome;
}
const sortedCountryDetails = findSortedCountryDetails(
  averageValue,
  countyTotalCount
);

function findCountryWithHigherCount(sortedArrayOfCountries, minValue) {
     if (!Array.isArray(sortedArrayOfCountries) || sortedArrayOfCountries.length === 0) {
    console.error("sortedArrayOfCountries must be a non-empty array");
    return false;
  }
  let finalDetailsAfterGivenMinimumValue = [];
  console.log(sortedArrayOfCountries);
  sortedArrayOfCountries.filter((item) => {
    if (item.count >= minValue) {
      finalDetailsAfterGivenMinimumValue.push(item);
    }
  });
  console.log(finalDetailsAfterGivenMinimumValue);
}
findCountryWithHigherCount(sortedCountryDetails, 10);

function findUniqueAndDuplicateEmails(peopleDetails) {
     if (!Array.isArray(peopleDetails) || peopleDetails.length === 0) {
    console.error("peopleDetails must be a non-empty array");
    return false;
  }
  console.log(peopleDetails);
  const uniqueEmails = [];
  const allEmails = [];
  let dulpicateEmailCount = 0;
  peopleDetails.map((item) => {
    console.log("allEmails", item.email);
    if (!uniqueEmails.includes(item.email)) {
      uniqueEmails.push(item.email);
    }
    allEmails.push(item.email);
  });
  console.log(uniqueEmails);
  console.log(allEmails);
  dulpicateEmailCount = allEmails.length - uniqueEmails.length;
  console.log(dulpicateEmailCount);
}
findUniqueAndDuplicateEmails(data);

function findGovEmployee(personDetails) {
     if (!Array.isArray(personDetails) || personDetails.length === 0) {
    console.error("personDetails must be a non-empty array");
    return false;
  }
  let govtEmployee = [];
  console.log(personDetails);
  personDetails.map((item) => {
    if (
      item.sector === "government" ||
      item.sector === "public-sector" ||
      item.email.toLowerCase().includes(".gov")
    ) {
      govtEmployee.push(item);
    }
  });
  console.log(govtEmployee);
  return govtEmployee;
}
const govEmployees = findGovEmployee(data);

function findFemaleGovEmployee(governmentEmployeeDetails) {
    if (!Array.isArray(governmentEmployeeDetails) || governmentEmployeeDetails.length === 0) {
    console.error("governmentEmployeeDetails must be a non-empty array");
    return false;
  }
  let femaleEmployees = [];
  console.log(governmentEmployeeDetails);
  const feMaleGovEmployees = governmentEmployeeDetails.map((employee) => {
    if (employee.gender === "female") {
      femaleEmployees.push(employee);
    }
  });
  console.log(femaleEmployees);
}
findFemaleGovEmployee(govEmployees);

function countyWithValues(personDetails) {
    if (!Array.isArray(personDetails) || personDetails.length === 0) {
    console.error("personDetails must be a non-empty array");
    return false;
  }
  console.log(personDetails);
  const countryGovPrivateTotalCount = personDetails.reduce((acc, item) => {
    // console.log(acc[item.country]);
    if (!acc[item.country]) {
      acc[item.country] = {
        totalPeople: 0,
        avgIncome: 0,
        totalIncome: 0,
        govCount: 0,
        privateCount: 0,
      };
    }
    acc[item.country].totalPeople += 1;
    acc[item.country].totalIncome += item.income;
    // acc[item.country].avgIncome =
    //   acc[item.country].totalIncome / acc[item.country].totalPeople;
    acc[item.country].avgIncome =
      (acc[item.country].avgIncome * (acc[item.country].totalPeople - 1) +
        item.income) /
      acc[item.country].totalPeople;

    if (item.sector === "government" || item.sector === "public-sector") {
      acc[item.country].govCount += 1;
    } else if (item.sector === "private") {
      acc[item.country].privateCount += 1;
    }
    console.log(acc[item.country]);
    // const {...acc} = acc;
    console.log(acc);
    return acc;
  }, {});

  console.log(countryGovPrivateTotalCount);
}
countyWithValues(data);

function findTotalTaxPerPerson(personDetails) {
    if (!Array.isArray(personDetails) || personDetails.length === 0) {
    console.error("\personDetails must be a non-empty array");
    return false;
  }
    console.log(personDetails);
    const totalTax = personDetails.map((person)=>{
        return{
            name:person.name,
            tax:person.taxes,
            totalTax:person.taxes.income_tax+person.taxes.social_security+person.taxes.vat

        }
    })
    console.log(totalTax)
}
findTotalTaxPerPerson(data);
