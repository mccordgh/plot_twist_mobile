import gameConstants from '../../../../constants/game-constants';
import {Creature} from "../creature";
import {StaticEntity} from "../static-entity";

export class Seed extends StaticEntity {
  constructor(handler, x, y) {
    super(handler, x, y);

    this.handler = handler;
    this.x = x;
    this.y = y;
    this.width = gameConstants.PLOT_WIDTH;
    this.height = gameConstants.PLOT_HEIGHT;

    this.gestationLength = gameConstants.FPS*2;
    this.gestationCounter = 0;
  }

  tick(dt) {
    // gestation period counting
    this.gestationCounter += 1;

    if(this.gestationCounter >= this.gestationLength){
      this.handler.getHeroManager().spawnHeroAt(this.hero, this.x, this.y);
      this.handler.getEntityManager().removeEntity(this);
    }
  }

  render(graphics) {
    graphics.drawSprite(this.assets, this.x, this.y, this.height, this.width);
    // graphics.fillStyle = 'purple';
    // graphics.fillRect(this.x, this.y, this.width, this.height);

    // ****** DRAW BOUNDING BOX
    // graphics.fillStyle = "purple";
    // graphics.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
    // ****** DRAW BOUNDING BOX
  }
}