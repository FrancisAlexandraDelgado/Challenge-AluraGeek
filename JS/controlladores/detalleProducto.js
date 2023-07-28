import { productoServicios } from "../servicios/productos.js";

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  
  if (id === null) {
    alert("Ocurrio un error");
  }

  try {
    const producto = await productoServicios.detalleProducto(id);
  
    if (producto.name && 
        producto.price &&
        producto.description &&
        producto.imagenURL
    ) {
      const detalle = document.querySelector("[data-producto]");

      const contenido = `
        <img alt="imagen" class="details-img" data-img
        src="${producto.imagenURL}">
          <div class="details-info">
              <h2 class="details-name" data-name>${producto.name}</h2>
              <p class="details-price" data-price>${producto.price}</p>
              <p class="details-descripcion" data-descripcion>${producto.description}</p>
          </div>
        `;

      detalle.innerHTML = contenido;

      const categoriaSimilar = producto.categorie;
      const idProductoActual = producto.id;

      const productosSimilares = document.querySelector(
        "[data-products-similars]"
      );

      productoServicios.listaProductos().then((data) => {
        data.forEach(
          ({ imagenURL, name, price, categorie, description, id }) => {
            if (
              categorie === "StarWars" &&
              categoriaSimilar === "StarWars" &&
              idProductoActual != id
            ) {
              const producto = productoServicios.mostrarProducto(
                imagenURL,
                name,
                categorie,
                price,
                description,
                id
              );
              productosSimilares.appendChild(producto);
            }
            if (
              categorie === "Consolas" &&
              categoriaSimilar === "Consolas" &&
              idProductoActual != id
            ) {
              const producto = productoServicios.mostrarProducto(
                imagenURL,
                name,
                categorie,
                price,
                description,
                id
              );
              productosSimilares.appendChild(producto);
            }
            if (
              categorie === "Diversos" &&
              categoriaSimilar === "Diversos" &&
              idProductoActual != id
            ) {
              const producto = productoServicios.mostrarProducto(
                imagenURL,
                name,
                categorie,
                price,
                description,
                id
              );
              productosSimilares.appendChild(producto);
            }
          }
        );
      });
       } else {
      throw new Error();
    }
  } catch (err) {
    console.log("Ocurrio un error", err, id);
  }
}
 
obtenerInformacion();