import { Assets } from '../../../assets/assets';
import { Seed } from './seed';
import { Potatank } from '../../creatures/heroes/potato';

export class PotatoSeed extends Seed {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.assets = Assets.getAssets('potatoSeed').potatoSeed;
        this.hero = Potatank;
    }

    static getDisplayName() {
        return 'Potatoes';
    }
}