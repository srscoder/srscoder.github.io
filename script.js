let s;
let scl = 40;
let food;
let daniel = ['D','a','n','i','e','l',' ','G','r','u','t','t','e','r'];
var txt ='';
let timer = 0;
let cols = Math.floor(window.innerWidth / scl);
let rows = Math.floor(window.innerHeight / scl-0.7*window.innerHeight/100);
window.addEventListener('resize',pickLocation);

function setup() {
  
  s = new Snake();
  frameRate(10);
  pickLocation();
  setInterval(displayName,1000);
  var danieldiv = document.getElementById("danieldiv")
}

function pickLocation() {

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
   cols = Math.floor(window.innerWidth / scl);
   rows = Math.floor(window.innerHeight / scl-0.7*window.innerHeight/100);

  createCanvas(cols*scl, rows*scl);
  background(200);
  danieldiv.innerHTML = txt;
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();
  s.update();
  s.show();
  fill(255, 0, 0);
  noStroke();
  rect(food.x, food.y, scl, scl);
  stroke(0);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
function displayName(){
if(txt.length < 14){
    txt = txt+daniel[timer]
    timer++;

}
}