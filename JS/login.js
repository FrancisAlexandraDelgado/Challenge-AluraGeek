const datos = document.querySelector("[data-form]");
const email = document.querySelector("[data-email]");
const password = document.querySelector("[data-password]");
const button = document.querySelector("#Login__button");

document.addEventListener("DOMContentLoaded", () => {
  datos.addEventListener("submit", (event) => {
    event.preventDefault();
    const errorMsj = document.querySelector(".login__message-error");
    const emailData = email.value;
    const passwordData = password.value;

    if (emailData.lenght > 0 && passwordData.lenght > 0) {
      return true;
    } else {
      errorMsj.style.display = "block";
    }
  });
});

form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      console.log("submit");
      console.log(email.value, "--", password.value);
      const users = await usuarioServicios.getUsuarios();
      users.forEach(({ name, email, password, id }) => {
        console.log(name, "--", email, "--", password, "--", id);
  
        if (email === email.value && password === password.value) {
          window.location.href = "/screens/index.html";
        } else if ("admin@admin.com" === email.value && "admin" === password.value) {
          window.location.href = "/screens/index.html";
        } else {
          console.log("usuario  y contraseña no registrados");
        }
      });
    } catch (error) {
      console.log("Ocurrio un error", error);
    }
  });

 