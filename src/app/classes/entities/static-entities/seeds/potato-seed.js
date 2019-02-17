import { Assets } from '../../../assets/assets';
import { Seed } from './seed';
import { Potato } from '../../creatures/heroes/potato';

export class PotatoSeed extends Seed {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.assets = Assets.getAssets('potatoSeed').potatoSeed;
        this.hero = Potato;
    }

    static getDisplayName() {
        return 'Potatank';
    }
}