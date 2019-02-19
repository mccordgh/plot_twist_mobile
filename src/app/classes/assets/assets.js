import { Animation } from './animation';
import { ImageLoader } from "./image-loader";
import { SpriteSheet } from './sprite-sheet';

import gameConstants from '../../constants/game-constants';

const assets = {};

export class Assets {
    constructor (name, path) {
        assets[name] = this;
        this.name = name;
        this.path = `${gameConstants.ASSETS_PATH}/${path}`;
        this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
        this.animations = {};
    }

    static getAssets(name) {
        return assets[name];
    }

    addAnimation(name, animation) {
        this.animations[name] = animation;
    }
}

const createAnimationFor = (asset, name, data) => {
    data.frames = [];

    for (let i = data.col; i < (data.length + data.col); i += 1) {
        data.frames.push({
            frame: asset.sheet.crop(
                data.width * i, data.height * data.row, data.width, data.height
            ),
            speed: data.speed,
        });
    }

    asset.addAnimation(name, new Animation(data.frames));
}

/* CURSOR */
const cursor = new Assets('cursor', 'cursor.png');
cursor.pointer = cursor.sheet.crop(0, 0, 28, 32);


/* MONSTERS */
const skeleton = new Assets('skeleton', 'zombie_n_skeleton2.png');
createAnimationFor(skeleton, 'walk_left', {
    speed: 200,
    row: 1,
    col: 6,
    length: 3,
    width: 32,
    height: 64,
});

/* SEEDS */
const walnutSeed = new Assets('walnutSeed', 'walnut_seed.png');
walnutSeed.walnutSeed = walnutSeed.sheet.crop(0, 0, gameConstants.PLOT_WIDTH, gameConstants.PLOT_HEIGHT);

const potatoSeed = new Assets('potatoSeed', 'potato_seed.png');
potatoSeed.potatoSeed = potatoSeed.sheet.crop(0, 0, gameConstants.PLOT_WIDTH, gameConstants.PLOT_HEIGHT);

const tomatoSeed = new Assets('tomatoSeed', 'tilesets/plants.png');
tomatoSeed.tomatoSeed = tomatoSeed.sheet.crop(6*32, 32, 32, 32);

const onionSeed = new Assets('onionSeed', 'tilesets/plants.png');
onionSeed.onionSeed = onionSeed.sheet.crop(5*32, 32, 32, 32);


/* HEROES */
const walnut = new Assets('walnut', 'walnut_dude-sheet.png');
createAnimationFor(walnut, 'walk_right', {
    speed: 200,
    row: 0,
    col: 0,
    length: 4,
    width: 32,
    height: 64,
});

const potato = new Assets('potato', 'potato-sheet.png');
createAnimationFor(potato, 'walk_right', {
    speed: 200,
    row: 0,
    col: 0,
    length: 4,
    width: 32,
    height: 64,
});

// 58w x 64h
const tomato = new Assets('tomato', 'tomato-sheet.png');
createAnimationFor(tomato, 'walk_right', {
    speed: 200,
    row: 0,
    col: 0,
    length: 4,
    width: 58,
    height: 64,
});

// 70w x 91h
const onion = new Assets('onion', 'heroes/knight.png');
createAnimationFor(onion, 'walk_right', {
    speed: 200,
    row: 2,
    col: 0,
    length: 8,
    width: 70,
    height: 91,
});


/* HOUSE */
const house = new Assets('house', 'single_house.png');
house.house = house.sheet.crop(0, 0, 100, 368);


/* LANDSCAPE */
const grass = new Assets('grass', 'tileset_preview.png');
grass.grass = grass.sheet.crop(19*32, 6*32, 32, 32)

const garden = new Assets('garden', 'tileset_preview.png');
garden.garden = garden.sheet.crop(11*32, 0, 32, 32);

const plot = new Assets('plot', "/tileset_preview.png");
plot.empty = plot.sheet.crop(4*32, 13*32, 32, 32);
plot.plowed = plot.sheet.crop(5*32, 13*32, 32, 32);
plot.seeded = plot.sheet.crop(3*32, 13*32, 32, 32);
plot.picked = plot.sheet.crop(9*32, 14*32, 32, 32);


/* UI */
const button = new Assets('button', 'ui/scrollsandblocks.png');
button.button = button.sheet.crop(32, 0, 2*32, 2*32);
button.pressedButton = button.sheet.crop(32, 32, 2*32, 2*32);
