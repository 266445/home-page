if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
 }
  
function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
}
 
//POST-IT NOTE SHOW AND HIDE
var show = false;
function showNote(){
    if (show == false){
        document.getElementById("note").style.opacity = 1;
        show = true;
    }
    else if (show == true){
        document.getElementById("note").style.opacity = 0;
        show = false;
    }
}

if (localStorage["calculator"]) {
    var calculator = localStorage["calculator"];
    document.getElementById("calculator").value = calculator;
 }
  
function autoSave() {
    var calculator = document.getElementById("calculator").value;
    localStorage.setItem("calculator", calculator);
}
 
//CALCULATOR SHOW AND HIDE
var show = false;
function showCalculator(){
    if (show == false){
        document.getElementById("calculator").style.opacity = 1;
        show = true;
    }
    else if (show == true){
        document.getElementById("calculator").style.opacity = 0;
        show = false;
    }
}


 
 