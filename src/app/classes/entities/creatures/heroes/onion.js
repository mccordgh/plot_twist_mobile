import { Assets } from '../../../assets/assets';
import { Hero } from './hero';

export class Onion extends Hero {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.health = 400;
    this.baseAttack = 3;

    this.assets = Assets.getAssets('onion').onion;
  }

  static getDisplayName() {
    return 'Onion Knight';
  }
}