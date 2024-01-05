var jogadores = [
    { nome: "Emmanoel", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Lucas Lider", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Cainan", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Kaique", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Paloma", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Lucas Cabeludo", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Lucas Altao", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Israel", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Gustavo", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Felipe", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Diego", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Marcos", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Antonio", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Cauan", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
    { nome: "Ewerton", vitoria: 0, empate: 0, derrota: 0, pontos: 0},
];
  
var elementoTabela = document.getElementById("tabelaJogadores");
  
exibirNaTela();
  
function exibirNaTela() {
    ordenarPorPontos();

    var tabelaHTML = "";

    for (var i = 0; i < jogadores.length; i++){
        var jogador = jogadores[i];

        tabelaHTML += `
            <tr>
                <td>${jogador.nome}</td>
                <td>${jogador.vitoria}</td>
                <td>${jogador.empate}</td>
                <td>${jogador.derrota}</td>
                <td>${jogador.pontos}</td>
                <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
                <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
                <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
            </tr>
        `;
    }
    elementoTabela.innerHTML = tabelaHTML;
}

function ordenarPorPontos() {
    jogadores.sort(function(a, b) {
        return b.pontos - a.pontos;
    });
}

function adicionarVitoria(i) {
    jogadores[i].vitoria++;
    jogadores[i].pontos += 3;
    exibirNaTela();
}
  
function adicionarEmpate(i) {
    jogadores[i].empate++;
    jogadores[i].pontos++;
    exibirNaTela();
}
  
function adicionarDerrota(i) {
    jogadores[i].derrota++;
    exibirNaTela();
}
  