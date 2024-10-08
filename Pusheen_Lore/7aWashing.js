let bubbles = [];
let bubbleImg;
let bgImg;
let soapImg;

function preload() {
  // 加载气泡的PNG图片，确保图片文件名和路径正确
  bubbleImg = loadImage('7aBathBubble.png');
  bgImg = loadImage('7aBgWashing.jpg');
  soapImg = loadImage('7aSoap.png');
}

function setup() {
    let canvas = createCanvas(windowWidth,windowHeight); 
    canvas.parent('canvas-parent');
  for (let i = 0; i < 40; i++) {
    bubbles.push(new Bubble(random(width), random(height), random(20, 50)));
  }

  
}

function draw() {
    background(243, 231, 255);
    noCursor();
    imageMode(CENTER)
    image(bgImg, width/2,height/2,800,800);
    for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
    
    if (bubbles[i].y < -bubbles[i].r) {
      bubbles[i].y = height + bubbles[i].r;
    }
  }
  image(soapImg, mouseX, mouseY,130,150);
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = random(1, 5);
  }
  
  move() {
    this.y -= this.speed;
  }
  
  display() {
    // 使用PNG图片代替气泡
    imageMode(CENTER); // 图片以中心点为基准进行绘制
    image(bubbleImg, this.x, this.y, this.r * 2, this.r * 2); // 调整图片大小与气泡一致
  }
}
