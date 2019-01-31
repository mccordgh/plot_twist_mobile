import { Entity } from "../entity";
import { Rectangle } from '../collision/rectangle';

import gameConstants from "../../../constants/game-constants";

export class Creature extends Entity {
    constructor(handler, x, y, width, height) {
        super(handler, x, y, width, height);

        this.speed = gameConstants.CREATURE_SPEED;
        this.xMove = 0;
        this.yMove = 0;
    }

    move() {
        if (Math.abs(this.xMove) > 0 || Math.abs(this.yMove) > 0) {
          this.handler.getWorld().getSpatialGrid().remove(new Rectangle(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height), this);

        if (!(this.checkEntityCollisions(this.xMove, 0))) {
            this.x += this.xMove;
        }

        // if (!(this.checkEntityCollisions(0, this.yMove))) {
        //     this.y += this.yMove;
        // }

        this.handler.getWorld().getSpatialGrid().insert(new Rectangle(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height), this);
        }
    }

    // moveX() {
    //     let tempX = this.xMove > 0
    //       ? parseInt((this.x + this.xMove + this.bounds.x + this.bounds.width) / gameConstants.SPATIAL_GRID_SIZE)
    //       : parseInt((this.x + this.xMove + this.bounds.x) / gameConstants.SPATIAL_GRID_SIZE);

    //     let collision1 = parseInt((this.y + this.bounds.y) / gameConstants.SPATIAL_GRID_SIZE);
    //     let collision2 = parseInt((this.y + this.bounds.y + this.bounds.height) / gameConstants.SPATIAL_GRID_SIZE);

    //     let setX = this.xMove > 0
    //       ? tempX * gameConstants.SPATIAL_GRID_SIZE - this.bounds.x - this.b.width - 1
    //       : tempX * gameConstants.SPATIAL_GRID_SIZE + gameConstants.SPATIAL_GRID_SIZE - this.bounds.x;

    //       if(!this.collisionWithTile(tempX, collision1) && !this.collisionWithTile(tempX, collision2)) {
    //     this.x += this.xMove;
    //       } else {
    //         if (this.type == 'g') this.changeDirection();
    //         this.x = setX;
    //       }
    //     }

    // moveY() {
    //     let tempY = this.yMove > 0
    //     ? parseInt((this.y + this.yMove + this.bounds.y + this.b.height) / gameConstants.SPATIAL_GRID_SIZE)
    //     : parseInt((this.y + this.yMove + this.bounds.y) / gameConstants.SPATIAL_GRID_SIZE);

    //     let collision1 = parseInt((this.x + this.bounds.x) / gameConstants.SPATIAL_GRID_SIZE);
    //     let collision2 = parseInt((this.x + this.bounds.x + this.b.width) / gameConstants.SPATIAL_GRID_SIZE);

    //     let setY = this.yMove > 0
    //     ? tempY * gameConstants.SPATIAL_GRID_SIZE - this.bounds.y - this.b.height - 1
    //     : tempY * gameConstants.SPATIAL_GRID_SIZE + gameConstants.SPATIAL_GRID_SIZE - this.bounds.y;

    //     if (!this.collisionWithTile(collision1, tempY) && !this.collisionWithTile(collision2, tempY)) {
    //     this.y += this.yMove;
    //     } else {
    //     if (this.type == 'g') this.changeDirection();
    //     this.y = setY;
    //     }
    // }
}