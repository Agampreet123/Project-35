var  dog, happyDog, database, foodS, foodStock,dogImage,happyDogImage

function preload()
{
  dogImage = loadImage("Dog.png");
  happyDogImage = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,200,50,50);
  dog.addImage(dogImage);
  dog.scale = 0.5
  foodStock = database.ref('Food')
foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }
  drawSprites();
  textSize(20);
  fill("white")
  stroke(0);
  text("Note: Press UP ARROW key To Feed Drago Milk!",30,450)
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
function readStock(data){
foodS = data.val();
}


