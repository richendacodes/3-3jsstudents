var delstudent = document.getElementsByClassName('btnDel');

function deleteRow() {
    var i = this.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(i);
}

for ( i = 0 ; i < 6; i++) {
  delstudent[i].addEventListener("click", deleteRow);
}


// var makeStudent = document.getElementById('btnMake')

// function myCreateFunction() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     cell1.innerHTML = "NEW CELL1";
//     cell2.innerHTML = "NEW CELL2";
// }

