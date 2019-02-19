import { Assets } from '../../../assets/assets';
import { Seed } from './seed';
import { Potato } from '../../creatures/heroes/potato';
import {Onion} from "../../creatures/heroes/onion";

export class OnionSeed extends Seed {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.assets = Assets.getAssets('onionSeed').onionSeed;
    this.hero = Onion;
  }

  static getDisplayName() {
    return ' Onion';
  }
}