const OUTPUT = "HEAD"; // VOLUME | HEAD
const WIDTH = 1538;
const HEIGH = 713;

let song;

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
  song = loadSound('Sonidos/a.mp3');
}

function setup() {
  fondo = loadImage('Imagenes/Home2.png');
 this.song = loadSound('Sonidos/a.mp3', song => {
    song.play()
    song.loop();
    
    createCanvas(WIDTH, HEIGH);
  });
  
}

function draw() {
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

//para y continua la canción
function mousePressed() {
    if (song.isPlaying()) {
      song.pause();
      button = createButton(mouseClicked);
    button.mouseClicked(50, 50);
    } else {
      song.play();
      button = createButton(mouseClicked);
    button.mouseClicked(50, 50);
    }
  }
