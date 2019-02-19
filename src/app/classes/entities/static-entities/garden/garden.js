import { StaticEntity } from '../static-entity';
import { Plot } from './plot/plot';
import gameConstants from '../../../../constants/game-constants';
import { Lane } from '../lane';
import { Rectangle } from '../../collision/rectangle';
import {Assets} from "../../../assets/assets";

export class Garden extends StaticEntity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.rows = 4;
        this.columns = 3;
        this.padding = {
            horizontal: 16,
            vertical: 32,
        };

        this.height = (gameConstants.PLOT_HEIGHT * this.columns) + (this.padding.vertical * (this.columns + 1));
        this.width = (gameConstants.PLOT_WIDTH * this.rows) + (this.padding.horizontal * (this.rows + 1));

        this.bounds = {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        };

        this.plots = [];

        this.type = gameConstants.TYPES.GARDEN;
    }

    static create(handler, x, y) {
        const garden = new this(handler, x, y);

        garden.buildPlots();
        garden.createLanes();

        return garden;
    }

    wasClickedAt(x, y, activeUi) {
        if (!activeUi) {
            return;
        }

        const plot = this.findPlotAt(x, y);

        if (!plot) {
            return;
        }

        activeUi.activeAction(plot);
    }

    findPlotAt(x, y) {
        const fingerTangle = new Rectangle(
            x - (gameConstants.FINGER_WIDTH / 2),
            y - (gameConstants.FINGER_WIDTH / 2),
            gameConstants.FINGER_WIDTH,
            gameConstants.FINGER_WIDTH,
        );

        let foundPlot = null;

        for (let y = 0; y < this.plots.length; y += 1) {
            for (let x = 0; x < this.plots[y].length; x += 1) {
                const plotTangle = new Rectangle(
                    this.plots[y][x].x, this.plots[y][x].y, this.plots[y][x].width, this.plots[y][x].height
                );

                if (fingerTangle.intersects(plotTangle)) {
                    foundPlot = this.plots[y][x];
                }
            }
        }

        return foundPlot;
    }

    createLanes() {
        for (let y = 0; y < this.columns; y += 1) {
            const lane = new Lane(
                this.handler,
                this.x + this.width,
                this.y + (this.padding.vertical * (y + 1)) + (gameConstants.PLOT_HEIGHT * y)
            )

            this.handler.getEntityManager().addEntity(lane);
        }
    }

    buildPlots() {
        for (let y = 0; y < this.columns; y += 1) {
            this.plots[y] = [];

            for (let x = 0; x < this.rows; x += 1) {
                this.plots[y][x] = new Plot(
                    this.handler,
                    (this.x + (this.padding.horizontal * (x + 1))) + (gameConstants.PLOT_WIDTH * x),
                    (this.y + (this.padding.vertical * (y + 1))) + (gameConstants.PLOT_HEIGHT * y),
                );
            }
        }
    }

    drawPlots(graphics) {
        for (let y = 0; y < this.plots.length; y += 1) {
            for (let x = 0; x < this.plots[y].length; x += 1) {
                this.plots[y][x].render(graphics);
            }
        }
    }

    drawSelf(graphics) {
        graphics.fillStyle = 'brown';
        graphics.fillRect(this.x, this.y, this.width, this.height);
      const assetSize = 32
      for(let i =this.x; i < (this.width+this.x); i+=assetSize){
        for(let j=this.y; j < (this.height+this.y); j+=assetSize){
          graphics.drawSprite(this.assets = Assets.getAssets('garden').garden, i, j, assetSize, assetSize);
        }
      }
    }

    tick() {
        //
    }

    render(graphics) {
        this.drawSelf(graphics);
        this.drawPlots(graphics);
    }
}