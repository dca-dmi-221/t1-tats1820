// adelantar y atrazar la línea de la canción 
const OUTPUT = "HEAD"; // VOLUME | HEAD
const WIDTH = 1538;
const HEIGH = 713;

let song;
canciones = [];
indice = 0;
nombresCanciones=["cancion1","cancion2","cancion3","cancion4", "cancion5"]

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
  soundFormats('mp3');
  canciones[0] = loadSound("Sonidos/a.mp3");
  canciones[1] = loadSound("Sonidos/b.mp3");
  canciones[2] = loadSound("Sonidos/c.mp3");
  canciones[3] = loadSound("Sonidos/d.mp3");
  canciones[4] = loadSound("Sonidos/e.mp3");
}

function setup() {
  fondo = loadImage('Imagenes/Home2.png');
  background(fondo);
  botonPlay=createButton("PLAY");
  botonPlay.mousePressed(Play);
  botonStop=createButton("STOP");
  botonStop.mousePressed(Stop);
  botonNext=createButton("NEXT");
  botonNext.mousePressed(Next);
  createCanvas(WIDTH, HEIGH);
}

function draw() {
background(fondo);
//textSize(24);
//text(nombresCanciones[indice],width/2,height/2);
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


/*function preload() {
  song = loadSound('Sonidos/PushIt.mp3');
}

function setup() {
  fondo = loadImage('Imagenes/Home2.png');
  //song = loadSound('Sonidos/Push It.mp3');
  /*this.song = loadSound('Sonidos/PushIt.mp3', song => {
    song.play()
    
    //song.loop();
    
    createCanvas(WIDTH, HEIGH);
    //}
  });*/

/*function draw() {
  background(fondo);
  //rectMode(CORNER);
  rect(this.rectangle.x,this.rectangle.y,this.rectangle.w,this.rectangle.h)
  //ellipseMode(CENTER)
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
*/

//para y continua la canción

/*
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() retorna una variable booleana
    song.pause(); // .play() continuará la reproducción desde la posición definida por .pause()
    button = createButton(mouseClicked);
  button.mouseClicked(x, y);
    //background(255, 0, 0); //rojo
  } else {
    song.play();
    button = createButton(mouseClicked);
  button.mouseClicked(x, y);
    //background(0, 255, 0); //verde
  }
}*/





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
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

//parar, continuar y cambiar cancion 

canciones=[];
indice=0;
nombresCanciones=["cancion1","cancion2","cancion3","cancion4"]

function preload() {
  canciones[0] = loadSound("song1.mp3");
  canciones[1] = loadSound("song2.mp3");
  canciones[2] = loadSound("song3.mp3");
  canciones[3] = loadSound("song4.mp3");
}

function setup() {
  createCanvas(600, 200);
  background("white");
  botonPlay=createButton("PLAY");
  botonPlay.mousePressed(Play);
  botonStop=createButton("STOP");
  botonStop.mousePressed(Stop);
  botonNext=createButton("NEXT");
  botonNext.mousePressed(Next);
}

function draw() {
background("white");
textSize(24);
text(nombresCanciones[indice],width/2,height/2);
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



*/
