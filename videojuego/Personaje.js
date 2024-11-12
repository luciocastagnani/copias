class personaje{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.vida = 3;
    this.miColor = color (0,255,0);
    this.bala = new bala(posX,posY);
    this.municion = 10;
  }
  dibujar(){
    this.bala.dibujar();
    fill(this.miColor);
    rect(this.posX,this.posY,50,25);
  }
  teclaMovimiento(){
    if (keyIsDown(LEFT_ARROW)){
      this.movimientoIzq();
    }else if (keyIsDown(RIGHT_ARROW)){
       this.movimientoDer();
    }
  }
  teclaActiva(keyCode){
    if (keyCode == ENTER){
      this.dispararBala();
    }
  }
  movimientoIzq(){
    this.posX -= 5;
  }
  movimientoDer(){
    this.posX += 5;
  }
  estaVivo(){
  }
  dispararBala(){
    if(!this.bala.disparada){
    this.bala = new bala(this.posX+25, this.posY);
    this.bala.disparar();
    } 
}
}
//  miMunicion(){
//    if(this.bala.disparar()){
//      this.municion - 1;
//    }
//  }
//}
