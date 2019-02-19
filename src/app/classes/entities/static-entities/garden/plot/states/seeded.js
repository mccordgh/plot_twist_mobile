export class SeededState {
    constructor(plot) {
        this.plot = plot;
    }

    init(seed) {
        this.plot.state = this;

        this.plot.handler.getSeedManager().spawnSeedAtPlot(seed, this.plot);
    }

    tick() {
        //
    }

    render(graphics) {
        graphics.drawSprite(this.plot.assets.seeded, this.plot.x, this.plot.y, this.plot.width, this.plot.height);
    }

}