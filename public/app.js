const receitas = [
  { id: 1, titulo: "Receita 1", descricao: "Bolo de chocolate delicioso", imagem: "https://picsum.photos/id/101/600/400" },
  { id: 2, titulo: "Receita 2", descricao: "Salada refrescante", imagem: "https://picsum.photos/id/102/600/400" },
  { id: 3, titulo: "Receita 3", descricao: "Massa caseira", imagem: "https://picsum.photos/id/103/600/400" },
  { id: 4, titulo: "Receita 4", descricao: "Sobremesa de frutas vermelhas", imagem: "https://picsum.photos/id/104/600/400" }
];

// Parte 1: cria cards dinâmicos na home
if (window.location.pathname.includes('index.html')) {
  const container = document.getElementById('cards-container');
  receitas.forEach(r => {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4';
    card.innerHTML = `
      <div class="receita">
        <a href="detalhes.html?id=${r.id}">
          <img src="${r.imagem}" alt="${r.titulo}" class="img-fluid">
        </a>
        <h3>${r.titulo}</h3>
        <p>${r.descricao}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

