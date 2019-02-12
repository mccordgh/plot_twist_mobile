import {Monster} from "./monster";
import {Assets} from "../../../assets/assets";

export class Skeleton extends Monster{
  constructor(handler, x, y) {
    super(handler, x, y);

    this.baseAttack = 10;

    this.assets = Assets.getAssets('skeleton').skeleton;
  }
}