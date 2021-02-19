var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var Thor,IronMan,CaptainAmerica,Hulk,Thanos,marvel;
var ThorImage, IronManImage , CaptainAmericaImage , HulkImage, ThanosImage; 
var MBimage;

function preload(){
//   ThorImage = loadImage ("images/Thor.png");
//   IronManImage = loadImage("images/IronMAN.png");
//   CaptainAmericaImage = loadImage ("images/Captain America.png");
//   HulkImage = loadImage("images/Hulk.png");
//   ThanosImage = loadImage("images/Thanos.png");
//   MBimage = loadImage("images/MB.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 5){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
