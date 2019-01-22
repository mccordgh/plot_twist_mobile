import { SpriteSheet } from './sprite-sheet';
import { ImageLoader } from "./image-loader";

import gameConstants from '../../constants/game-constants';

const assets = {};

export class Assets {
    constructor (name, path) {
        assets[name] = this;
        this.name = name;
        this.path = path;
        // this.height = gameConstants.SPRITE_HEIGHT
        // this.width = gameConstants.SPRITE_WIDTH;
        this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
    }

    static getAssets(name) {
        return assets[name];
    }
}

const cursor = new Assets('cursor', `${gameConstants.BASE_PATH}src/resources/cursor.png`);
cursor.pointer = cursor.sheet.crop(0, 0, 28, 32);

const skeleton = new Assets('skeleton', `${gameConstants.BASE_PATH}src/resources/single_skeleton.png`);
skeleton.skeleton = skeleton.sheet.crop(0, 0, 32, 64);

const house = new Assets('house', `${gameConstants.BASE_PATH}src/resources/single_house.png`);
house.house = house.sheet.crop(0, 0, 100, 368);