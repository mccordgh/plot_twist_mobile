import { StaticEntity } from './static-entity';
import gameConstants from '../../../constants/game-constants';

export class Lane extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.width = 480;
        this.height = gameConstants.SPRITE_HEIGHT;

        this.type = gameConstants.TYPES.LANE;
    }

    tick(dt) {
        //
    }

    render(graphics) {
        graphics.fillStyle = 'orange';
        graphics.fillRect(this.x, this.y + (this.height / 2), this.width, (Math.round(this.height / 2.5)));
    }
}
