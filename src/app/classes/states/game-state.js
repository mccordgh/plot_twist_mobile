export class GameState {
  constructor(managerHandler, world) {
    this.managerHandler = managerHandler;
    this.world = world;
  }

  tick(dt) {
    this.world.tick(dt);
  }

  render(graphics) {
    this.world.render(graphics);
  }

  getManagerHandler(){
    return this.managerHandler;
  }

  getWorld(){
    return this.world
  }

  setWorld(world){
    this.world = world;
  }
}