export class MouseManager {
    constructor(managerHandler) {
        this.managerHandler = managerHandler;
        this.initializeEvents();
    }

    getMouseXFromEvent(event) {
        return event.offsetX;
    }

    getMouseYFromEvent(event) {
        return event.offsetY;
    }

    initializeEvents(){
      // this.mouseDown = false;
      // this.position = { x: 0, y: 0};

      const canvas = this.managerHandler.getGraphicsManager().getCanvas();

      canvas.onclick = (event) => {
        let mouseX = this.getMouseXFromEvent(event);
        let mouseY = this.getMouseYFromEvent(event);

        // Send out a click event to whatever
        this.managerHandler.event('click', {
          x:mouseX,
          y:mouseY
        })
      }

      canvas.onmousemove = (event) => {
        let mouseX = this.getMouseXFromEvent(event);
        let mouseY = this.getMouseYFromEvent(event);

        this.managerHandler.event('move', {
          x:mouseX,
          y:mouseY
        })
      }

      // canvas.mousedown = () => {
      //   this.mouseDown = true;
      // }
      //
      // canvas.mouseup = () => {
      //   this.mouseDown = false;
      // }
    }

    // setMouseX(x) {
    //     this.position.x = x;
    // }
    //
    // setMouseY(y) {
    //     this.position.y = y;
    // }

    // tick() {}
}