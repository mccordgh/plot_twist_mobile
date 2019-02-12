import gameConstants from "../../../../constants/game-constants";
import { Hero } from "./hero";

export class HeroManager {
    constructor(handler) {
        this.handler = handler;
    }

    spawnHero() {
        const lanes = this.handler.getEntityManager().getEntitiesByType(gameConstants.TYPES.LANE);
        const lane = gameConstants.rndIndex(lanes);

        this.createHero(150, lane.y)
    }

    createHero(x, y) {
        this.handler.getEntityManager().addEntity(
            new Hero(this.handler, x, y),
        );
    }

    spawnHeroAt(x, y) {
        this.createHero(x, y);
    }
}