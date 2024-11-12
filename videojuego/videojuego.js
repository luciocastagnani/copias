let objJuego;

function setup() {
  createCanvas(640,480);
  objJuego = new juego();
}


function draw() {
  background(150);
  objJuego.dibujar();
  objJuego.teclaMovimiento();
}

function keyPressed(){
  objJuego.teclaActiva(keyCode);
}
