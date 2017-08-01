var drag=0;
var kang=0;
var peng=0;
var cfish=0;

var cycle=0;

function addQuestion(){
  debugger
  if(cycle === 0) {
    document.getElementById("quest").innerHTML = "Your friend got beaten up. What do you do?";
  }
  else if(cycle === 1 ) {
    document.getElementById("quest").innerHTML = "It's raining outside. What do you do?";
  }
  else if(cycle === 2 ) {
    document.getElementById("quest").innerHTML = "You just won $2,000. Where do you want to travel?";
  }
  else if(cycle === 3 ) {
    document.getElementById("quest").innerHTML = "You are at a buffet. What do you eat?";
  }
  else if(cycle === 4 ) {
    document.getElementById("quest").innerHTML = "You spirit animal is...";
  }
}

function add(){

  cycle += 1;
    if (event.target.id == "drag") {
        drag += 1;
    }
    else if (event.target.id == "kang") {
      kang += 1;
    }
    else if (event.target.id == "peng") {
      peng += 1;
    }
    else if (event.target.id == "cfish") {
      cfish += 1;
    }

addAnswers();

}

function addAnswers(){
    if(cycle === 1){
      document.getElementById("cfish").innerHTML = "Swim.";
      document.getElementById("peng").innerHTML = "Play with ice.";
      document.getElementById("kang").innerHTML = "Play outside.";
      document.getElementById("drag").innerHTML = "Play with lighters.";
    }
    if(cycle === 2){
      document.getElementById("cfish").innerHTML = "The pool.";
      document.getElementById("peng").innerHTML = "Antartica.";
      document.getElementById("kang").innerHTML = "Madagascar.";
      document.getElementById("drag").innerHTML = "A volcano.";
    }
    if(cycle === 3){
      document.getElementById("cfish").innerHTML = "Sushi.";
      document.getElementById("peng").innerHTML = "Ice cream.";
      document.getElementById("kang").innerHTML = "SUGAR!";
      document.getElementById("drag").innerHTML = "SPICY FOOD!";
    }

    addQuestion();

    if(cycle === 4){
      function hide() {
    var input = document.getElementsByClassName('input');

    if (input.style.display === 'none') {
        input.style.display = 'block';
    } else {
        input.style.display = 'none';
    }
  }}}







//document.getElementById("cfish").value;

//function adddrag(){
//  debugger;
//  var x = 1;
//  document.getElementById("demo").innerHTML = x;
//}

//function addkang(){
//var kang = 1;
//}

//function addpeng(){
//var peng = 1;
//}

//function addcfish(){
//var cfish = 1;
//}
