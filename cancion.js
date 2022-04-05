const WIDTH = 1538;
const HEIGH = 713;
canciones=[];
indice=0;
//let song;
nombresCanciones=["cancion1","cancion2","cancion3","cancion4","cancion5"]

this.rectangle = {
  x: WIDTH/4,
  y: HEIGH/2 +304,
  w: WIDTH/4 * 2.4,
  h: 2
}

this.bola = {
  x: WIDTH/4,
  y: HEIGH/2 + 304,
  r: 5
}

function preload() {
  canciones[0] = loadSound("Sonidos/a.mp3");
  canciones[1] = loadSound("Sonidos/b.mp3");
  canciones[2] = loadSound("Sonidos/c.mp3");
  canciones[3] = loadSound("Sonidos/d.mp3");
  canciones[4] = loadSound("Sonidos/e.mp3");
}

function setup() {
  fondo = loadImage('Imagenes/Home2.png');
  createCanvas(WIDTH, HEIGH);
  botonPlay=createButton("PLAY");
  botonPlay.mousePressed(Play);
  botonStop=createButton("STOP");
  botonStop.mousePressed(Stop);
  botonNext=createButton("NEXT");
  botonNext.mousePressed(Next);
}

function draw() {
background(fondo);
rect(this.rectangle.x,this.rectangle.y,this.rectangle.w,this.rectangle.h)
ellipse(this.bola.x,this.bola.y,this.bola.r*2)
}

function Play(){
  canciones[indice].play();
  console.log(nombresCanciones[indice]);
}

function Stop(){
  canciones[indice].stop();
}
function Next(){
  Stop();
  if(indice<canciones.length-1){
  indice+=1;
  }
  else{
    indice=0;
  }
  Play();
}

function mouseDragged(){
  if(dist(mouseX,mouseY, this.bola.x,this.bola.y) < this.bola.r){
    const bonderies = {
      x1: this.rectangle.x,
      x2: this.rectangle.x + this.rectangle.w,
    }
    const isInRange = mouseX > bonderies.x1 && mouseX < bonderies.x2;
    if(isInRange){
      this.bola.x = mouseX;
      
      if(OUTPUT === 'VOLUME') {
        const volume = map(mouseX, bonderies.x1,bonderies.x2, 0,100) / 100;
        this.song.setVolume(volume)
      } else if (OUTPUT === "HEAD") {
        const head = map(mouseX, bonderies.x1,bonderies.x2, 0,this.song.duration());
        this.song.jump(head)
      }

    }
  }
}
