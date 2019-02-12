// import { Assets } from '../../../assets/assets';
import { Entity } from '../entity';
import gameConstants from '../../../constants/game-constants';


export class UiEntity extends Entity {
    constructor(handler, x, y, width, height) {
        super(handler, x, y, width, height);

        this.handler = handler;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.bounds = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height,
        };

        this.text = 'WALNUT';
        this.active = false;

        // this.assets = Assets.getAssets('walnut');

        this.type = gameConstants.TYPES.UI;
    }

    activeAction(plot) {
        this.handler.getHeroManager().spawnHeroAt(plot.x, plot.y);
    }

    tick(dt) {
        // if (this.x > gameConstants.GAME_WIDTH + (this.width * 3)) {
        //     // we've gone off the left side of the screen so destroy self
        //     this.handler.getEntityManager().removeEntity(this);
        // }

        // this.xMove = this.speed * dt;

        // this.move();
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
        this.active = !this.active;
    }
}