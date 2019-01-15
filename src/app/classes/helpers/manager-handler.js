import { MouseManager } from "../input/mouse-manager";
import { GraphicsManager } from "../graphics/graphics-manager";
import { EntityManager } from '../entities/entity-manager';
import { StateManager } from '../states/state-manager';

export class ManagerHandler {
    constructor(game) {
        this.game = game;

        this.entityManager = null;
        this.graphicsManager = null;
        this.stateManager = null;
        this.mouseManager = null;
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

    createEntityManager() {
        return this.entityManager = new EntityManager(this);
    }

    createGraphicsManager() {
        return this.graphicsManager = new GraphicsManager();
    }

    createMouseManager() {
        return this.mouseManager = new MouseManager(this);
    }

    createStateManager() {
        return this.stateManager = new StateManager();
    }

    event(type, data) {
        if (type === 'click') {
            this.entityManager.mouseClick(data);
        }

        if (type === 'move') {
            this.entityManager.mouseMove(data);
        }
    }
}