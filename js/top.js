let logo; // Declare variable 'img'.
let me

function preload() {
  logo = loadImage("img/logo_megane.png")
  me = loadImage("img/logo_me.png")
}

function setup() {
  createCanvas(windowWidth, 800);
  imageMode(CENTER);
  reset();
}

function reset() {
}

function draw() {
  background("#FFFFF6");
  fill("yellow")
  circle(mouseX, mouseY, 20)
  //translate(width / 2, height / 2);
  //メガネ
  image(logo, width/2, height/2, logo.width/2, logo.height/2);
  //目
  let me_rad = atan2(mouseY-500, mouseX-500) ;
  let me_x = width / 2 + cos(me_rad)*50;
  let me_y = height / 2+ sin(me_rad)*50;
  //image(me, 位置, 位置, 大きさ, 大きさ);
  image(me, me_x, me_y,me.width/2,me.height/2);
  console.log(mouseX, mouseY);
}

function windowResized() {
  // createCanvas() で生成したCanvasのサイズを変更する
  resizeCanvas(windowWidth, windowHeight);
  reset();
}