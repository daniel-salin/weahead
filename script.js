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

// FORM DATA HANDLING CALLBACK
function storeData(project) {
  //Form Data
  let activity = document.querySelector("select[name='activity']").value;
  let timeStart = document.querySelector("input[name='from']").value;
  let timeEnd = document.querySelector("input[name='to']").value;
  let note = document.querySelector("textarea[name='note']").value;
  let isBillable = document.querySelector("input[name='billable']").checked;
  
  let table = document.querySelector("table");
  let newRow = table.insertRow(1);
  newRow.insertCell(0).innerHTML = project;
  newRow.insertCell(1).innerHTML = activity;
  newRow.insertCell(2).innerHTML = timeStart;
  newRow.insertCell(3).innerHTML = timeEnd;
  newRow.insertCell(4).innerHTML = note;
  isBillable? newRow.insertCell(5).innerHTML = "Billable" 
  : newRow.insertCell(5).innerHTML = "Not Billable";
}

// FORM SUBMISSION EVENT
function onSubmit(e) {
  e.preventDefault();
  let project = document.querySelector("select[name='project']").value;
  // Checking if selected project is valid
  (project !== "")? storeData(project): alert("Please select a project");
}
