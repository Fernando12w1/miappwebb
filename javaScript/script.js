function mostrarPresentacion() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const artista = document.getElementById("artista").value;
    const comida = document.getElementById("comida").value;
    const musica = document.getElementById("musica").value;

    let generacion;

    if (edad >= 60) {
        generacion = "Baby Boomer";
    } else if (edad >= 44) {
        generacion = "Generacion X";
    } else if (edad >= 34) {
        generacion = "Millenial";
    } else if (edad >= 13) {
        generacion = "Generacion Z";
    } else {
        generacion = "Alpha"
    }

    const resultado = `
        <strong> Hola soy ${nombre} </strong><br>
        <strong> Tengo ${edad} años y pertenezco a la ${generacion}</strong>
        <br><br>
        Mi artista favorito es: <em>${artista}</em><br>
        Mi comida favorito es: <em>${comida}</em><br>
        Mi musica favorito es: <em>${musica}</em><br>
    `;

    document.getElementById("resultado").innerHTML = resultado;
}