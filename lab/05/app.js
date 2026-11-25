const LIMITE = 100;
let itens = [];

const inputNome = document.querySelector("#nome");
const inputPreco = document.querySelector("#preco");
const inputQuantidade = document.querySelector("#quantidade");
const btnAdicionar = document.querySelector("#btn-adicionar");
const btnDesfazer = document.querySelector("#btn-desfazer");
const btnLimpar = document.querySelector("#btn-limpar");

const mensagemEl = document.querySelector("#mensagem");
const qtdItensEl = document.querySelector("#qtd-itens");
const totalEl = document.querySelector("#total");
const saldoEl = document.querySelector("#saldo");
const descontoEl = document.querySelector("#desconto");
const statusEl = document.querySelector("#status-orcamento");
const listaEl = document.querySelector("#lista");

function atualizarTela() {
  listaEl.innerHTML = "";
  let total = 0;

  for (const item of itens) {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    const li = document.createElement("li");
    li.textContent = `${item.nome} (${item.quantidade}x) — R$ ${subtotal.toFixed(2)}`;
    listaEl.appendChild(li);
  }

  qtdItensEl.textContent = itens.length;
  totalEl.textContent = `R$ ${total.toFixed(2)}`;
  saldoEl.textContent = `R$ ${(LIMITE - total).toFixed(2)}`;

  if (total > LIMITE) {
    statusEl.textContent = "Orçamento estourado!";
    statusEl.classList.add("alerta");
  } else {
    statusEl.textContent = "Dentro do orçamento";
    statusEl.classList.remove("alerta");
  }

  if (total > 150) {
    const totalComDesconto = total * 0.9;
    descontoEl.textContent = `Desconto de 10% aplicado! Valor final: R$ ${totalComDesconto.toFixed(2)}`;
  } else {
    descontoEl.textContent = "";
  }
}

btnAdicionar.addEventListener("click", function () {
  const nome = inputNome.value.trim();
  const preco = Number(inputPreco.value);
  const quantidade = Number(inputQuantidade.value);

  if (
    nome === "" ||
    preco <= 0 ||
    Number.isNaN(preco) ||
    quantidade <= 0 ||
    Number.isNaN(quantidade)
  ) {
    mensagemEl.textContent = "Informe nome válido, preço e quantidade maiores que zero.";
    return;
  }

  mensagemEl.textContent = "";
  itens.push({ nome: nome, preco: preco, quantidade: quantidade });

  inputNome.value = "";
  inputPreco.value = "";
  inputQuantidade.value = "1";
  inputNome.focus();

  atualizarTela();
});

btnDesfazer.addEventListener("click", function () {
  itens.pop();
  atualizarTela();
});

btnLimpar.addEventListener("click", function () {
  itens = [];
  mensagemEl.textContent = "";
  atualizarTela();
});

atualizarTela();
