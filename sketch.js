var catt
var mouse3
var bgpo

function preload() {
    //load the images here
cat1 = loadImage("cat1.png");
cat2 = loadImage("cat2.png");
cat4 = loadImage("cat4.png");
mouse1 = loadImage("mouse1.png");
mouse2 = loadImage("mouse4.png");
bgpoimg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
bgpo = createSprite(500,400,40,40);
bgpo.addImage(bgpoimg);

catt = createSprite(800,680,20,20);
catt.addImage(cat1);
catt.scale = 0.2


mouse3 = createSprite(100,680,20,20);
mouse3.addImage(mouse1);
mouse3.scale = 0.1




}

function draw() {

    background(255);
if(catt.x - mouse3.x < (catt.width - mouse3.width)/2) {
catt.addImage(cat2);
catt.changeImage(cat1);
catt.velocityX = 0
}
if(catt.isTouching(mouse3)){
mouse3.addImage(mouse1);
mouse3.addImage(mouse2);
mouse3.changeImage(mouse2);
catt.addImage(cat2);
catt.addImage(cat4);
catt.changeImage(cat4);
}



    drawSprites();
}


function keyPressed(){

if(keyCode === RIGHT_ARROW){
catt.addImage(cat1);
catt.addImage(cat2)
catt.changeImage(cat2)
catt.velocityX = -4;
catt.frameDelay = 25;

}


}
