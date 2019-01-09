import gameConstants from "../constants/game-constants";
import {GameState} from "./states/game-state";
import {StateManager} from "./states/state-manager";
import {World} from "./worlds/world";
import {ManagerHandler} from "./helpers/manager-handler";

export default class Game{
  initialize(){
    //setup all the things aka managers of input, sound, etc.
    this.stateManager = new StateManager();
    this.managerHandler = new ManagerHandler(this);

    const world = new World();
    const gameState = new GameState(this.managerHandler, world);
    this.stateManager.setState(gameState);
  }

  run() {
    this.initialize();

    const fps = gameConstants.FPS;
    const timePerTick = 1000 / fps;

    let delta = 0;
    let deltaTime = 0;

    let now = Date.now();
    let lastTime = Date.now();
    let timer = 0;

    let loop = () => {
      now = Date.now();
      delta = now - lastTime;
      timer += delta;
      lastTime = now;

      if (timer >= timePerTick) {
        deltaTime = timer / 1000;
        this.tick(deltaTime);
        this.render(this.managerHandler.getGraphicsManager().getGraphics());

        timer = 0;
      }
      window.requestAnimationFrame(loop);
    }
    loop();
  }

  tick(deltaTime){
    //  update all game logic
    this.stateManager.getState().tick(deltaTime);
  }

  render(graphics){
    //  Draw everything after it's updated
    this.graphicsManager.getGraphics().drawText("Hello Game", 100, 100);
    this.stateManager.getState().render(graphics);
  }
}