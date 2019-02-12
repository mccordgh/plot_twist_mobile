
import { FarmHouse } from '../entities/static-entities/farm-house';
import { Garden } from '../entities/static-entities/garden/garden';
import gameConstants from '../../constants/game-constants';
import { SpatialGrid } from '../entities/collision/spatial-grid';
import { Walnut } from '../entities/creatures/heroes/walnut';
import { Potatank } from '../entities/creatures/heroes/potato';

let counter = 0;

export class WorldOne {
    constructor(handler) {
        this.handler = handler;
        this.entityManager = handler.createEntityManager();
        this.monsterManager = handler.createMonsterManager();
        this.heroManager = handler.createHeroManager();
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
        const availableHeros = [Walnut, Potatank];

        this.uiManager.createHeroButtonsFromHeroes(availableHeros);
    }

    tick(deltaTime) {
        counter++;

        if (counter >= (gameConstants.FPS * 2)) {
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