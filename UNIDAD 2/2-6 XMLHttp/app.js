document.getElementById("btn1").addEventListener("click", cargarDatosConFetch);

function cargarDatosConFetch() {

    fetch("https://api.chucknorris.io/jokes/random")
        .then(respuesta => respuesta.json())
        .then(datos => {
            document.getElementById("resp").innerHTML = datos.value;
        })

}


$(document).ready(function () {
    $("#btn2").click(cargarDatosConJQuery);
});

function cargarDatosConJQuery() {
    $.get("https://api.chucknorris.io/jokes/random", function (datos) {
        $("#resp").html(datos.value);
    });
}