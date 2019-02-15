import { SpriteSheet } from './sprite-sheet';
import { ImageLoader } from "./image-loader";

import gameConstants from '../../constants/game-constants';

const path = `${gameConstants.BASE_PATH}src/resources`;
const assets = {};

export class Assets {
    constructor (name, path) {
        assets[name] = this;
        this.name = name;
        this.path = path;
        this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
    }

    static getAssets(name) {
        return assets[name];
    }
}

/* CURSOR */
const cursor = new Assets('cursor', `${path}/cursor.png`);
cursor.pointer = cursor.sheet.crop(0, 0, 28, 32);


/* MONSTERS */
const skeleton = new Assets('skeleton', `${path}/single_skeleton.png`);
skeleton.skeleton = skeleton.sheet.crop(0, 0, 32, 64);


/* SEEDS */
const walnutSeed = new Assets('walnutSeed', `${path}/walnut_seed.png`);
walnutSeed.walnutSeed = walnutSeed.sheet.crop(0, 0, gameConstants.PLOT_WIDTH, gameConstants.PLOT_HEIGHT);

const potatoSeed = new Assets('potatoSeed', `${path}/potato_seed.png`);
potatoSeed.potatoSeed = potatoSeed.sheet.crop(0, 0, gameConstants.PLOT_WIDTH, gameConstants.PLOT_HEIGHT);

/* HEROES */
const walnut = new Assets('walnut', `${path}/walnut_dude.png`);
walnut.walnut = walnut.sheet.crop(0, 0, 32, 64);

const potato = new Assets('potato', `${path}/potato.png`);
potato.potato = potato.sheet.crop(0, 0, 32, 64);


/* HOUSE */
const house = new Assets('house', `${path}/single_house.png`);
house.house = house.sheet.crop(0, 0, 100, 368);