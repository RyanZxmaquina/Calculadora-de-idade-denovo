function verificarIdade() {

    var idade = parseInt(document.getElementById("Idade_Atual").value);

    var nome = document.getElementById("nome").value

    if (nome >= 0) {

        console.log("replace");
        document.getElementById("nome").value = "incorreto";

    }

    if (idade <= 11) {
        document.getElementById("resultado").innerHTML = nome + " Você é uma criança";

    }

    else if (idade >= 12 && idade <= 20) {
        document.getElementById("resultado").innerHTML = nome + " Você é um Adolescente";

    }

    else if (idade >= 21 && idade <= 65) {
        document.getElementById("resultado").innerHTML = nome + " Parabéns você pode se considerar um adulto";

    }

    else if (idade >= 65 && idade <= 20000) {
        document.getElementById("resultado").innerHTML = nome + " Você pode se considerar um idoso";
    }

}