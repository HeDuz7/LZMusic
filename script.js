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
  
  // Função para tocar uma música
  function tocarMusica(musica) {
    // Utilize a API `Audio` do JavaScript para tocar a música
    const audio = new Audio(musica.url);
    audio.play();
}
  
    // Atualize a interface com as informações da música
  