function pedirNombre () {
   return prompt('Ingrese el nombre de su libro').toLowerCase();   
}

let libro = pedirNombre();

function pedirPaginas() {
    return parseInt(prompt('Ingrese la cantidad de páginas'));
}

let paginas = pedirPaginas();

const hora = 50;

function obtenerDificultad (libro) {
    
    let dificultad = 0;
    
    switch (libro) {

        case "el principito":
            dificultad = 1.0;
            break;
        case "el psicoanalista":
            dificultad = 1.8;
            break;
        case "la biblia":
            dificultad = 2.2;
            break;
        case "los tres chanchitos":
            dificultad = 1.2;
            break;    
        default:
            alert("El libro solicitado no se encuentra en nuestra base de datos");
    }
    return dificultad;
}

let dificultad = obtenerDificultad(libro);

function calcularTiempo(paginas, hora, dificultad) {
    return ((paginas/hora)*dificultad).toFixed(2);
}

alert("El tiempo de lectura de " + libro + " es de " + calcularTiempo(paginas, hora, dificultad) + " horas" );