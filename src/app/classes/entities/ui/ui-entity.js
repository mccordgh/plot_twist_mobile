// import { Assets } from '../../../assets/assets';
import { Entity } from '../entity';
import gameConstants from '../../../constants/game-constants';


export class UiEntity extends Entity {
    constructor(handler, x, y, width, height, hero) {
        super(handler, x, y, width, height, hero);

        this.handler = handler;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.hero = hero;

        this.bounds = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height,
        };

        this.text = hero.getDisplayName();
        this.active = false;
        this.type = gameConstants.TYPES.UI;
    }

    activeAction(plot) {
        this.handler.getSeedManager().spawnSeedAt(this.seed, plot.x, plot.y);
        // this.handler.getHeroManager().spawnHeroAt(this.hero, plot.x, plot.y);
    }

    tick(dt) {
        //
    }

    render(graphics) {
        const backgroundColor = this.active ? 'limegreen' : 'purple';
        const textColor = this.active ? 'black' : 'white';
        // graphics.drawSprite(this.assets.walnut, this.x, this.y, this.height, this.width);

        // ****** DRAW BOUNDING BOX
        graphics.fillStyle = backgroundColor;
        graphics.fillRect(this.bounds.x + this.x, this.bounds.y + this.y, this.bounds.width, this.bounds.height);
        // ****** DRAW BOUNDING BOX

        graphics.drawText(this.text, this.x + 12, this.y + 54, textColor);
    }

    wasClickedAt(x, y) {
        this.handler.getUiManager().toggleElement(this);
    }
}