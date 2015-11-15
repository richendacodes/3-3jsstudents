var delstudent = document.getElementsByClassName('btnDel');

function deleteRow() {
    var i = this.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(i);
}

for ( i = 0 ; i < 6; i++) {
  delstudent[i].addEventListener("click", deleteRow);
}



// Works to create a new row with one blank input field. ===========================

// function addRow() {

//     var tableID="studentTable";
//     var table = document.getElementById('studentTable');
//     var rowCount = table.rows.length;

//     if(rowCount<10){
//         var row = table.insertRow(rowCount);
//         var cell1 = row.insertCell(0);
//         var element1 = document.createElement('input');
//         element1.type="text";
//         cell1.appendChild(element1);
//         row.insertCell(1);
//         row.insertCell(2);
//     }
// }


// This works, but doesn't fill the fields dynamically. 

function addRow() {
    var table = document.getElementById("studentTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "Mona";
    cell2.innerHTML = "Simpson";
    cell3.innerHTML = "Email";
    cell4.innerHTML = "No X";
}

