const form = document.getElementById("form");
const tbody = document.getElementById("tbody");
const employees = [];

//function to add employee in the table.
function addEmp(emp) {
  //check for duplicates
  for (let i = 0; i < employees.length; i++) {
    // selecting a single employee object to check
    let e = employees[i];
    // check if the employe exist aleady in the array .
    //check weather the object e's(already existing obj) email is == to new object recived (emp).
    if (e.email === emp.email) {
      alert("email already Exists");
      // if employee found do not add the current employee.
      return;
    } else if (e.emp_id == emp.emp_id) {
      alert("email already Exists");
      // if employee found do not add the current employee.
      return;
    }
  }

  // creating the table row
  const tableRow = document.createElement("tr");
  //creating rows data for employee data
  tableRow.innerHTML = `
    <td>${emp.name}</td>
    <td>${emp.email}</td>
    <td>${emp.emp_id}</td>
    <td>${emp.designation}</td>
    <td>${emp.compony}</td>
    <td>DOM</td>`;

  tbody.appendChild(tableRow);

  employees.push(emp);

  form.reset();
}


//Retriveing data from the from using event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let employee = {
    name: event.target.name.value,
    email: event.target.email.value,
    emp_id: event.target.emp_id.value,
    designation: event.target.designation.value,
    compony: event.target.compony.value,
  };

  // calling the function addemp to add employee by creating  a row
  addEmp(employee);

  // console.log(employee);
});
