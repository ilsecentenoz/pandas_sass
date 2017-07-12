var photo = document.getElementsByClassName("galery__img")[0];
var span = document.getElementsByClassName('galery__close');
var galery= document.getElementsByClassName('galery__item')[0];

for (var i = 0; i < span.length; i++){
  span[i].addEventListener("click",hidden);
}

function hidden() {
  this.parentNode.style.display="none";
}


var origen=document.getElementById('origen');
var textOrigen=document.getElementById('txt-origen');

var evolucion=document.getElementById('evolucion');
var textEvolucion=document.getElementById('txt-evolucion');

origen.addEventListener("dblclick", showO);
origen.addEventListener("click", hiddenO);
 
evolucion.addEventListener("dblclick", showE);
evolucion.addEventListener("click", hiddenE);


function showO() {
  textOrigen.style.visibility = "visible";
}
function hiddenO() {
  textOrigen.style.visibility = "hidden";
}

function showE() {
  textEvolucion.style.visibility = "visible";
}

function hiddenE() {
  textEvolucion.style.visibility = "hidden";
}

var buttonPost=document.getElementById('restablecer');
buttonPost.addEventListener("click", postImg);

function postImg() {
  for(var i=0; i < span.length; i++){
    span[i].parentNode.style.display = "block";
  }
}