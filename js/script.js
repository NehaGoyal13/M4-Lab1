// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var form = window.document.getElementById("addForm");
var selectedtable = window.document.getElementById("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var count = window.document.getElementsByClassName("btn btn-danger");
window.document.getElementById("empCount").innerHTML =
      "(" + count.length + ")";


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    var employeeID = window.document.getElementById("id").value;
    var employeeName = window.document.getElementById("name").value;
    var employeeExt = window.document.getElementById("extension").value;
    var employeeEmail = window.document.getElementById("email").value;
    var employeeDepartment = window.document.getElementById("department").value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = selectedtable.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    // CREATE THE DELETE BUTTON
    let cell = row.insertCell(-1);
    var id = document.createTextNode(employeeID);
    cell.appendChild(id);

    cell = row.insertCell(-1);
    var name = document.createTextNode(employeeName);
    cell.appendChild(name);

    cell = row.insertCell(-1);
    var ext = document.createTextNode(employeeExt);
    cell.appendChild(ext);

    cell = row.insertCell(-1);
    var email = document.createTextNode(employeeEmail);
    cell.appendChild(email);

    cell = row.insertCell(-1);
    var department = document.createTextNode(employeeDepartment);
    cell.appendChild(department);

    cell = row.insertCell(-1);
    var deleteButton = window.document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("class", "btn btn-danger");
    deleteButton.setAttribute("onclick", "deleteEmployeeRow(this)");
    cell.appendChild(deleteButton);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    window.document.getElementById("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE 
    window.document.getElementById("empCount").innerHTML =
    "(" + count.length + ")";
});

// DELETE EMPLOYEE
var deleteEmployeeRow = function (delButton) {
    "use strict";
    var userConfirmation = window.confirm("Do you want to delete this employee?");
    if(userConfirmation === true){
    var row = delButton.parentNode.parentNode;
    selectedtable.deleteRow(row.rowIndex);
    window.document.getElementById("empCount").innerHTML =
      "(" + count.length + ")";
    }
  };