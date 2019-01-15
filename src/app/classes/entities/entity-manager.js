import { PlayerCursor } from '../input/player-cursor';

export class EntityManager {
    constructor(handler) {
        this.handler = handler;
        this.cursor = new PlayerCursor();
        this.entities = [];
    }

    tick(deltaTime) {
        //
    }

    render(graphics) {
        for (let i = 0; i < this.entities.length; i += 1) {
            this.entities[i].render(graphics);
        }

        if (this.cursor.x && this.cursor.y) {
            this.cursor.render(graphics);
        }
    }

    addEntity(entity) {
        this.entities.push(entity);
        // insert spatial grid here
    }

    mouseClick(data) {
        //
    }

    mouseMove(data) {
        this.cursor.x = data.x;
        this.cursor.y = data.y;
    }
}