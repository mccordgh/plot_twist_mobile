import {StaticEntity} from "./static-entity";

export class FarmHouse extends StaticEntity{
  constructor(handler, x, y){
    super(handler, x, y);

    this.height = 200;
    this.width = 100;
    this.health = 2000;

    this.bounds.x = 0;
    this.bounds.y = 0;
    this.bounds.width = this.width;
    this.bounds.height = this.height;
  }

  tick(){
    if(this.health<=0){
    //  you die
    }
  }

  render(graphics){
    graphics.fillStyle = 'red';
    graphics.fillRect(this.x, this.y, this.width, this.height);
  }
}