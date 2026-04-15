function verificarIdade() {
    let idade = parseInt(document.getElementById('idade').value);
    if (idade < 18) {
        alert("Não é permitido para crianças");
    }
}

function enviarFormulario(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("destino").value;
    let dtIda = document.getElementById("dataIda").value;
    let dtVolta = document.getElementById("dataVolta").value;

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <div class="card p-3 mt-3">
    <h4> Dados dp cadastro </h4>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Idade:</strong> ${idade}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <p><strong>Destino:</strong> ${destino}</p>
    <p><strong>Data da Ida:</strong> ${dtIda}</p>
    <p><strong>Data da Volta:</strong> ${dtVolta}</p>`;
}