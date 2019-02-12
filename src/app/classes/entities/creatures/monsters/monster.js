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
        this.baseAttack = 4;

        const boundsX = Math.floor(this.width/4);

        this.bounds = {
            x: 0,
            y: 0,
            width: boundsX,
            height: this.height,
        };

        this.type = gameConstants.TYPES.MONSTER;
    }

    tick(dt) {
        if (this.x < (-this.width * 3)) {
            // we've gone off the left side of the screen so destroy self
            this.handler.getEntityManager().removeEntity(this);
        }

        this.xMove = -this.speed * dt;

        this.move();
    }

    render(graphics) {
        graphics.drawSprite(this.assets, this.x, this.y, this.height, this.width);
        // graphics.fillStyle = 'purple';
        // graphics.fillRect(this.x, this.y, this.width, this.height);

        // ****** DRAW BOUNDING BOX
        // graphics.fillStyle = "limegreen";
        // graphics.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
        // ****** DRAW BOUNDING BOX
    }
}