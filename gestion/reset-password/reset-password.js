var btnBack = document.getElementById("btn-back");
var btnDelete = document.getElementById("btn-delete");
var btnSend = document.getElementById("btn-send");

btnDelete.addEventListener("click", deleteForm());

function deleteForm(){
    inputEmail.value = "";
    btnDelete.style.display = "none";
    btnBack.style.display = "block";
}

//acá en adelante hay algo que no funciona, no agarra el valor dentro del input
var inputEmail = document.getElementById("input-email");
var inputEmailValue = inputEmail.value;

console.log("inputEmail.value", inputEmail.value);

function changeBackifStart() {
    if(inputEmailValue.value.length > 0){
        btnDelete.style.display = "block";
        btnBack.style.display = "none";
    } else {
        btnDelete.style.display = "none";
        btnBack.style.display = "block";
    }
}

changeBackifStart();
