//Create variables here
var dog,happy,dog,foodS,foodStock,database;
var dogimg,doghappyimg;

function preload()
{
  dogimg=loadImage("dogImg1.png")
  doghappyimg=loadImage("dogImg.png")
	//load images here
}

function setup() {
  createCanvas(500,500);
  
  database=firebase.database();
     
    foodStock=database.ref('Food');
    foodStock.on("value",readStocks);
  dog=createSprite(400,250);
  dog.addImage(dogimg)
  dog.scale=0.3;

}


function draw() { 
  background(11,232,140); 
  if(keyWentDown(UP_ARROW)) {
    writeStocks(foodS);
    dog.addImage( doghappyimg);
  
  }
  drawSprites();
  fill ("red")
  textSize(30)
text("Press the up arrow to feed the dog",20,100)

  fill ("red")
  textSize(30)
text("Foodstock:"+foodS,50,300)

}
function readStocks(data){
  foodS=data.val();
}
//function writeStocks(x){
  //database.ref('/').update({
    //Food:x

  //})
//}
function writeStocks(x) {
  if(x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }

  if(foodS != undefined) {
    database.ref('/').update({
      Food:x
    })
  }
}







