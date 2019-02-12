import gameConstants from "../../../../constants/game-constants";
import { Skeleton } from './skeleton';

export class MonsterManager {
    constructor(handler) {
        this.handler = handler;
    }

    spawnMonster(monster = Skeleton) {
        const lanes = this.handler.getEntityManager().getEntitiesByType(gameConstants.TYPES.LANE);
        const lane = gameConstants.rndIndex(lanes);

        this.handler.getEntityManager().addEntity(
            new monster(this.handler, gameConstants.GAME_WIDTH, lane.y),
        );
    }
}