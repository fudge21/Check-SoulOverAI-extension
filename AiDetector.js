
let artistNames = [];

fetch("https://raw.githubusercontent.com/xoundbyte/soul-over-ai/main/dist/artists.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    
    artistNames = data.map(artist => artist.name.toLowerCase());
    console.log(artistNames);
  
  });


  function isAIArtist(artistName) {
    const LowerCaseName = artistName.toLowerCase();

    return artistNames.includes(LowerCaseName);
    
  }


setTimeout(() => {
  console.log("Is '88DS' an AI artist?", isAIArtist("88DS"));
  console.log("Is 'Taylor Swift' AI?", isAIArtist("Taylor Swift"));
}, 2000);






