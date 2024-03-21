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
      artista: "Artista 3",
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

