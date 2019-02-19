export class HeroManager {
    constructor(handler) {
        this.handler = handler;
    }

    spawnHeroAt(hero, x, y) {
        this.handler.getEntityManager().addEntity(
            new hero(this.handler, x, y),
        );
    }

    spawnHeroAtPlot(plot) {
        const newHero = new plot.hero(this.handler, plot.x, plot.y);

        this.handler.getEntityManager().addEntity(newHero);
    }
}