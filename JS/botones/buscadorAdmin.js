const buscadorIndice = document.querySelector("[data-busqueda]");

buscador.addEventListener("input", (evento) => {
  const textoBuscado = evento.target.value;
  buscador.addEventListener("keypress", (evento2) => {
    if (evento2.key === "Enter") {
      window.location.href = `busquedabuscadorAdm.html?buscar=${textoBuscado}`;
      buscador.value = "";
    }
  });
});