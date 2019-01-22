import { Assets } from '../../../assets/assets';
import { Creature } from '../creature';

import gameConstants from '../../../../constants/game-constants';

export class Monster extends Creature {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.handler = handler;
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 64;
        this.damage = 4;

        const head = this.height / 4;

        this.bounds = {
            x: 0,
            y: head,
            width: this.width,
            height: (this.height - head),
        };

        this.assets = Assets.getAssets('skeleton');

        this.type = gameConstants.TYPES.MONSTER;
    }

    tick(dt) {
        this.xMove = -this.speed * dt;

        this.move();
    }

    render(graphics) {
        graphics.drawSprite(this.assets.skeleton, this.x, this.y, this.height, this.width);
        // graphics.fillStyle = 'purple';
        // graphics.fillRect(this.x, this.y, this.width, this.height);

        // ****** DRAW BOUNDING BOX
        // graphics.fillStyle = "limegreen";
        // graphics.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
        // ****** DRAW BOUNDING BOX
    }
}