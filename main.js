var addBtn = document
  .getElementById("addBtn")
  .addEventListener("click", AddStudent);

var studentNameInput = document.getElementById("studentNameInput");
var studentPHONEInput = document.getElementById("studentPHONEInput");
var studentGRADEInput = document.getElementById("studentGRADEInput");
var studentDesInput = document.getElementById("studentDesInput");
var studentContainer = [];
function AddStudent() {
  var object = {
    name: studentNameInput.value,
    phone: studentPHONEInput.value,
    grade: studentGRADEInput.value,
    Des: studentDesInput.value,
  };
  studentContainer.push(object);
  console.log(studentContainer);

  localStorage.setItem("name", JSON.stringify(studentContainer));

  display();
  console.log(studentContainer);
}

if (localStorage.name != null) {
  studentContainer = JSON.parse(localStorage.name);
  display();
} else {
  studentContainer = [];
}
function display() {
  var crtona = ``;
  for (var i = 0; i < studentContainer.length; i++) {
    crtona += `
      <tr>
      <td> ${studentContainer[i].name} </td>
      <td> ${studentContainer[i].phone}</td>
      <td> ${studentContainer[i].grade}</td>
      <td> ${studentContainer[i].Des}</td>
      <td><button onclick="delbutton(${i})" >Delete</button></td>
      </tr>
        `;
  }

  document.getElementById("tablebody").innerHTML = crtona;
}
function delbutton(i) {
  studentContainer.splice (i,1)
  localStorage.name = JSON.stringify(studentContainer)
  display()

}
//? search student
function searchData(value) {
  var crtona = ``;
    for (let i = 0; i < studentContainer.length; i++) {
      if ( studentContainer[i].name.includes(value) ) {
        crtona += `
        <tr>
        <td> ${studentContainer[i].name} </td>
        <td> ${studentContainer[i].phone}</td>
        <td> ${studentContainer[i].grade}</td>
        <td> ${studentContainer[i].Des}</td>
        <td><button onclick="delbutton(${i})" >Delete</button></td>  
        </tr>
          `;
    }
    document.getElementById("tablebody").innerHTML = crtona;
      }
    }