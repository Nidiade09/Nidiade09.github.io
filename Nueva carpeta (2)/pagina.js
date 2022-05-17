
const el_contenedor =  document.getElementById("Personajes");

function obtener_info(inf) {
  let url = "datos.json" + pokemon;
  fetch(datos.json).then(function(respuesta) {
    return respuesta.json();
  }).then(function(datos) {
    let div = document.createElement("div");
    div.classList.add("inf-card");
    let texto = document.createElement("p");
    texto.innerHTML = datos["name"];
  }).catch(function(error) {
    console.log(error);
  });
}

obtener_info(1);
obtener_info(6);


