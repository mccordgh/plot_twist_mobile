import { Assets } from '../../../assets/assets';
import { Hero } from './hero';

export class Walnut extends Hero {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.health = 200;
        this.baseAttack = 6;

        this.assets = Assets.getAssets('walnut');

        this.setDefaultBounds();
    }

    static getDisplayName() {
        return 'walnut';
    }
}