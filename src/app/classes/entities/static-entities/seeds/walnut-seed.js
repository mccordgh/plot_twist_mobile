import { Assets } from '../../../assets/assets';
import { Seed } from './seed';
import { Walnut } from '../../creatures/heroes/walnut';

export class WalnutSeed extends Seed {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.assets = Assets.getAssets('walnutSeed').walnutSeed;
        this.hero = Walnut;
    }

    static getDisplayName() {
        return 'Walnuts';
    }
}