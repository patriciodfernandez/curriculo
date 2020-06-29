// function requerido() {
// let elemento = document.getElementById("nombre")
//     if (elemento.value != "") {
//         // el input tiene texto
//         elemento.className="form-control is-valid"
//     } else{
//         // el input esta vacio
//         elemento.className="form-control is-invalid"
//     }
// }
// al poner como ´parametro asd es como que creo un obj
function requerido(input) {
    // let elemento = document.getElementById("nombre")
    if (input.value != "") {
        // el input tiene texto
        input.className = "form-control is-valid"
        return true;
    } else {
        // el input esta vacio
        input.className = "form-control is-invalid"
        return false;
    }
}

function revisarEmail(input) {
    // patricio.dfernandez@gmail.com
    // texto <--- @ ----> texto ---> "." --> texto
    let expresion = /\w+@\w+\.[a-z]/;
    //     \w (es texto)
    //     \. (es punto)
    if (input.value != "" && expresion.test(input.value)) {
        input.className = "form-control is-valid"
        return true;
    } else {
        // el input esta vacio
        input.className = "form-control is-invalid"
        return false;
    }
}

function revisarNumeros(input) {
    if (input.value != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
        return true;
    } else {
        // el input esta vacio
        input.className = "form-control is-invalid";
        return false;
    }

}

function revisarConsulta(consulta) {
    if (consulta.value != "") {
        consulta.className = "form-control is-valid";
        return true;
    } else {
        consulta.className = "form-control is-invalid";
        return false;
    }

}
// agregar un evento
let checkTerminos = document.getElementById("terminos");

checkTerminos.addEventListener("change", revisarTerminos);

function revisarTerminos() {
    // checked propiedad del check.--- en el if es falso(ya q no esta tildado aun)
    if (checkTerminos.checked) {
        checkTerminos.className = "form-check-input is-valid";
        return true;
    } else {
        checkTerminos.className = "form-check-input is-invalid";
        return false;
    }
}

function validarGeneral(event) {
    event.preventDefault();
    console.log("Desde la funcion validar general" + event);
    if (requerido(document.getElementById("nombre")) &&
        revisarEmail(document.getElementById ("email")) &&
        revisarNumeros(document.getElementById("telefono")) &&
        revisarConsulta(document.getElementById("consulta")) &&
        revisarTerminos()) {
        alert("El formulario esta listo para ser enviado")
    } else {
        alert("Ocurrio un error")
    }

}