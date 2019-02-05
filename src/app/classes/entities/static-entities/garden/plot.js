import { StaticEntity } from '../static-entity';
import gameConstants from '../../../../constants/game-constants';

export class Plot extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.height = gameConstants.SPRITE_HEIGHT;
        this.width = gameConstants.SPRITE_WIDTH;
    }

    tick() {
        //
    }

    render(graphics) {
        graphics.fillStyle = 'pink';
        graphics.fillRect(this.x, this.y, this.width, this.height);
    }
}