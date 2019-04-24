let form = document.querySelector(".report");
let table = document.querySelector("table");

//-------------------------
// TIME SUM
//-------------------------

/*
Loop over table row and use counter to store
time data (subtract start time from end time)
and render in last table row
*/
function sumTime() {
  let timeSum = 0;
  let hours = 0
  let minutes = 0
  // Summarize time over table rows
  for(let i = 1; i < table.rows.length-1; i++) {
    let start = table.rows[i].cells[2].innerText;
    let end = table.rows[i].cells[3].innerText;
    startArray = start.split(":");
    endArray = end.split(":");
    let startHours = parseInt(startArray[0]);
    let startMinutes = parseInt(startArray[1]);
    let endHours = parseInt(endArray[0]);
    let endMinutes = parseInt(endArray[1]);
    hours += endHours - startHours;
    minutes += endMinutes - startMinutes;
    (minutes.toString().length < 2)
    ? timeSum = ((hours) + ":0" + (minutes))
    : timeSum = (hours) + ":" + (minutes);
  }
  // Insert calculated time into DOM
  table.rows[table.rows.length-1].cells[0].innerHTML = "Summa total tid: " + timeSum;
}

//

//-------------------------
// FORM SUBMISSION
//-------------------------

// FORM SUBMISSION EVENT HANDLING
if(form.addEventListener){
  //Modern browsers
    form.addEventListener("submit", onSubmit, false);  
}else if(form.attachEvent){
  //Old Browser (IE) fallback
    form.attachEvent("onsubmit", onSubmit);            
}

// FORM DATA HANDLING CALLBACK
function storeData(project) {
  /* Form validation of inserted values would go here 
    Time would need to be displayed against the correct 
    time format. Note length and activity as well.
  */

  let activity = document.querySelector("select[name='activity']").value;

  let timeStart = document.querySelector("input[name='from']").value;
  let timeEnd = document.querySelector("input[name='to']").value;
  let note = document.querySelector("textarea[name='note']").value;
  let isBillable = document.querySelector("input[name='billable']").checked;
  
  let newRow = table.insertRow(1);
  newRow.insertCell(0).innerHTML = project;
  newRow.insertCell(1).innerHTML = activity;
  newRow.insertCell(2).innerHTML = timeStart;
  newRow.insertCell(3).innerHTML = timeEnd;
  newRow.insertCell(4).innerHTML = note;
  isBillable? newRow.insertCell(5).innerHTML = "Billable" 
  : newRow.insertCell(5).innerHTML = "Not Billable";

  sumTime();
}

// FORM SUBMISSION EVENT
function onSubmit(e) {
  e.preventDefault();
  let project = document.querySelector("select[name='project']").value;
  // Checking if selected project is valid
  (project !== "")? storeData(project): alert("Please select a project");
}


//-------------------------
// EDIT ROW
//-------------------------

/* Insert new table row under the clicked row
and allow user to fill in new data using above table 
data as values for new row. Upon submission
replace old row with new row.

Would need to insert edit/delete buttons. Made a quick png
of a delete button icon but decided that the time summerization
took priority
*/

//-------------------------
// DELETE ROW
//-------------------------

// Target current row and delete upon button press


//-------------------------
// INIT
//-------------------------

function init() {
  sumTime();
}

window.onload = init();


