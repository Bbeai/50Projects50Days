//accedemos a los elementos
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
//se le tiene que especificar si es clase o id
const circles = document.querySelectorAll(".circle");

//flag que me dice estados activo/desactivado

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  console.log(currentActive);
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  //console.log(currentActive);
  update();
});

function update() {
  //recorremos los nodos obtenemos el indice tambien
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      console.log("id: " + idx + "currentActive: " + currentActive);
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
      console.log("id: " + idx + "currentActive: " + currentActive);
    }
  });

  //selecciona los que tienen la clase activa
  const actives = document.querySelectorAll(".active");

  //queremos cambiar el 0% que tiene la linea azul como width
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true; //cuando se haya clickeado una vez se activa el boton prev
  } else if (currentActive == circles.length) {
    next.disabled = true; //cuando se haya llegado al limite total de divs el boton next se deshabilita
  } else {
    /*ambos botones estan abilitados */
    prev.disabled = false;
    next.disabled = false;
  }
}
