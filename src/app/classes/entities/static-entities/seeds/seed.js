import { StaticEntity } from '../static-entity';

import gameConstants from '../../../../constants/game-constants';

export class Seed extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.x = x;
        this.y = y;
        this.height = gameConstants.PLOT_HEIGHT;
        this.width = gameConstants.PLOT_WIDTH;

        this.gestationLength = gameConstants.FPS * 2;
        this.gestationCounter = 0;
    }

    static getDisplayName() {
        throw new Error('Hero must have a "getDisplayName()" method!');
    }

    tick(dt) {
       this.gestationCounter += 1;

       if (this.gestationCounter >= this.gestationLength) {
            this.handler.getHeroManager().spawnHeroAt(this.hero, this.x, this.y);
            this.handler.getEntityManager().removeEntity(this);
       //     Is this the best place to empty the plot state? What's the best place to access it here? Should we hold this logic in the plot instead?
       }
    }

    render(graphics) {
        graphics.drawSprite(this.assets, this.x, this.y, this.height, this.width);

        // ****** DRAW BOUNDING BOX
        // graphics.fillStyle = "purple";
        // graphics.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
        // ****** DRAW BOUNDING BOX
    }
}