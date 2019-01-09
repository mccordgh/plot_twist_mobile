export class MouseManager{
  constructor(managerHandler){
    this.managerHandler = managerHandler;

    this.mouseDown = false;
    const gameCanvas = this.managerHandler.getGraphicsManager().getCanvas();
    gameCanvas.onclick = event => {
      console.log(event);
    }
  }

  tick(){

  }
}
