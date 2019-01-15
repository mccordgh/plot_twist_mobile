import { MouseManager } from "../input/mouse-manager";
import { GraphicsManager } from "../graphics/graphics-manager";
import {EntityManager} from "../entities/entity-manager";
import {StateManager} from "../states/state-manager";

export class ManagerHandler {
    constructor(game) {
        this.game = game;

        this.graphicsManager = null;
        this.mouseManager = null;
        this.entityManager = null;
    }

    getGame() {
        return this.game;
    }

    getGraphicsManager() {
        return this.graphicsManager;
    }

    getMouseManager() {
        return this.mouseManager;
    }

    setEntityManager(entityManager){
        this.entityManager = entityManager;
    }

    createEntityManager(){
        return this.entityManager = new EntityManager();
    }

    createStateManager(){
        return this.stateManager = new StateManager();
    }

    createGraphicsManager(){
        return this.graphicsManager = new GraphicsManager();
    }

      createMouseManager(){
        return this.mouseManager = new MouseManager(this);
      }

  event(type, data){
        if(type==='click'){
          this.entityManager.mouseClick(data)
        } else if(type==='move'){
          this.entityManager.mouseMove(data)
        }

    }
}