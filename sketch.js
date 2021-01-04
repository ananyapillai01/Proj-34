var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
   dogImg=loadImage("Images/dogImg1.png");
   dogImg1=loadImage("Images/dogImg1.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}
// //Create variables here
// var dog, happyDog;
// var milk;
// var database, foodS, foodStock;
// var feedDog, addFood;
// var fedTime, lastFed;
// var foodObj;

// function preload()
// {
//   //load images here
//   dog1 = loadImage("images/dogImg.png");
//   dog2 = loadImage("images/dogImg1.png");
//   milk1 = loadImage("images/milk.png");
// }

// function setup() {
//   database = firebase.database();
// 	createCanvas(500, 500);
  
//   dog = creatSprite(250, 250, 20, 20);
//   dog(dog1);

//   dog = createSprite(250, 250, 20, 20);
//   dog(dog2);

//   foodStock = database.ref('Food');
//   foodStock.on("value", readStock);

//   feed = createButton("Feed The Dog");
//   feed.position(700, 95);
//   feed.mousePressed(feedDog);

//   addFood = createButton("Add Food");
//   addFood.position(800, 95);
//   addFood.mousePressed(addFoods);
// }


// function draw() {  
//   background(46, 139, 87);

// // if(keyWentDown(UP_ARROW)){
// //   foodStock = foodStock - 1;
// //   writeStock(foodS);
// //   dog.addImage(dog2);
// // }
//   drawSprites();
//   //add styles here
//   // textSize(25);
//   // fill("red");
//   // text("NOTE: Press UP_ARROW Key To Feed Drago Milk!");

//   fill(255, 255, 254);
//   textSize(15);
//   if(lastFed >= 12){
//     text("Last Fed: " + lastFed % 12 + "PM", 350, 30);
//   }
//   else if(lastFed === 0){
//     text("Last Fed : 12 AM ", 350, 30);
//   }
//   else{
//     text("Last Fed: " + lastFed + " AM", 350, 30);
//   }
//   fedTime = database.ref('FeedTime');
//   fedTime.on("value", function(data){
//     lastFed = data.val();
//   })


//   writeStock();
//   feedDog();
//   addFoods();
// }
// function readStock(data){
//   foodS = data.val();
// }
// function writeStock(x){
//   if(x <= 0){
//     x = 0;
//   }
//   else{
//     x = x - 1;
//   }
//   database.ref('/').update({
//     Food:x
//   })
// }
// function feedDog(){
//   dog.addImage(dog2);
//   foodObj.updateFoodStock(foodObj.getFoodStock()-1);
//   database.ref('/').update({
//     Food : foodObj.getFoodStock(),
//     feedTime : hour()
//   })
// }
// function addFoods(){
//   foodS++
//   database.ref('/').update({
//     Food : foodS
//   })
// }