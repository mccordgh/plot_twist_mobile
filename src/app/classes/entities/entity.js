import {Rectangle} from "./collision/rectangle";
import gameConstants from "../../constants/game-constants";

export class Entity{
  constructor(handler, x, y, width, height){
    this.handler = handler;
    this.x = x;
    this.y = y;
    this.width = gameConstants.SPRITE_WIDTH;
    this.height = gameConstants.SPRITE_HEIGHT;

    this.bounds= new Rectangle(0, 0, this.width, this.height);
  }

  getCollisionBounds(xOffset, yOffset){
    const x = parseInt(this.x + this.bounds.x + xOffset, 10);
    const y = parseInt(this.y + this.bounds.y + yOffset, 10);

    return new Rectangle(x, y, this.bounds.width, this.bounds.height);
  }
}