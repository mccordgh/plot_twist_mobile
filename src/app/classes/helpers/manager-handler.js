import { MouseManager } from "../input/mouse-manager";
import { GraphicsManager } from "../graphics/graphics-manager";
import { EntityManager } from '../entities/entity-manager';
import { StateManager } from '../states/state-manager';
import { WorldOne } from '../worlds/world-one';
import { MonsterManager } from '../entities/creatures/monsters/monster-manager';
import { HeroManager } from '../entities/creatures/heroes/hero-manager';
import { UiManager } from '../entities/ui/ui-manager';

export class ManagerHandler {
    constructor(game) {
        this.game = game;

        this.entityManager = null;
        this.graphicsManager = null;
        this.monsterManager = null;
        this.mouseManager = null;
        this.stateManager = null;
        this.uiManager = null;
        this.world = null;
    }

    getEntityManager() {
        return this.entityManager;
    }

    getGame() {
        return this.game;
    }

    getGraphicsManager() {
        return this.graphicsManager;
    }

    getHeroManager() {
        return this.heroManager;
    }

    getMouseManager() {
        return this.mouseManager;
    }

    getUiManager() {
        return this.uiManager;
    }

    getWorld() {
        return this.world;
    }

    createEntityManager() {
        return this.entityManager = new EntityManager(this);
    }

    createGraphicsManager() {
        return this.graphicsManager = new GraphicsManager();
    }

    createMonsterManager() {
        return this.monsterManager = new MonsterManager(this);
    }

    createMouseManager() {
        return this.mouseManager = new MouseManager(this);
    }

    createHeroManager() {
        return this.heroManager = new HeroManager(this);
    }

    createStateManager() {
        return this.stateManager = new StateManager();
    }

    createUiManager() {
        return this.uiManager = new UiManager(this);
    }

    createWorld() {
        return this.world = new WorldOne(this);
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