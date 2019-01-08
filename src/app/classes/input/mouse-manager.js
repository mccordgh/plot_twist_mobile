export class MouseManager {
    constructor(managerHandler) {
        this.managerHandler = managerHandler;
        this.mouseDown = false;
        this.position = { x: 0, y: 0};

        const canvas = this.managerHandler.getGraphicsManager().getCanvas();

        canvas.onclick = (event) => {
            let mouseX = this.getMouseXFromEvent(event);
            let mouseY = this.getMouseYFromEvent(event);

            // Send out a click event to whatever
        }

        canvas.mousemove = (event) => {
            this.setMouseX(this.getMouseXFromEvent(event));
            this.setMouseY(this.getMouseYFromEvent(event));
        }

        canvas.mousedown = () => {
            this.mouseDown = true;
        }

        canvas.mouseup = () => {
            this.mouseDown = false;
        }
    }

    getMouseXFromEvent(event) {
        return event.offsetX;
    }

    getMouseYFromEvent(event) {
        return event.offsetY;
    }

    setMouseX(x) {
        this.position.x = x;
    }

    setMouseY(y) {
        this.position.y = y;
    }

    tick() {}
}