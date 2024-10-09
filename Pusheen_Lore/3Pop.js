let images = [];
let currentImageIndex = 0;  // 当前显示的图片索引
let bgImg;

function preload() {
  // 预加载图片，替换为你的图片路径
  images[0] = loadImage('3Pop1.png');  // 图片1
  images[1] = loadImage('3Pop2.png');  // 图片2
  images[2] = loadImage('3Pop3.png');  // 图片3
  images[3] = loadImage('3Pop4.png');  // 图片4
  images[4] = loadImage('3Pop5.png');  // 图片5
  images[5] = loadImage('3Pop6.png');  // 图片5
  bgImg = loadImage("2Road.png");
}

function setup() {
  createCanvas(1920,1080);  // 创建画布大小为浏览器窗口大小
}

function draw() {
    background(220);  // 设置背景色
    imageMode(CENTER)
    image(bgImg, width/2,height/2,2880,1620);
    // 在画布中心显示当前图片
    image(images[currentImageIndex], width / 2, height / 2);  // 假设图片大小为200x200
  }
  
  function mousePressed() {
    // 检查鼠标是否在当前图片的范围内
    let imgX = width / 2;
    let imgY = height / 2;
    let imgSize = 200;  // 假设图片的宽高为200
    
    if (mouseX > imgX - imgSize / 2 && mouseX < imgX + imgSize / 2 &&
        mouseY > imgY - imgSize / 2 && mouseY < imgY + imgSize / 2) {
      // 如果当前图片不是最后一张，则切换到下一张
      if (currentImageIndex < images.length - 1) {
        currentImageIndex++;  // 切换到下一张图片
      }
    }
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);  // 窗口大小变化时，调整画布大小
  }