var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels,powerCoins,lifeImage,fuelImage;
var cars = [];
var obstacle1,obstacle2,obstacle1Image,obstacle2Image;
var blastImage;

//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/track.jpg");
  fuelImage=loadImage("../assets/fuel.png")
  powerCoinImage=loadImage("../assets/goldCoin.png")
  lifeImage=loadImage("./assets/life.png")
  obstacle1Image=loadImage("./assets/obstacle1.png")
  obstacle2Image=loadImage("./assets/obstacle2.png")
  

}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
