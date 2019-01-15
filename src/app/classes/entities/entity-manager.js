import {PlayerCursor} from "../input/player-cursor";

export class EntityManager{
  constructor(handler){
    this.handler = handler;
    this.cursor = new PlayerCursor();
    this.entities = [];
  }

  tick(deltaTime){

  }

  render(graphics){
    // graphics.drawText("world, hello!", 200, 200)
    for(let i= 0; i< this.entities.length; i += 1){
      this.entities[i].render(graphics);
    }
    if(this.cursor.x && this.cursor.y){
      this.cursor.render(graphics);
    }
  }

  mouseClick(data){
    console.log(data);
  }

  mouseMove(data){
    this.cursor.x = data.x;
    this.cursor.y = data.y;
  }

  addEntity(entity){
    this.entities.push(entity);
  //  insert spatial grid here
  }
}