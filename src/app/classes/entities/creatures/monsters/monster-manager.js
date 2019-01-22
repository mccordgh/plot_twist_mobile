import gameConstants from "../../../../constants/game-constants";
import { Monster } from './monster';

export class MonsterManager {
    constructor(handler) {
        this.handler = handler;
    }

    spawnMonster() {
        const lanes = this.handler.getEntityManager().getEntitiesByType(gameConstants.TYPES.LANE);
        const lane = gameConstants.rndIndex(lanes);

        this.handler.getEntityManager().addEntity(
            new Monster(this.handler, gameConstants.GAME_WIDTH, lane.y),
        );
    }
}