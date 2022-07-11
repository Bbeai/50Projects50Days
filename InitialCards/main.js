//selecciona cualquier tipo de elmento h1, div o usando las clases
//en una red de nodos similar a una matriz
const panels = document.querySelectorAll(".panel");

//mostrar las propiedades de cada elemento

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    /*para que se retraigan el resto de imagenes se le quita la clase "active" */
    removeClasses();
    panel.classList.add("active"); //coloca una clase activa
    //a cada div que se preciona, la clase activa tiene propiedades
    //que hacen grande la imagen
  });
});

function removeClasses() {
  panels.forEach((panel) => {
    /*quita la calse activa de los div */
    panel.classList.remove("active");
  });
}
