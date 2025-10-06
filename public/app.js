const receitas = [
  { id: 1, titulo: "Receita 1", descricao: "Bolo de chocolate delicioso", imagem: "https://picsum.photos/id/101/600/400" },
  { id: 2, titulo: "Receita 2", descricao: "Salada refrescante", imagem: "https://picsum.photos/id/102/600/400" },
  { id: 3, titulo: "Receita 3", descricao: "Massa caseira", imagem: "https://picsum.photos/id/103/600/400" },
  { id: 4, titulo: "Receita 4", descricao: "Sobremesa de frutas vermelhas", imagem: "https://picsum.photos/id/104/600/400" },
  { id: 5, titulo: "Receita 5", descricao: "Frango grelhado com legumes", imagem: "https://picsum.photos/id/108/600/400" },
  { id: 6, titulo: "Receita 6", descricao: "Panquecas fofinhas", imagem: "https://picsum.photos/id/106/600/400"},
];


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

if (window.location.pathname.includes('detalhes.html')) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const receita = receitas.find(r => r.id === id);


  if (receita) {
    document.getElementById('titulo').textContent = receita.titulo;
    document.getElementById('descricao').textContent = receita.descricao;
    document.getElementById('imagem').src = receita.imagem;
  }
}


