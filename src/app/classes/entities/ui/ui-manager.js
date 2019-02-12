import { EntityManager } from "../entity-manager";
import gameConstants from "../../../constants/game-constants";
import { UiEntity } from './ui-entity';

export class UiManager {
    constructor(handler) {
        this.handler = handler;
    }

    createHeroButtonsFromHeroes(heroes) {
        const button = { x: 101, width: 160, height: 80 };

        heroes.forEach((hero) => {
            this.handler.getEntityManager().addEntity(new UiEntity(
                this.handler, button.x, gameConstants.GAME_HEIGHT - button.height - 6, button.width, button.height, hero
            ));
        })
    }
}
