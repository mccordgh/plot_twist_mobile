import { Assets } from '../../../assets/assets';
import { Seed } from './seed';
import { Potato } from '../../creatures/heroes/potato';
import {Tomato} from "../../creatures/heroes/tomato";

export class TomatoSeed extends Seed {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.assets = Assets.getAssets('tomatoSeed').tomatoSeed;
    this.hero = Tomato;
  }

  static getDisplayName() {
    return 'Tominator';
  }
}