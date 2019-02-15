
import { FarmHouse } from '../entities/static-entities/farm-house';
import { Garden } from '../entities/static-entities/garden/garden';
import gameConstants from '../../constants/game-constants';
import { SpatialGrid } from '../entities/collision/spatial-grid';
import { WalnutSeed } from '../entities/static-entities/seeds/walnut-seed';
import { PotatoSeed } from '../entities/static-entities/seeds/potato-seed';
import {TomatoSeed} from "../entities/static-entities/seeds/tomato-seed";

let counter = 0;

export class WorldOne {
    constructor(handler) {
        this.handler = handler;
        this.entityManager = handler.createEntityManager();
        this.monsterManager = handler.createMonsterManager();
        this.heroManager = handler.createHeroManager();
        this.seedManager = handler.createSeedManager();
        this.uiManager = handler.createUiManager();

        this.spatialGrid = new SpatialGrid(
            gameConstants.GAME_WIDTH,
            gameConstants.GAME_HEIGHT,
            gameConstants.SPATIAL_GRID_SIZE,
        );
    }

    loadEntities() {
        const ySpawn = 90;

        this.entityManager.addEntity(new FarmHouse(this.handler, 0, ySpawn));
        this.entityManager.addEntity(Garden.create(this.handler, 101, ySpawn));

        //TODO: Make Player object to track stats/upgrades/heroes/etc
        const availableSeeds = [WalnutSeed, PotatoSeed, TomatoSeed];

        this.uiManager.createButtonsFromSeeds(availableSeeds);
    }

    tick(deltaTime) {
        counter++;

        if (counter >= (gameConstants.FPS)) {
            counter = 0;

            this.monsterManager.spawnMonster();
        }

        this.entityManager.tick(deltaTime);
    }

    render(graphics) {
        this.drawBackground(graphics);

        // this.spatialGrid.render(graphics);
        this.entityManager.render(graphics);
    }

    init() {
        this.loadEntities();
    }

    drawBackground(graphics) {
        graphics.fillStyle = 'green';
        graphics.fillRect(0, 0, gameConstants.GAME_WIDTH, gameConstants.GAME_HEIGHT);
    }


    getSpatialGrid() {
        return this.spatialGrid;
    }
}