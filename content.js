
console.log("loaded on youtube music!")

const style = document.createElement('style');
style.textContent = `
  @keyframes glow-pulse {
    0% {
      filter: sepia(1) hue-rotate(-50deg) saturate(5) brightness(1) drop-shadow(0 0 15px rgba(255, 0, 0, 0.8)) drop-shadow(0 0 30px rgba(255, 0, 0, 0.5));
    }
    50% {
      filter: sepia(1) hue-rotate(-50deg) saturate(7) brightness(1.3) drop-shadow(0 0 25px rgba(255, 0, 0, 1)) drop-shadow(0 0 50px rgba(255, 0, 0, 0.8));
    }
    100% {
      filter: sepia(1) hue-rotate(-50deg) saturate(5) brightness(1) drop-shadow(0 0 15px rgba(255, 0, 0, 0.8)) drop-shadow(0 0 30px rgba(255, 0, 0, 0.5));
    }
  }
`;
document.head.appendChild(style);

chrome.storage.local.get('aiArtist', (result) => {
    const artistNames = result.aiArtist || [];
    console.log("Loaded", artistNames.length, "AI artists from storage");

    function checkSong() {
    const artistElement = document.querySelector('.subtitle.ytmusic-player-bar a')

    if (artistElement) {
        const artist = artistElement.textContent.trim();

        const isAI = artistNames.includes(artist.toLowerCase());
        

        console.log("Is AI?", isAI)
        
        if (isAI) {
             ShowWarningBadge();
        }else{
           RemoveWarningBadge();
           }


    } else {
        console.log("Artist element not found");
    }
    return isAI
    }



setInterval(checkSong, 3000);
});


function ShowWarningBadge() {

const Placement = document.querySelector('#left-controls > span');

if (!Placement) {
    console.log("Screwed up");
    return;
}
const alreadyThere = document.querySelector('.ai-warning-badge')
if (alreadyThere) {
    console.log("Already told em");
    return;
}

const badge = document.createElement('img');
badge.className = 'ai-warning-badge';
badge.src = chrome.runtime.getURL('ArtistUsesAI.png')

badge.style.width = '175px';
badge.style.height = '50px';
badge.style.display = 'block';
badge.style.margin = '0 auto';
badge.style.zIndex = '9999';


badge.style.animation = 'glow-pulse 2s ease-in-out infinite';


Placement.parentElement.insertBefore(badge, Placement.nextSibling);
console.log("Should be there");
}

function RemoveWarningBadge() {
    const badge = document.querySelector('.ai-warning-badge');

    if (badge) {
        badge.remove();
        console.log("Badge removed");
    }
}


