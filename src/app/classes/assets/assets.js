import { SpriteSheet } from './sprite-sheet';
import { ImageLoader } from "./image-loader";

import gameConstants from '../../constants/game-constants';

const path = `${gameConstants.BASE_PATH}src/resources`;
const assets = {};

export class Assets {
    constructor (name, path, cropArray = [0, 0, gameConstants.PLOT_WIDTH, gameConstants.PLOT_HEIGHT], type = name) {
        assets[name] = this;
        this.name = name;
        // TODO: should we change this to ${path}/ + path? It seems like we're repeating the path for every asset
        this.path = path;
        this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
        this[type] = this.sheet.crop(cropArray[0], cropArray[1], cropArray[2], cropArray[3])
    }

    static getAssets(name) {
        return assets[name];
    }
}

/* CURSOR */
const cursor = new Assets('cursor', `${path}/cursor.png`, [0, 0, 28, 32], 'pointer');

/* MONSTERS */
const skeleton = new Assets('skeleton', `${path}/single_skeleton.png`, [0, 0, 32, 64]);

/* SEEDS */
const walnutSeed = new Assets('walnutSeed', `${path}/walnut_seed.png`);
const potatoSeed = new Assets('potatoSeed', `${path}/potato_seed.png`);
const tomatoSeed = new Assets('tomatoSeed', `${path}/tilesets/plants.png`, [6*32, 32, 32, 32]);

/* HEROES */
const walnut = new Assets('walnut', `${path}/walnut_dude.png`, [0, 0, 32, 64]);
const potato = new Assets('potato', `${path}/potato.png`, [0, 0, 32, 64]);
const tomato = new Assets('tomato', `${path}/tomato.png`);

/* HOUSE */
const house = new Assets('house', `${path}/single_house.png`, [0, 0, 100, 368]);