import {EntityManager} from "../entities/entity-manager";
import {FarmHouse} from "../entities/static-entities/farm-house";
import {Garden} from "../entities/static-entities/garden";

export class World {
    constructor(handler){
        this.handler = handler;
        this.entityManager = handler.createEntityManager();
        this.loadEntities();
    }

    tick(deltaTime) {
        this.entityManager.tick(deltaTime)
    }

    render(graphics) {
        this.entityManager.render(graphics);
    }

    loadEntities(){
        this.entityManager.addEntity(new FarmHouse(this.handler, 0, 275))
        this.entityManager.addEntity(new Garden(this.handler, 101, 275))
    }
}