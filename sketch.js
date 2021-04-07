alert("WELCOME TO SNAKE GAME");
var l = prompt("enter your level 1-10")
var s1;
var scl=20;
var food=[];

function setup(){
frameRate(floor(l));

createCanvas(400,400);

s1 = new snake();
food=[1];
pickLocation(1);
}
function pickLocation(p){
var cols= floor(width/scl);
var rows = floor(height/scl);
for(var i=0;i<1;i++){
food[i]=createVector(floor(random(cols)),floor(random(rows)));
food[i].mult(scl);
}
}
function mousePressed(){
s1.total++;

}
function draw(){
background(50);

s1.score();
if(l!=11)
s1.death();
s1.update();
s1.show();
for(var i=0;i<food.length;i++){
if(s1.eat(food[i])){

pickLocation(1);
}
}

for(var i=0;i<food.length;i++){

fill(random(0,255),random(0,255),random(0,255));
rect(food[i].x,food[i].y,scl,scl);

}
}
function keyPressed(){
if(keyCode===UP_ARROW &&  !s1.bottom ){
s1.up=true;
s1.right=false;
s1.left=false;
s1.bottom=false;
s1.dir(0,-1);
}  else if(keyCode===DOWN_ARROW && !s1.up){
s1.up=false;
s1.right=false;
s1.left=false;
s1.bottom=true;
s1.dir(0,1);
}  else if(keyCode===RIGHT_ARROW && !s1.left){
s1.up=false;
s1.right=true;
s1.left=false;
s1.bottom=false;
  s1.dir(1,0);
} else if(keyCode===LEFT_ARROW && !s1.right){
  s1.up=false;
  s1.right=false;
  s1.left=true;
  s1.bottom=false;
    s1.dir(-1,0);
  }
}