// Fundación Universitaria Konrad Lorenz
// Desarrollo De Nuevas Tecnologías
// Ejercicio Javascript
// Author: dg2c4
// Date: 2025-02-22


// Función para crear nuevo título
function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML += '<h1>' + texto + '</h1>';
}


// Función para crear nuevo enlace
function nuevoEnlace() {
    var contenido = document.getElementById('contenido');
    var url = prompt("Ingrese la URL del enlace:");
    var texto = prompt("Ingrese el texto del enlace:");

    if (url && texto) {
        contenido.innerHTML += '<a href="' + url + '" target="_blank">' + texto + '</a><br>';
    } else {
        alert("Debe ingresar ambos valores.");
    }
}


// Función para crear nuevo párrafo
function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML += '<p>' + texto + '</p>';
}



// Función para crear nuevo video
function imprimir() {
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}


// Función para una nueva imagen
function nuevaImagen() {
    var inputFile = document.getElementById('imagen');
    var contenido = document.getElementById('contenido');
    if (inputFile.files.length > 0) {
        var file = inputFile.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.createElement("img");
            img.setAttribute('src', e.target.result);
            img.setAttribute('width', '200px');
            img.setAttribute('height', '180px');
            contenido.appendChild(img);
        }
        reader.readAsDataURL(file);
    } else {
        alert("Seleccione un archivo de imagen.");
    }
}
