import { StaticEntity } from '../static-entity';
import gameConstants from '../../../../constants/game-constants';
import {Assets} from "../../../assets/assets";

export class Plot extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.height = gameConstants.PLOT_HEIGHT;
        this.width = gameConstants.PLOT_WIDTH;

        this.type = gameConstants.TYPES.PLOT;

        this.state = gameConstants.PLOT_STATE.EMPTY;

        this.assets = {
          empty:Assets.getAssets('emptyPlot').emptyPlot,
          plowed:Assets.getAssets('plowedPlot').plowedPlot,
          seeded:Assets.getAssets('seededPlot').seededPlot,
          picked:Assets.getAssets('pickedPlot').pickedPlot
        }
    }

    tick() {
        // I feel like we should hold some of the growing seed's function in the plot as well as the seed
    }

    sownBy(seed){
      switch(this.state){
        case gameConstants.PLOT_STATE.EMPTY:
          this.state=gameConstants.PLOT_STATE.PLOWED;
          break;
        case gameConstants.PLOT_STATE.PLOWED:
          this.handler.getSeedManager().spawnSeedAt(seed, this.x, this.y);
          this.state = gameConstants.PLOT_STATE.SEEDED;
          //  Ask Matt how to fix this later.
          setTimeout(() => this.state=gameConstants.PLOT_STATE.PICKED, 2000);
          break;
        case gameConstants.PLOT_STATE.PICKED:
          this.state = gameConstants.PLOT_STATE.EMPTY;
          break;
        default:
          break;
      }
    }

    render(graphics) {
        graphics.drawSprite(this.assets[this.state], this.x, this.y, this.height, this.width);
        /* PRINTS X AND Y COORDS */
        // graphics.drawText(this.x, this.x + 8, this.y + 20, 'black', 20);
        // graphics.drawText(this.y, this.x + 8, this.y + 50, 'black', 20);
        /* PRINTS X AND Y COORDS */
    }
}