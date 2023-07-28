import { productoServicios } from "../servicios/productos.js";

const productosStarWars = document.querySelector("[data-starWarsCategoria]");
const productosConsolas = document.querySelector("[data-consolasCategoria]");
const productosDiversos = document.querySelector("[data-diversosCategoria]");

const render = async () => {
  try {
    const data = await productoServicios.listaProductos();
    data.forEach(({ imagenURL, name, price, categorie, description, id }) => {
      if (categorie === "StarWars") {
        const producto = productoServicios.mostrarProducto(
          imagenURL,
          name,
          categorie,
          price,
          description,
          id
        );
        productosStarWars.appendChild(producto);
      }
      if (categorie === "Consolas") {
        const producto = productoServicios.mostrarProducto(
          imagenURL,
          name,
          categorie,
          price,
          description,
          id
        );
        productosConsolas.appendChild(producto);
      }

      if (categorie === "Diversos") {
        const producto = productoServicios.mostrarProducto(
          imagenURL,
          name,
          categorie,
          price,
          description,
          id
        );
        productosDiversos.appendChild(producto);
      }
    });
  } catch (err) {
    console.log("Ocurrio un error", err);
  }
};

render();