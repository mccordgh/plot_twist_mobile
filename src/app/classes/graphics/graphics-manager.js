import gameConstants from "../../constants/game-constants";

export class GraphicsManager {
  constructor(){
    this.initializeCanvas();
    this.initializeGraphics();
    this.customizeContext();
  }

  initializeCanvas(){
    this.canvas = document.querySelector('#canvas');

    this.canvas.setAttribute('height', gameConstants.GAME_HEIGHT);
    this.canvas.setAttribute('width', gameConstants.GAME_WIDTH);
  }

  initializeGraphics(){
    this.graphics = this.canvas.getContext('2d');

    // use small pixel images in a large pixel setting
    this.graphics.webkitImageSmoothingEnabled = false;
    this.graphics.ImageSmoothingEnabled = false;
  }

  customizeContext(){
    CanvasRenderingContext2D.prototype.myDrawImage = (asset, x, y, height = gameConstants.SPRITE_HEIGHT, width = gameConstants.SPRITE_WIDTH) => {
      this.graphics.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, x, y, height, width);
    };

    CanvasRenderingContext2D.prototype.drawText = (text, x, y, color = 'white', s = gameConstants.FONT_SIZE) => {
      this.graphics.font = s + 'px Arial';
      this.graphics.fillStyle = color;
      this.graphics.fillText(text,  x, y);
    };
  }

  getGraphics(){
    return this.graphics;
  }

  getCanvas(){
    return this.canvas;
  }
}

