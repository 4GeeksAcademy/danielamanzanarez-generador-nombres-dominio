// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  /* Crea un script que genere todas las combinaciones posibles de nombres de dominio de una lista de pronombres, adjetivos y sustantivos.
    Deberás usar los bucles o loops anidados para mezclar los diferentes valores. Tus herramientas: bucles for, concatenación de strings. */
  // let nuevaAgregarName = document.getElementById("listaNombres").value;
};
function agregarName() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com"];
  let lista = document.querySelector(".listaNombres");
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
        for (let z = 0; z < ext.length; z++) {
          // console.log(pronoun[i] + adj[j] + noun[x] + ext[z]);
          let nombreDominio = pronoun[i] + adj[j] + noun[x] + ext[z];
          let item = document.createElement("li");
          item.textContent = nombreDominio;
          lista.appendChild(item);
        }
      }
    }
  }
}
