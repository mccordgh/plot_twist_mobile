export class SeedManager {
    constructor(handler) {
        this.handler = handler;
    }

    createSeed(seed, plot) {
        this.handler.getEntityManager().addEntity(
            new seed(this.handler, plot),
        );
    }

    spawnSeedAt(seed, x, y) {
        this.createSeed(seed, x, y);
    }

    spawnSeedAtPlot(seed, plot) {
        this.createSeed(seed, plot);
    }
}