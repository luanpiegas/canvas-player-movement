import './style.css'

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const player = {
  playerPositionX: 0,
  playerPositionY: 0,
  sprite: 'down',
  drawPlayer: () => {
    
    let playerSprite = new Image();
    playerSprite.src = `img/${player.sprite}.png`;
    playerSprite.addEventListener('load', function(x, y) {
      x = player.playerPositionX;
      y = player.playerPositionY;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(playerSprite, x, y);
    });
  }
}

function gameLoop() {
  requestAnimationFrame(gameLoop);
  player.drawPlayer('down');

  document.body.addEventListener('keydown', function(key) {
    switch(key.code){
      case "ArrowUp":
        player.playerPositionY -= 0.05
        player.sprite = 'up'
      break;
      case "ArrowRight":
        player.playerPositionX += 0.05
        player.sprite = 'right'
      break;
      case "ArrowDown":
        player.playerPositionY += 0.05
        player.sprite = 'down'
      break;
      case "ArrowLeft":
        player.playerPositionX -= 0.05
        player.sprite = 'left'
      break;
    }
  })
}

gameLoop();