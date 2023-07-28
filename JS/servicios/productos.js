const listaProductos = async () => {
    const respuesta = await fetch(
      "https://json-server-alurageek.onrender.com/Productos"
    );
    return await respuesta.json();
  };
  
  const detalleProducto = async (id) => {
    const respuesta = await fetch(
      `https://json-server-alurageek.onrender.com/Productos/${id}`
    );
    return await respuesta.json();
  };
  
  const allProductsCategoria = async (categorie) => {
    const respuesta = await fetch(
      `https://json-server-alurageek.onrender.com/Productos?categoria=${categorie}`
    );
    return await respuesta.json();
  };
  
  const deleteProducto = async (id) => {
    const respuesta = await fetch(
      `https://json-server-alurageek.onrender.com/Productos/${id}`,
      {
        method: "DELETE",
      }
    );
    return respuesta;
  };
  
  const crearProducto = async (imagenURL, name, price, categorie, description) => {
    try {
      const respuesta = fetch(
        "https://json-server-alurageek.onrender.com/Productos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imagenURL,
            name,
            price,
            categorie,
            description,
            id: uuid.v4(),
          }),
        }
      );
  
      if ((await respuesta).ok) {
        return (await respuesta).body;
      }
    } catch (error) {
      console.log("Ocurrio un error", error);
    }
  };
  
  const updateProducto = async (
    imagenURL,
    name,
    price,
    categorie,
    description,
    id
  ) => {
    try {
      const respuesta = await fetch(
        `https://json-server-alurageek.onrender.com/Productos${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imagenURL,
            name,
            price,
            categorie,
            description,
            id,
          }),
        }
      );
      return respuesta;
    } catch (error) {
      console.log("Ocurrio un error", error);
    }
  };
  const mostrarProducto = (imagenURL, name, price, categorie, description, id) => {
    const cardProducto = document.createElement("div");
    
    cardProducto.classList.add("articulo");
    const contenido = `
        <img class="imagen" alt="Imagen del Producto" src="${imagenURL}"/>
        <div class="contenido">
          <h4 class="nombre" data-name>${name}</h4>
          <p class="precio" data-price>${price}</p>
          <a class="ver" href="/screens/VerProducto.html?id=${id}"  data-verProducto> Ver producto</a>
        </div>
        <div class="product__card-edit hidden">
            <button class="btnDelete" type="button" id="${id}" data-delete><img src="../img/delete.svg" alt="delete_icon"></button>
            <button class="btnEdit"><a  href="/screens/editarProducto.html?id=${id}" data-edit><img src="../img/edit.svg" alt="edition_icon"></a></button>
        </div>`;

    cardProducto.innerHTML = contenido;
    
    const botonDelete = cardProducto.querySelector("[data-delete]");
  
    botonDelete.addEventListener("click", async () => {
      const id = botonDelete.id;
      console.log(id);
      await deleteProducto(id)
        .then((respuesta) => {
          console.log(respuesta);
          location.reload();
        })
        .catch((error) => console.log("Ocurrio un error", error));
    });
    return cardProducto;
};

export const productoServicios = {
  listaProductos,
  detalleProducto,
  allProductsCategoria,
  mostrarProducto,
  crearProducto,
  deleteProducto,
  updateProducto,
};