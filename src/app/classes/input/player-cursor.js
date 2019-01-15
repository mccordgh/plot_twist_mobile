
import { Assets } from '../assets/assets';

export class PlayerCursor {
    constructor() {
        this.x = null;
        this.y = null;
        this.assets = Assets.getAssets('cursor');
    }

    render(graphics) {
        graphics.drawSprite(this.assets.pointer, this.x, this.y);
    }
}