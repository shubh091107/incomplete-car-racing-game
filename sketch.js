var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var c1,c2,c3,c4,tr
var cars, car1, car2, car3, car4;
var s
function preload(){
c1 =loadImage('images/car1.png')
c2 =loadImage('images/car2.png')
c3 =loadImage('images/car3.png')
c4 =loadImage('images/car4.png')
tr =loadImage('images/track.jpg')

}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2){
    game.end()
  }
}
