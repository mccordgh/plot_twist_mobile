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
    Object.entries(object).map(entry => this[entry[0]] = entry[1])
  }
}
