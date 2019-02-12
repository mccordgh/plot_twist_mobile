export class HeroManager {
    constructor(handler) {
        this.handler = handler;
    }

    // spawnHero() {
    //     const lanes = this.handler.getEntityManager().getEntitiesByType(gameConstants.TYPES.LANE);
    //     const lane = gameConstants.rndIndex(lanes);

    //     this.createHero(150, lane.y)
    // }

    createHero(hero, x, y, ) {
        this.handler.getEntityManager().addEntity(
            new hero(this.handler, x, y),
        );
    }

    spawnHeroAt(hero, x, y) {
        this.createHero(hero, x, y);
    }
}