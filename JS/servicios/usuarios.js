const getUsuarios = async () => {
    const respuesta = await fetch(
      "https://json-server-alurageek.onrender.com/Users"
    );
    return await respuesta.json();
  };
  
  const deleteUsuarios = async (id) => {
    const respuesta = await fetch(
      `https://json-server-alurageek.onrender.com/Users/${id}`,
      {
        method: "DELETE",
      }
    );
    return respuesta;
  };
  
  const detalleCliente = async (id) => {
    const respuesta = await fetch(
      `https://json-server-alurageek.onrender.com/Users/${id}`
    );
    return await respuesta.json();
  };
  
  const updateUsuario = async (name, email, password, id) => {
    try {
      const respuesta = await fetch(
        `https://json-server-alurageek.onrender.com/Users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      return respuesta;
    } catch (error) {
      console.log("Ocurrio un error", error);
    }
  };
  
  const crearUsuario = async (name, email, password) => {
    try {
      const respuesta = fetch(
        "https://json-server-alurageek.onrender.com/Users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
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
  
  const mostrarUsuario = (name, email, password, id) => {
    const tr = document.createElement("tr");
    const contenido = `
                  <th>${name}</th>
                  <th>${email}</th>
                  <th>${password}</th>
                  <th><button class="btnDelete" type="button"><img src="../img/delete.svg" alt="edition_icon"
                              class="iconEdit" id="${id}" data-delete></button>
                  <th><button href="../screens/edit-usuario.html?id=${id}"><img src="../img/edit.svg" alt="edition_icon"
                              class="iconEdit" data-edit></button></th>`;
    tr.innerHTML = contenido;
    const botonDelete = tr.querySelector("[data-delete]");
  
    botonDelete.addEventListener("click", () => {
      const id = botonDelete.id;
      console.log(id);
      deleteUsuarios(id)
        .then((respuesta) => console.log(respuesta))
        .catch((error) => console.log("Ocurrio un error ", error));
    });
    return tr;
  };
  
  export const usuarioServicios = {
    getUsuarios,
    mostrarUsuario,
    detalleCliente,
    deleteUsuarios,
    updateUsuario,
    crearUsuario,
  };