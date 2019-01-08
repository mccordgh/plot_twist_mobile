import { GraphicsManager } from './graphics/graphics-manager';
import gameConstants from '../constants/game-constants';

export class Game {
    // setup all the things aka managers of input, sound, etc
    initialize() {
        this.graphicsManager = new GraphicsManager();
    }

    run() {
        this.initialize();

        const fps = gameConstants.FPS;
        const timePerTick = 1000 / fps;

        let delta = 0;
        let deltaTime = timer / 1000;
        let now = Date.now();
        let lastTime = now;
        let timer = 0;

        const loop = () => {
            now = Date.now();
            delta = now - lastTime;
            timer += delta;
            lastTime = now;

            if (timer >= timePerTick) {
                deltaTime = timer / 1000;

                this.tick(deltaTime);
                this.render();

                timer = 0;
            }

            window.requestAnimationFrame(loop);
        }

        loop();
    }

    // Update all game logic
    tick(deltaTime) {
        //
    }

    // Draw everything after it is updated
    render() {
        this.graphicsManager.getGraphics().drawText('Hello Game', 150, 100);

        //
    }
};