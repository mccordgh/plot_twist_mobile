export class EmptyState {
    constructor(plot) {
        this.plot = plot;
    }

    tick() {
        //
    }

    render(graphics) {
        graphics.drawSprite(this.plot.assets.empty, this.plot.x, this.plot.y, this.plot.width, this.plot.height);
    }

}