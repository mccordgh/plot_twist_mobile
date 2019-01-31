import { Entity } from '../entity';

export class StaticEntity extends Entity {
    constructor(handler, x, y) {
        super(handler, x, y);

        this.bounds = {
            x: 0, y: 0, width: 0, height: 0,
        };
    }

    takeDamage(amount) {
        this.health -= amount;
    }
}
