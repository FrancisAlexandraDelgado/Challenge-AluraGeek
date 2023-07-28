
const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida.validacion(input.target);
  });
});

function validación(input) {
    const tipoDeInput = input.dataset.tipo;
        if(validadores[tipoDeInput] ){
            validadores[tipoDeInput](input);
        }
        if (input.validity.valid){
            input.parentElement.classList.remove("input-container--invalid");
            inputparentElement.querySelector(".input-menssage-error").innerHTML="";

        } else{
            input.parentElement.classList.add("input-container--invalid")
            inputparentElement.querySelector(".input-menssage-error").innerHTML = 
                mostrarMensajeDeError(tipoDeInput,input);
                console.log(mostrarMensajeDeError(tipoDeInput, input));
                input.parentElement.parentElement.querySelector(
                ".input-message-error"
                ).style.display = "block";
        }
};


const tipoErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismactch",

];
const mensajesDeError={
    nombre:{
        valueMissing:"Este campo nombre no puede estar vacio", 
		patternMismatch:  "Al menos 4 caracteres, Maximo 40",
    },

    mensaje:{
        valueMissing:"Este campo password no puede estar vacio",
        patternMismatch:"Al menos 4 caracteres, Maximo 120",
	},

    enlace: {
        valueMissing: "Este campo no puede estar vacio",
    },
    
    precio: {
        valueMissing: "Este campo no puede estar vacio",
    },
    
    categoria: {
        valueMissing: "Este campo no puede estar vacio",
    },
    
    descripcion: {
        valueMissing: "Este campo no puede estar vacio",
    },

    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido",
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch:"Al menos 6 caracteres , maximo 12, no puede contener carateres especiales",
    },
};


function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje="";
    tipoErrores.forEach( (error) =>{
        if (input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;

}



