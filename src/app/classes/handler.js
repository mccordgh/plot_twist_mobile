let sm;

export class Handler {
  constructor(game) {
    let object = {
      game,
      machine: null,
      getWidth: () => game.getWidth(),
      getHeight: () => game.getHeight(),
      getKeyManager: () => game.getKeyManager(),
      getMachine: () => this.machine,
      getWorld: () => this.world,
      getGame: () => this.game,
      getSoundManager: () => sm,
      setSoundManager: s => sm = s,
      setWorld: world => this.world = world
    };
    for(let val in object){
      this[val] = object[val];
    }
    // this.game = game;
    // this.machine = null;
    // this.getWidth = () => this.game.getWidth();
    // this.getHeight = () => this.game.getHeight();
    // this.getKeyManager = () => this.game.getKeyManager();
    // this.getMachine = () => this.machine;
    // this.getWorld = () => this.world;
    // this.getGame = () => this.game;
    // this.getSoundManager = () => sm;
    // this.setSoundManager = s => sm=s;
    // this.setWorld = world => this.world = world;
  }

  // getWidth() {
  //   return this.game.getWidth();
  // }
  //
  // getHeight() {
  //   return this.game.getHeight();
  // }

  // getKeyManager() {
  //   return this.game.getKeyManager();
  // }

  // getGameCamera() {
  //   return this.game.getGameCamera();
  // }

  // getMachine() {
  //   return this.machine;
  // }

  // getWorld() {
  //   return this.world;
  // }

  // setWorld(world) {
  //   this.world = world;
  // }

  // getGame() {
  //   return this.game;
  // }

  // getSoundManager(){
  //   return sm;
  // }

  // setSoundManager(s) {
  //   sm = s;
  // }
}
