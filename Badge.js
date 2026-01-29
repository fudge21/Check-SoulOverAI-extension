

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



function ShowWarningBadge(width, selector) {

const Placement = document.querySelector(selector);

if (!Placement) {
    console.log("Screwed up");
    return;
}
const alreadyThere = document.querySelector('.ai-warning-badge')
if (alreadyThere) {
    console.log("Already told em");
    return;
}


  const container = document.createElement('div');
  container.className = 'ai-warning-container';
  container.style.position = 'relative';
  container.style.display = 'inline-block';
  container.style.margin = '0 auto';




const badge = document.createElement('img');
badge.className = 'ai-warning-badge';
badge.src = chrome.runtime.getURL('ArtistUsesAI.png');

badge.style.width = width;
//badge.style.height = '50px';
badge.style.display = 'block';
badge.style.margin = '0 auto';
badge.style.zIndex = '9999';

badge.style.filter = 'sepia(1) hue-rotate(-50deg) saturate(5) brightness(1) drop-shadow(0 0 15px rgba(255, 0, 0, 0.8)) drop-shadow(0 0 30px rgba(255, 0, 0, 0.5))';
badge.style.animation = 'glow-pulse 2s ease-in-out infinite';

container.appendChild(badge);
container.addEventListener('mouseenter', () => {
    showPopup(container, badge)
});

container.addEventListener('mouseleave', () => {
    hidePopup()
});

Placement.parentElement.insertBefore(container, Placement.nextSibling);

console.log("Should be there");


}







function RemoveWarningBadge() {
    const badge = document.querySelector('.ai-warning-badge');

    if (badge) {
        badge.remove();
        console.log("Badge removed");
    }
}


function showPopup(container, badge) {


    const rect = badge.getBoundingClientRect();


    const popup = document.createElement('div');
    popup.className = "ai-popup";
    popup.textContent = "important stuff here one day";

    popup.style.position = 'absolute';
    popup.style.left = '0px';
    popup.style.right = '0px';
    popup.style.background = '#ff611d';
    popup.style.color = "white";
    popup.style.padding = '20px';
    popup.style.borderRadius = '8px';
    popup.style.zIndex = '10000';


    popup.style.bottom = '0px';
     

    container.appendChild(popup);
    console.log('is it there?');

}



function hidePopup() {
  const popup = document.querySelector('.ai-popup');
  if (popup) {
    popup.remove();
    console.log("Popup hidden");
  }
}

