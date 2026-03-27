const pjDatos = {
  lynett: {
    nombre: "Lynet",
    descripcion: "Mamabicho1000",
    imagen: "/paginaWeb/imagenes/Protav1.png",
    fondo: "/paginaWeb/imagenes/fondomain.jpg"
  },
  circe: {
    nombre: "Circe",
    descripcion: " ",
    imagen: "/paginaWeb/imagenes/Protav1.png",
    fondo: "/paginaWeb/imagenes/fondomain.jpg"
  },
  saloth: {
    nombre: "Saloth",
    descripcion: " ",
    imagen: " ",
    fondo: " "
  },
  zuri: {
    nombre: "Zuri",
    descripcion: " ",
    imagen: " ",
    fondo: " "
  },
  Barbatos: {
    nombre: "Barbatos",
    descripcion: " ",
    imagen: " ",
    fondo: " "
  }
};

const pjNombre = document.getElementById("pj-nombre");
const pjDescripcion = document.getElementById("pj-descripcion");
const pjImagen = document.getElementById("pj-imagen");
const pjFondo = document.getElementById("pj-fondo");
const pjBotones = document.querySelectorAll(".pj-mini-card");

function pjCambiarPersonaje(id) {
  const personaje = pjDatos[id];

  pjNombre.textContent = personaje.nombre;
  pjDescripcion.textContent = personaje.descripcion;
  pjImagen.src = personaje.imagen;
  pjImagen.alt = personaje.nombre;
  pjFondo.style.backgroundImage = `url("${personaje.fondo}")`;

  pjBotones.forEach((boton) => {
    boton.classList.remove("pj-activa");

    if (boton.dataset.id === id) {
      boton.classList.add("pj-activa");
    }
  });
}

pjBotones.forEach((boton) => {
  boton.addEventListener("click", function () {
    const id = this.dataset.id;
    pjCambiarPersonaje(id);
  });
});
