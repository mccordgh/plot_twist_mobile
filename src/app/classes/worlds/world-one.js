
import { FarmHouse } from '../entities/static-entities/farm-house';
import { Garden } from '../entities/static-entities/garden/garden';
import gameConstants from '../../constants/game-constants';
import { SpatialGrid } from '../entities/collision/spatial-grid';
import { WalnutSeed } from '../entities/static-entities/seeds/walnut-seed';
import { PotatoSeed } from '../entities/static-entities/seeds/potato-seed';
import {TomatoSeed} from "../entities/static-entities/seeds/tomato-seed";
import {Assets} from "../assets/assets";
import {OnionSeed} from "../entities/static-entities/seeds/onion-seed";
import {Zombie} from "../entities/creatures/monsters/zombie";

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
        const availableSeeds = [WalnutSeed, PotatoSeed, TomatoSeed, OnionSeed];

        this.uiManager.createButtonsFromSeeds(availableSeeds);
    }

    tick(deltaTime) {
        counter++;

        if (counter >= (gameConstants.FPS)) {
            counter = 0;

            if(Math.random()>=.7){
              this.monsterManager.spawnMonster(Zombie);
            } else {
              this.monsterManager.spawnMonster();
            }
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
       // Tiles background
       const assetSize = 32
      for(let i =0; i <= gameConstants.GAME_WIDTH; i+=assetSize){
          for(let j=0; j<= gameConstants.GAME_HEIGHT; j+=assetSize){
            graphics.drawSprite(this.assets = Assets.getAssets('grass').grass, i, j, assetSize, assetSize);
          }
      }
    }


    getSpatialGrid() {
        return this.spatialGrid;
    }
}