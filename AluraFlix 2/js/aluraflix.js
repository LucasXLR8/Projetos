var filmes = JSON.parse(localStorage.getItem('filmes')) || []; // Vetor para armazenar os filmes adicionados

  function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value;
    var trailerFilme = document.getElementById('trailer').value;
    var filme = {
      imagem: filmeFavorito,
      trailer: trailerFilme
    };
    filmes.push(filme); // Adiciona o filme ao Vetor filmes

    renderizarFilmes(); // Chama a função para renderizar os filmes na tela

    document.getElementById('filme').value = '';
    document.getElementById('trailer').value = '';

    localStorage.setItem('filmes', JSON.stringify(filmes)); // Salva os filmes no localStorage
  }

  function renderizarFilmes() {
    var elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML = '';

    for (var i = 0; i < filmes.length; i++) {
      var filme = filmes[i];
      var imagemFilme = '<a href="' + filme.trailer + '" target="_blank"><img src="' + filme.imagem + '"></a>';
      elementoListaFilmes.innerHTML += imagemFilme;
    }
  }

  renderizarFilmes(); // Chama a função para renderizar os filmes na tela ao carregar a página