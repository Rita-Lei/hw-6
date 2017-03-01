var shade  = [10,20,45,25,60,62,26,22,66]; // 6 values
function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  noStroke();

  for(var i = 0; i < shade.length; i++) {
  fill(shade[i], 100, 100);
  rect(i*width/shade.length, 0, width/shade.length, height);
  }
}

function mouseClicked() {
  append(shade,random(10,50));
}
