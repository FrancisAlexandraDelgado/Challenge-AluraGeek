import { productoServicios } from "../servicios/productos.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const imagenURL = document.querySelector("[data-url]").value;
    const name = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const categorie = document.querySelector("[data-categoria]").value;
    const description = document.querySelector("[data-descripcion]").value;

    await productoServicios.crearProducto(
      imagenURL,
      name,
      categorie,
      price,
      description
    );
    window.location.href = "adminProducto.html";
  } catch (error) {
    console.log("Ocurrio un error", error);
  }
});