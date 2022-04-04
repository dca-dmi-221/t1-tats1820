function setup() {
  fondo = loadImage('Imagenes/Home2.png');
  //createCanvas(1553, 1489);
  createCanvas(1538, 713);
}

function draw() {
  background(fondo);
}

 // adelantar y atrazar la línea de la canción 

 const OUTPUT = "HEAD"; // VOLUME | HEAD

const WIDTH = 400;
const HEIGH = 400;

this.song;

this.rectangle = {
  x: WIDTH/8,
  y: HEIGH/2 - 5,
  w: WIDTH/8 * 6,
  h: 10
}

this.bola = {
  x: WIDTH/8,
  y: HEIGH/2,
  r: 15
}

function setup() {
  this.song = loadSound('lucky_dragons_-_power_melody.mp3', song => {
    song.play()
  });
  
  createCanvas(WIDTH, HEIGH);
}

function draw() {
  background(0);
  rectMode(CORNER);
  rect(this.rectangle.x,this.rectangle.y,this.rectangle.w,this.rectangle.h)
  ellipseMode(CENTER)
  ellipse(this.bola.x,this.bola.y,this.bola.r*2)
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

//Cargar y reproducir un sonido

let song;

function setup() {
  song = loadSound('Sonidos/Push It.mp3');
  createCanvas(720, 200);
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

// Creacion de botones

let button;

function setup() {
  createCanvas(400,400);
  button = createButton("BOOP!");
  button.mouseClicked(moveButton);
  button.size(200,100);
  button.position(10,10);
  button.style("font-family", "Bodoni");
  button.style("font-size", "48px");
}

function draw (){
  background(255);
}

function moveButton() {
  button.position (random(width), random(height));
}

//Parar y continuar una canción


let song;

function preload() {
  song = loadSound('assets/lucky_dragons_-_power_melody.mp3');
}

function setup() {
  createCanvas(710, 200);
  song.loop(); // la canción está lista para ser reproducida durante setup() porque fue cargada durante preload()
  background(0, 255, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song.pause(); // .play() continuará la reproducción desde la posición definida por .pause()
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}

