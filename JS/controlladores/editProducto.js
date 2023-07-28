import { productoServicios } from "../servicios/productos.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  if (id === null) {
    alert("Producto no existe");
  }
  const imagurl = document.querySelector("[data-url]");
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const categorie = document.querySelector("[data-categoria]");
  const description = document.querySelector("[data-descripcion]");

  try {
    const detalle = await productoServicios.detalleProducto(id);
    if (
      detalle.imageURL &&
      detalle.name &&
      detalle.price &&
      detalle.categorie &&
      detalle.description
    ) {
      imagurl.value = detalle.imageURL;
      nombre.value = detalle.name;
      precio.value = detalle.price;
      categorie.value = detalle.categorie;
      description.value = detalle.description;
    } else {
      console.log("error");
    }
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const imagenURL = document.querySelector("[data-url]").value;
  const name = document.querySelector("[data-nombre]").value;
  const precie = document.querySelector("[data-precio]").value;
  const categorie = document.querySelector("[data-categoria]").value;
  const description = document.querySelector("[data-descripcion]").value;

  productoServicios
    .updateProducto(imagenURL, name, precie, categorie, description, id)
    .then(() => {
      window.location.href = "../screens/adminProducto.html";
    })
    .catch((error) => console.log("Ocurrio un error", error));
});