
console.log("loaded on youtube music!")


chrome.storage.local.get('aiArtist', (result) => {
    const artistNames = result.aiArtist || [];
    console.log("Loaded", artistNames.length, "AI artists from storage");

    function checkSong() {
    const artistElement = document.querySelector('.subtitle.ytmusic-player-bar a')

    if (artistElement) {
        const artist = artistElement.textContent.trim();

        const isAI = artistNames.includes(artist.toLowerCase());
        

        console.log("Is AI?", isAI)
    } else {
        console.log("Artist element not found");
    }
    }



setInterval(checkSong, 3000);
});