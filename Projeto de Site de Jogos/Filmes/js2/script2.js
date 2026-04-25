// função para verificar idade
function verificarIdade() {
    let idade = parseInt(document.getElementById("idade").value);
    if (idade < 18){
        alert("Para viajar sozinho, é necessário ser maior de idade");
    }
}

async function buscarCep() {
    let cep = document.getElementById('cep').value;
    cep = cep.replace(/\D/g, "");

    if(cep.length !== 8){
        document.getElementById("mensagem"). textcontent = "Cep invalido";
        return;
    }

    try{
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await resposta.json();
        if(dados.erro){
            document.getElementById("mensagem"). textcontent = "Cep nao encontrado";
        }

        document.getElementById("logradouro").value = dados. logradouro;
        document.getElementById("bairro").value = dados. bairro;
        document.getElementById("cidade").value = dados. cidade;
        document.getElementById("uf").value = dados. uf;
        document.getElementById("mensagem").textContent = "Endereço encontrado com sucesso";
        } catch(erro) {
            document.getElementById("mensagem").textContent = "Erro ao buscar cep";
        }
}

function enviarFormulario(event){
    // a linha abaixo impede o recarregamento da página
    event.preventDefault();
    // capturar os dados do formulário    
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    // selecionar uma div para exibir o resultado
    let resultado = document.getElementById("resultado");

    // exibindo na tela
    resultado.innerHTML = `
        <div class='card p-3 mt-3'>
          <h4> Dados do cadastro </h4>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Idade:</strong> ${idade}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
    `;
}