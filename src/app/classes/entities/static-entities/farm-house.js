import { StaticEntity } from './static-entity';
import gameConstants from '../../../constants/game-constants';
import { Assets } from '../../assets/assets';

export class FarmHouse extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.height = 368;
        this.width = 100;
        this.health = 2000;
        this.maxHealth = this.health;

        this.bounds.x = 0;
        this.bounds.y = 0;
        this.bounds.width = this.width;
        this.bounds.height = this.height;

        this.type = gameConstants.TYPES.HOUSE;

        this.assets = Assets.getAssets('house');
    }

    tick() {
        if (this.health <= 0) {
            this.handler.getEntityManager().removeEntity(this);
            // dead
        }
    }

    render(graphics) {
        // graphics.fillStyle = 'red';
        // graphics.fillRect(this.x, this.y, this.width, this.height);
        graphics.drawSprite(this.assets.house, this.x, this.y, this.height, this.width);

        graphics.drawText(`HOUSE HEALTH: ${this.health} / ${this.maxHealth}`, 20, 50);
        // ****** DRAW BOUNDING BOX
        // graphics.fillStyle = "blue";
        // graphics.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
        // ****** DRAW BOUNDING BOX
    }
}