import { Assets } from '../../../assets/assets';
import { Hero } from './hero';

export class Onion extends Hero {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.health = 400;
    this.baseAttack = 3;

    this.width = 70;
    this.height = 91;

    this.assets = Assets.getAssets('onion');

    this.setDefaultBounds();
  }

  static getDisplayName() {
    return ' Onion';
  }
}