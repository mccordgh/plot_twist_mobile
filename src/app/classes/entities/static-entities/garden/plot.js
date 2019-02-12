import { StaticEntity } from '../static-entity';
import gameConstants from '../../../../constants/game-constants';

export class Plot extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.height = gameConstants.PLOT_HEIGHT;
        this.width = gameConstants.PLOT_WIDTH;

        this.type = gameConstants.TYPES.PLOT;
    }

    tick() {
        //
    }

    render(graphics) {
        graphics.fillStyle = 'pink';
        graphics.fillRect(this.x, this.y, this.width, this.height);

        /* PRINTS X AND Y COORDS */
        // graphics.drawText(this.x, this.x + 8, this.y + 20, 'black', 20);
        // graphics.drawText(this.y, this.x + 8, this.y + 50, 'black', 20);
        /* PRINTS X AND Y COORDS */
    }
}