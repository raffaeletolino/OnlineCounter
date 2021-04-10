
var counter = 0;
  function myCount(op) {
    if(op ==="add"){
      counter += 1;
      document.getElementById("counter").innerHTML = counter;
    }
    if(op==="sot"){
      counter -= 1;
      document.getElementById("counter").innerHTML = counter;
    }
    if(op==="reset"){
      counter = 0;
      document.getElementById("counter").innerHTML = counter;
    }

  }


function cambiacolore() {
  var Color= prompt("Inserire colore");
  var elem = document.getElementById('color');
  elem.style.color = Color;

}
