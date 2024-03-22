// Código JavaScript para tocar músicas, criar playlists e gerenciar a biblioteca musical
// Objeto para armazenar as músicas
const musicas = [
    {
      nome: "Loucura",
      artista: "Borges",
      album: "Álbum 1",
      url: "msc/Loucura.mp3"
    },
    {
      nome: "LET'S GO 4",
      artista: "MC IG",
      album: "Álbum 2",
      url: "msc/Letsgo4.mp3"
    },
    {
      nome: "Música 3",
      artista: "MC Davi",
      album: "Álbum 3",
      url: "msc/Pagodeiro2.mp3"
    }
  ];
  
let audioElement = null; // Elemento de áudio atual

// Função para tocar uma música
function tocarMusica(musica) {
  
  // Pare a música tocando atualmente (se houver)
  if (audioElement) {
    audioElement.pause();
  }
  
  // Crie um novo elemento de áudio
  audioElement = new Audio(musica.url);
  
  
  // Atualize a interface com as informações da música tocada
  const playerInfo = document.querySelector(".player");
  playerInfo.querySelector("h2").textContent = musica.nome;
  playerInfo.querySelector("p:nth-child(2)").textContent = musica.artista;
  playerInfo.querySelector("p:nth-child(3)").textContent = musica.album;

  // Adicione eventos para controlar a reprodução
  audioElement.addEventListener("play", () => {
    document.querySelector(".play").style.display = "none";
    document.querySelector(".pause").style.display = "inline";
  });
  audioElement.addEventListener("pause", () => {
    document.querySelector(".play").style.display = "inline";
    document.querySelector(".pause").style.display = "none";
  });
  audioElement.addEventListener("ended", () => {
    audioElement = null; // Limpa o elemento de áudio atual
    // Opcional: tocar a próxima música da lista
  });

  // Toque a música
  audioElement.play();
}

// Funções para controlar a reprodução (pause, stop)
function pausarMusica() {
  if (audioElement) {
    audioElement.pause();
  }
}

function pararMusica() {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0; // Reinicia o tempo de reprodução
  }
}

// Selecione os botões de controle na interface
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const stopButton = document.querySelector(".stop");

// Adicione eventos aos botões de controle
playButton.addEventListener("click", () => tocarMusica(musicas[0])); // Exemplo: toca a primeira música
pauseButton.addEventListener("click", pausarMusica);
stopButton.addEventListener("click", pararMusica);  


const playlists = [];

function criarPlaylist(nome, descricao) {
  const novaPlaylist = {
    nome,
    descricao,
    musicas: []
  };
  playlists.push(novaPlaylist);
  // Atualizar a interface para mostrar a nova playlist
}

function adicionarMusicaPlaylist(musica, nomePlaylist) {
  const playlist = playlists.find(p => p.nome === nomePlaylist);
  if (playlist) {
    playlist.musicas.push(musica);
    // Atualizar a interface para mostrar a música adicionada na playlist
  }
}

const playlistsElement = document.querySelector(".playlists ul");
playlists.forEach(playlist => {
  const playlistItem = document.createElement("li");
  playlistItem.textContent = playlist.nome;
  // Adicionar eventos para mostrar/editar/remover a playlist

  playlistsElement.appendChild(playlistItem);
});

function carregarBiblioteca() {
  // Utilize APIs de arquivos ou bancos de dados locais para carregar as músicas
  // Crie objetos JavaScript para cada música com informações como nome, artista, álbum e URL
  // Armazene as músicas em um array ou objeto para facilitar a manipulação

  // Atualize a interface para mostrar a biblioteca de músicas
}

function filtrarMusicas(termo) {
  // Utilize a função `filter` do JavaScript para filtrar as músicas pelo termo de pesquisa
  // Exiba apenas as músicas que correspondem ao filtro na interface

  // Opcional: implemente filtros adicionais por artista, álbum e gênero
}

function adicionarMusicaBiblioteca(musica) {
  // Utilize APIs de arquivos ou bancos de dados locais para adicionar a música
  // Atualize a interface para mostrar a música adicionada na biblioteca

  // Opcional: mostre uma mensagem de sucesso
}

function removerMusicaBiblioteca(musica) {
  // Utilize APIs de arquivos ou bancos de dados locais para remover a música
  // Atualize a interface para remover a música da biblioteca

  // Opcional: mostre uma mensagem de confirmação
}

const bibliotecaElement = document.querySelector(".biblioteca ul");
musicas.forEach(musica => {
  const musicaItem = document.createElement("li");
  musicaItem.textContent = musica.nome;
  // Adicionar eventos para tocar, adicionar à playlist, remover da biblioteca

  bibliotecaElement.appendChild(musicaItem);
});