import gameConstants from '../../constants/game-constants'
import {ImageLoader} from "./image-loader";
import {SpriteSheet} from "./sprite-sheet";

const assets = {};

export class Assets {
  constructor(name, path){
    assets[name] = this;
    this.name = name;
    this.path = path;
    this.width = gameConstants.SPRITE_WIDTH;
    this.height = gameConstants.SPRITE_HEIGHT;
    this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path))
  }

  static getAssets(name){
    return assets[name];
  }
}


let cursor = new Assets('cursor', `${gameConstants.BASE_PATH}src/resources/cursor.png`);
cursor.pointer = cursor.sheet.crop(0,0,28,32);
console.log(cursor)