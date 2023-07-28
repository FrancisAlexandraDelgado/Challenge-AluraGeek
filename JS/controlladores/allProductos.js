import { productoServicios } from "../servicios/productos.js";

const allProducts = document.querySelector("[data-allProducts]");

const imprimirCategoria = async () => {
  try {
    const url = new URL(window.location);
    const categoriaSolicitada = url.searchParams.get("categorie");
    const data = await productoServicios.allProductsCategoria(
      categoriaSolicitada
    );
    data.forEach(({ imagenURL, name, price, categorie, description, id }) => {
      const producto = productoServicios.mostrarProducto(
        imagenURL,
        name,
        categorie,
        price,
        description,
        id
      );
      allProducts.appendChild(producto);
    });
  } catch (err) {
    console.log("Ocurrio un error", err);
  }
};

imprimirCategoria();