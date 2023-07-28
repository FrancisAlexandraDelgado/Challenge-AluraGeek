import { productoServicios } from "../servicios/productos.js";

const adminProducts = document.querySelector("[data-adminProducts]");

const render = async () => {
  try {
    const data = await productoServicios.listaProductos();
    data.forEach(({ imagenURL, name, price, categorie, description, id }) => {
      const articulo= productoServicios.mostrarProducto(
        imagenURL,
        name,
        price,
        categorie,
        description,
        id
      );
      adminProducts.appendChild(articulo);
    });
  } catch (error) {
    console.log("Ocurrio un error ", error);
  }
};

render();