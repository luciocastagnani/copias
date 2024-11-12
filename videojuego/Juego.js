class juego{
  constructor(){
    this.personaje = new personaje(width/2 - 25,380);
    this.enemigo = new enemigo(width/2,100);
  }
  dibujar(){
    this.personaje.dibujar();
    this.enemigo.dibujar();
  }
  iniciar(){
  }
  teclaMovimiento(){
    this.personaje.teclaMovimiento(); 
  }
  teclaActiva(keyCode){
    this.personaje.teclaActiva(keyCode)
  }
  //municionDato(){
  //fill(0);
  //text('municion' + this.personaje., 300,100);
  //}
}
