  var numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
  var tentativas = 0;

  function verificarTentativa() {
    var tentativa = document.getElementById("tentativa").value;
    var mensagem = document.getElementById("mensagem");

    if (tentativa == numeroSecreto) {
      mensagem.textContent = "Parabéns, você acertou!";
      mensagem.classList.remove("erro");
      mensagem.classList.add("acerto");

    } else {
      tentativas++;
      if (tentativas >= 10) {
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        mensagem.textContent = "Você perdeu o jogo. Tente novamente!";
        mensagem.classList.remove("acerto");
        mensagem.classList.add("erro");
      } else {
        if (tentativa > numeroSecreto) {
          mensagem.textContent = "Errou... O número secreto é menor!";
        } else {
          mensagem.textContent = "Errou... O número secreto é maior!";
        }
        mensagem.classList.remove("acerto");
        mensagem.classList.add("erro");
      }
    }
  }   