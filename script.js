// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];

  let continueInput = true;

while (continueInput) {
  const firstName = prompt("Enter employee's first name:");
  const lastName = prompt("Enter employee's last name:");
  const salary = prompt("Enter employee's salary:");

  if (isNaN(salary)) {
    alert("Please enter a valid number");
    continue;
  }
  const employee = {
    firstName: firstName, 
    lastName: lastName,
    salary: salary,
  };
  employees.push(employee);

  const usercontinueInput = prompt("Do you want to add another employee? (yes/no)");

  if (usercontinueInput === null) {
    continueInput = false;
  } else if (usercontinueInput.toLowerCase() !== "yes") {
    continueInput = false;
  }
}
return employees;
}

const employees = collectEmployees();

console.log(employees);

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    // TODO: Calculate and display the average salary
  const validSalaries = employeesArray.filter(salary => !isNaN(salary));
  if (employeesArray.length === 0) {
    console.log('Empty salary array');
    return;
  }
  const averageSalary = validSalaries.reduce((acc, salary) => acc + salary, 0) / employeesArray.length;
  console.log('Average Salary:', averageSalary);
}

//WORK IN PROGRESS TO GET AVERAGE TO DISPLAY IN CONSOLE CORRECTLY

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
