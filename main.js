let libro = prompt('Ingrese el nombre de su libro').toLowerCase();
let paginas = parseInt(prompt('Ingrese la cantidad de páginas'));
let dificultad = 0;
let hora = 50;

switch (libro) {

    case "el principito":
        dificultad= 1.0;
        break;
    case "el psicoanalista":
        dificultad= 1.8;
        break;
    case "la biblia":
        dificultad = 2.2;
        break;
    case "los tres chanchitos":
        dificultad = 1.2;
        break;    
    default:
        alert("El libro solicitado no se encuentra en nuestra base de datos")
}

alert("El tiempo de lectura de " + libro + " es de " +(paginas/hora) * dificultad .toFixed(2) + " horas" );