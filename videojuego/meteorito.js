//en construcion//
class meteorito{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color (255,150,0);
    this.disparada=false;
}

  disparar(){
    this.disparada=true;
}
  dibujar(){
    if(this.disparada){
      fill(this.miColor);
      ellipse(this.posX,this.posY,20,20);
      this.mover();
 }
}
  mover(){
    this.posY+=5;
  }
}
