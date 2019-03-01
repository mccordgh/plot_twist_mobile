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

// use object destructuring to create sensible defaults for forgotten/missed parameters
const createAnimationFor = (asset, name, {speed = gameConstants.CREATURE_ANIM_STATS.speed,
                                          row = gameConstants.CREATURE_ANIM_STATS.row,
                                          col = gameConstants.CREATURE_ANIM_STATS.col,
                                          length = gameConstants.CREATURE_ANIM_STATS.length,
                                          width = gameConstants.CREATURE_ANIM_STATS.width,
                                          height = gameConstants.CREATURE_ANIM_STATS.height,
                                          frames = [],
                                        } = {}) => {
    for (let i = col; i < (length + col); i += 1) {
        frames.push({
            frame: asset.sheet.crop(
                width * i, height * row, width, height
            ),
            speed,
        });
    }

    asset.addAnimation(name, new Animation(frames));
}

/* CURSOR */
const cursor = new Assets('cursor', 'cursor.png');
cursor.pointer = cursor.sheet.crop(0, 0, 28, 32);


/* MONSTERS */
const skeleton = new Assets('skeleton', 'zombie_n_skeleton2.png');
createAnimationFor(skeleton, 'walk_left', {
    row: 1,
    col: 6,
    length: 3,
});

const zombie = new Assets('zombie', 'zombie_n_skeleton2.png');
createAnimationFor(zombie, 'walk_left', {
  row: 1,
  col: 0,
  length: 3,
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
createAnimationFor(walnut, 'walk_right');

const potato = new Assets('potato', 'potato-sheet.png');
createAnimationFor(potato, 'walk_right');

// 58w x 64h
const tomato = new Assets('tomato', 'tomato-sheet.png');
createAnimationFor(tomato, 'walk_right', {width: 58});

// 70w x 91h
const onion = new Assets('onion', 'heroes/knight.png');
createAnimationFor(onion, 'walk_right', {
    row: 2,
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
