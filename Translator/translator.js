//var x = "0";
//document.getElementById("text").innerHTML = x;
//var y = x.indexOf("a"||"e"||"i"||"o"||"u");

function trans(){
  var x = document.getElementById("text").value;
debugger
  document.getElementById("done").innerHTML = "";

  for(i=0; i<x.length; i++){

      if(x.charAt(i)==="a"||x.charAt(i)==="e"||x.charAt(i)==="i"||x.charAt(i)==="o"||x.charAt(i)==="u"){
            document.getElementById("done").innerHTML += "ub" + x.charAt(i);
      } else {

      document.getElementById("done").innerHTML += x.charAt(i);
  }
}
      document.getElementById("done").innerHTML += " " + "DONE!";
}
