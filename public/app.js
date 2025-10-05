const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const item = receitas.find(r => r.id === id);

if(item) {
  document.getElementById('titulo').textContent = item.titulo;
  document.getElementById('descricao').textContent = item.descricao;
  document.getElementById('imagem').src = item.imagem;
}
