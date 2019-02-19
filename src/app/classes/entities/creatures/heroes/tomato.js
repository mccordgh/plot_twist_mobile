import {Hero} from "./hero";
import {Assets} from "../../../assets/assets";

export class Tomato extends Hero {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.health = 400;
    this.width = 80;
    this.height = 80;
    this.baseAttack = 3;

    this.assets = Assets.getAssets('tomato');

    this.setDefaultBounds();
  }

  static getDisplayName() {
    return 'Tominator';
  }
}