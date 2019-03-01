import { Assets } from '../../../assets/assets';
import { Monster } from './monster';

export class Zombie extends Monster {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.baseAttack = 20;

    this.assets = Assets.getAssets('zombie');
  }

  getAnimationFrame() {
    return this.assets.animations['walk_left'].getCurrentFrame();
  }
}
