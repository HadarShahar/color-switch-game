let ball;
let colors = [];
let started = false;
let gameObjects = [];
let keepGoing = true;
let score = 0;
let scoreText;

function setup() {
  let cnv = createCanvas(200, 400);
  // let x = (windowWidth - width) / 2;
  // let y = (windowHeight - height) / 2;
  cnv.position(300, 40);


  scoreText = createElement("h2", "Score: 0");
  scoreText.position(cnv.x + 60, -15)


  colors.push(color(255, 255, 0)); // top left
  colors.push(color(141, 19, 252)); // top right
  colors.push(color(255, 0, 128)); // bottom right
  colors.push(color(0, 255, 255)); // bottom left



  let doubleCircle = new DoubleCircle(width / 2, -140, 30);
  gameObjects.push(doubleCircle);
  gameObjects.push(new Star(doubleCircle.x, doubleCircle.y - 30));

  let square = new Square(width / 2, -25, 40);
  gameObjects.push(square);
  gameObjects.push(new Star(square.x, square.y));


  gameObjects.push(new ColorChanger(width / 2, 160, 10));

  let plus = new Plus(width / 2 - 30, 100, 35);
  gameObjects.push(plus);
  gameObjects.push(new Star(plus.x + plus.r, plus.y - plus.r));

  let circle = new Circle(width / 2, 240, 45);
  gameObjects.push(circle);
  gameObjects.push(new Star(circle.x, circle.y));

  // let triangle = new Triangle(width / 2, circle.y - 5, 60);
  // gameObjects.push(triangle);

  gameObjects.push(new ColorChanger(width / 2, 320, 10));


  ball = new Ball(width / 2, 350, 5);





}


function draw() {
  if (keepGoing) {
    background(0);

    scoreText.html("Score: " + score);

    if (started) {
      ball.update();
    }

    for (let gameObject of gameObjects) {
      gameObject.show();
    }

    if (!ball.alive()) {
      console.log("Game Over!!!")
      noLoop();
    }

    ball.show();


  }
}

function keyPressed() {
  if (key == 'p') {
    keepGoing = !keepGoing;
  }
}

function mousePressed() {
  started = true;
  ball.jump();

  loadPixels();
  let d = pixelDensity();
  let i = (floor(mouseX) + floor(mouseY) * width * d) * 4 * d;
  console.log("mousePressed: ", pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]);
}