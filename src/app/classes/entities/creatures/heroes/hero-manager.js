import gameConstants from "../../../../constants/game-constants";
import { Walnut } from './walnut';

export class HeroManager {
  constructor(handler) {
    this.handler = handler;
  }

  spawnMonster() {
    const lanes = this.handler.getEntityManager().getEntitiesByType(gameConstants.TYPES.LANE);
    const lane = gameConstants.rndIndex(lanes);

    this.handler.getEntityManager().addEntity(
      new Walnut(this.handler, gameConstants.GAME_WIDTH, lane.y),
    );
  }
}