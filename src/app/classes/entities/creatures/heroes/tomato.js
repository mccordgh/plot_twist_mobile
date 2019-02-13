import { Assets } from '../../../assets/assets';
import {Hero} from "./hero";

export class Tomato extends Hero {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.assets = Assets.getAssets('tomato').tomato;
  }

  static getDisplayName(){
    return 'Tominator';
  }
}