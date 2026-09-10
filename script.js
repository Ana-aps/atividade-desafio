const depoimentos = [
    {
        nome: "João",
        texto: "Entrega super rápida, recomendo demais!",
        foto: "img/joao.png"
    },
    {
        nome: "Maria",
        texto: "A pizza chegou quentinha e estava deliciosa!",
        foto: "img/maria.jpg"
    },
    {
        nome: "Pedro",
        texto: "Muito saborosa e com ingredientes de qualidade!",
        foto: "img/pedro.jpg"
    }
];

let indiceAtual = 0;

const foto = document.getElementById("fotoDepoimento");
const texto = document.getElementById("textoDepoimento");
const nome = document.getElementById("nomeDepoimento");

function mostrarDepoimento() {
    foto.src = depoimentos[indiceAtual].foto;
    texto.innerText = `"${depoimentos[indiceAtual].texto}"`;
    nome.innerText = depoimentos[indiceAtual].nome;
}

document.getElementById("proximo").addEventListener("click", function () {
    indiceAtual++;

    if (indiceAtual >= depoimentos.length) {
        indiceAtual = 0;
    }

    mostrarDepoimento();
});

document.getElementById("anterior").addEventListener("click", function () {
    indiceAtual--;

    if (indiceAtual < 0) {
        indiceAtual = depoimentos.length - 1;
    }

    mostrarDepoimento();
});

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.querySelector('input[name="nome"]').value.trim();
    const telefone = document.querySelector('input[name="telefone"]').value.trim();
    const endereco = document.querySelector('input[name="endereco"]').value.trim();
    const sabor = document.querySelector('select[name="sabor"]').value;
    const pagamento = document.querySelector('input[name="pagamento"]:checked');

    if (nome === "" || telefone === "" || endereco === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    const telefoneNumeros = telefone.replace(/\D/g, "");

    if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
        alert("Digite um telefone válido.");
        return;
    }

    if (sabor === "") {
        alert("Escolha um sabor de pizza.");
        return;
    }

    if (!pagamento) {
        alert("Escolha uma forma de pagamento.");
        return;
    }

    window.location.href = "obrigado.html";
});