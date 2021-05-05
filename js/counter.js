
var counter = 0;
  function myCount(op) {
    if(op ==="add"){
      counter += 1;
      document.getElementById("counter").innerHTML = counter;
    }
    if(op==="sub"){
      counter -= 1;
      document.getElementById("counter").innerHTML = counter;
    }
    if(op==="reset"){
      counter = 0;
      document.getElementById("counter").innerHTML = counter;
    }
  }


function changeColor() {
  var Color= prompt("Inserire colore");
  var element = document.getElementById('color');
  element.style.color = Color;

}
