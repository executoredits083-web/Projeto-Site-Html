function VerificarIdade() {
    let idade = parseInt(document.getElementById('idade').value);
    if (idade < 18) {
        alert("Não é permitido para crianças");
    }
}