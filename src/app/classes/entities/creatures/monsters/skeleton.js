import { Assets } from '../../../assets/assets';
import { Monster } from './monster';

export class Skeleton extends Monster {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.baseAttack = 10;

        this.assets = Assets.getAssets('skeleton').skeleton;
    }
}