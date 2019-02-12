export class SeedManager {
  constructor(handler) {
    this.handler = handler;
  }

  createSeed(seed, x, y) {
    this.handler.getEntityManager().addEntity(
      new seed(this.handler, x, y),
    );
  }

  spawnSeedAt(seed, x, y) {
    this.createSeed(seed, x, y);
  }
}