let form = document.querySelector('.report');

//-------------------------
// FORM SUBMISSION
//-------------------------

// FORM SUBMISSION EVENT HANDLING
if(form.addEventListener){
  //Modern browsers
    form.addEventListener("submit", onSubmit, false);  
}else if(form.attachEvent){
  //Old Browser (IE) fallback
    form.attachEvent('onsubmit', onSubmit);            
}

// INSERT DATA INTO TABLE
function insertData() {
  let table = document.querySelector("table");
  let newRow = table.insertRow(0);
  let projectCell = newRow.insertCell(0);
  let activityCell = newRow.insertCell(1);
  let fromCell = newRow.insertCell(2);
  let toCell = newRow.insertCell(3);
  let noteCell = newRow.insertCell(4);
  
  // Fill Cells with Data

}

// FORM DATA HANDLING CALLBACK
function storeData() {
  //Form Data
  let activity = document.querySelector("select[name='activity']").value;
  let timeStart = document.querySelector("input[name='from']").value;
  let timeEnd = document.querySelector("input[name='to']").value;
  let note = document.querySelector("textarea[name='note']").value;
  let isBillable = document.querySelector("input[name='billable']").checked;

  insertData();

}

// FORM SUBMISSION EVENT
function onSubmit(e) {
  e.preventDefault();
  let project = document.querySelector("select[name='project']").value;
  // Checking if selected project is valid
  if(project !== "") {
    storeData();
  }
}
