import { Assets } from "../../../../assets/assets";
import { EmptyState } from './states/empty';
import { SeededState } from './states/seeded';
import { StaticEntity } from '../../static-entity';

import gameConstants from '../../../../../constants/game-constants';

export class Plot extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.height = gameConstants.PLOT_HEIGHT;
        this.width = gameConstants.PLOT_WIDTH;

        this.type = gameConstants.TYPES.PLOT;

        this.assets = { ...Assets.getAssets('plot') };

        this.states = {
          EMPTY: new EmptyState(this),
          PLOWED: 'plowed',
          SEEDED: new SeededState(this),
          GROWN: 'grown',
          PICKED: 'picked',
          PLAGUED: 'plagued',
          TRAMPLED: 'trampled',
      };

        this.state = this.states.EMPTY;
    }

    tick() {
        this.state.tick();
    }

    sownBy(seed) {
        if (this.state === this.states.SEEDED) {
            return;
        }

        this.states.SEEDED.init(seed);
      // this.states.SEEDED.init();
      // switch(this.state){
      //   case gameConstants.PLOT_STATE.EMPTY:
      //     this.state=gameConstants.PLOT_STATE.PLOWED;
      //     break;
      //   case gameConstants.PLOT_STATE.PLOWED:
      //     this.handler.getSeedManager().spawnSeedAt(seed, this.x, this.y);
      //     this.state = gameConstants.PLOT_STATE.SEEDED;
      //     //  Ask Matt how to fix this later.
      //     setTimeout(() => this.state=gameConstants.PLOT_STATE.PICKED, 2000);
      //     break;
      //   case gameConstants.PLOT_STATE.PICKED:
      //     this.state = gameConstants.PLOT_STATE.EMPTY;
      //     break;
      //   default:
      //     break;
      // }
    }

    render(graphics) {
        this.state.render(graphics);

        /* PRINTS X AND Y COORDS */
        // graphics.drawText(this.x, this.x + 8, this.y + 20, 'black', 20);
        // graphics.drawText(this.y, this.x + 8, this.y + 50, 'black', 20);
        /* PRINTS X AND Y COORDS */
    }
}