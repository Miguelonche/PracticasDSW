function ParOImpar() {
    var numero = parseInt(document.getElementById("numeroInput").value);

    var resultado;
    if (numero % 2 === 0) {
        resultado = "El número " + numero + " es par.";
    } else {
        resultado = "El número " + numero + " es impar.";
    }
    document.getElementById("resultado").innerText = resultado;
}
