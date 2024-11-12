class enemigo{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color (255,0,0);
  }
  dibujar(){
    fill(this.miColor);
    ellipse(this.posX,this.posY,300,100);
  }
}
