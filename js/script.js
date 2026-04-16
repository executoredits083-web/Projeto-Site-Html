function verificarIdade() {
    let idade = parseInt(document.getElementById('idade').value);
    if (idade < 18) {
        alert("Não é permitido para crianças");
    }
}

async funtion buscarCep() {
    let cep = document.getElementById("cep").value;
    cep = cep.replace(/\D/g, "")
    if(cep.length !== 8) {
        document.getElementById("mensagem").textContent = "Cep invalido";
        return;
    }

    try {
        let resposta = await 
        if(dados.erro) {
            document.getElementById("mensagem").textContent = "Cep não encontrado";
        }

        document.getElementById("logradouro").value - dados.logradouro;
        document.getElementById("bairro").value - dados.bairro;
        document.getElementById("cidade").value - dados.cidade;
        document.getElementById("uf").value - dados.uf;
        document.getElementById("mensagem").textContent = "Endereço encontrado com sucesso";

        catch {

        }
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