import gameConstants from "../../../constants/game-constants";
import {UiEntity} from "./ui-entity";

export class UiManager{
    constructor(handler){
        this.handler = handler;

        this.styles={
         width: 160,
         height: 80
        }

        this.startingX = 101;
    }

    createHeroButtonsFromHeroes(heroes){
        heroes.forEach((hero, index) => {
            this.handler.getEntityManager().addEntity(new UiEntity(
                this.handler, this.startingX + (index * this.styles.width), gameConstants.GAME_HEIGHT - this.styles.height - 6, this.styles.width, this.styles.height, hero
            ))
        })
    }

    toggleElement(element){
        const uiElements = this.handler.getEntityManager().getEntitiesByType(gameConstants.TYPES.UI);
        uiElements.forEach(uiElement => {
            uiElement.active = false;
        })
        element.active = true;
    }
}
