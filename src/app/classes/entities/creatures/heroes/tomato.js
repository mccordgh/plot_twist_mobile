import {Hero} from "./hero";
import {Assets} from "../../../assets/assets";

export class Tomato extends Hero {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.health = 400;
    this.width = 80;
    this.height = 80;
    this.baseAttack = 3;

    const boundsX = Math.floor(this.width / 4);
    this.bounds = {
      x: this.width - boundsX,
      y: 0,
      width: boundsX,
      height: this.height,
    };

    this.assets = Assets.getAssets('tomato').tomato;
  }

  static getDisplayName() {
    return 'Tominator';
  }
}