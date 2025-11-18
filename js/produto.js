const params = new URLSearchParams(window.location.search);

const nome = params.get("nome");
const preco = params.get("preco");
const img = params.get("img");

// Coloca nos elementos
document.getElementById("produto-nome").textContent = nome;
document.getElementById("produto-preco").textContent = "R$ " + preco + ",00";
document.getElementById("produto-img").src = img;
