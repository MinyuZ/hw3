function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;
let a = 0;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (mouseIsPressed) {
    fill(255);
    rect(0, 0, a, height-15); 
    fill(40,100,60);
    rect(a,150,50,35)
    line(a,150,a+50,220);
    a= a+2;    
    h=10;
  }
  
  if (a>width) {
    a =0;
  }
  
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
