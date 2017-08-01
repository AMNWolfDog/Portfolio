window.alert("Welcome to Mad Libs! Press okay to continue.");

function createStory(){

}

function Display() {

    var noun1 = document.getElementById("noun1").value;
    var verb1 = document.getElementById("verb1").value;
    var adj1 = document.getElementById("adj1").value;
    var noun2 = document.getElementById("noun2").value;

    document.getElementById("displaynoun1").innerHTML = noun1;
    document.getElementById("displayverb1").innerHTML = verb1;
    document.getElementById("displayadj1").innerHTML = adj1;
    document.getElementById("displaynoun2").innerHTML = noun2;


}
