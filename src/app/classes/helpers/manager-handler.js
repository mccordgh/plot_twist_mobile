import {MouseManager} from "../input/mouse-manager";
import {GraphicsManager} from "../graphics/graphics-manager";

export class ManagerHandler{
  constructor(game){
    this.game = game;
    this.graphicsManager = new GraphicsManager();
    this.mouseManager = new MouseManager();
  }

  getGame(){
    return this.game;
  }

  getGraphicsManager(){
    return this.graphicsManager();
  }

  getMouseManager(){
    return this.mouseManager;
  }

}