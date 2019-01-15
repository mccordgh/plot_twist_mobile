import { Entity } from '../entity';

export class StaticEntity extends Entity {
    constructor(handler, x, y) {
        super(handler, x, y);
    }

    takeDamage(amount) {
        this.health -= amount;
    }
}
