function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }

  if (h>50, random()>0.95) {
    fill(10,random(50,100),random(70,100));
    ellipse(random(0,400),random(160,height-h),5)
  }
  
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}