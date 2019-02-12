import { Assets } from '../../../assets/assets';
import {Hero} from "./hero";

export class Walnut extends Hero {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.assets = Assets.getAssets('walnut');
  }

  static getDisplayName(){
    return 'Walnut';
  }
}