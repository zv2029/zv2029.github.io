let boxImg, photo2, image3, image4, girlImg;
let isClicked = false; // 标识boxImg是否被点击
let shakeIntensity = 0.7;  // 控制摇动的强度
let girlX;  // 女孩的X坐标
let bgImg;

function preload() {
  // 预加载图片，替换为你的图片路径
  boxImg = loadImage('2Box.png');      // 原始box图片
  photo2 = loadImage('2Open.png');    // 点击后替换的图片
  image3 = loadImage('2left.png');    // 左上角显示的图片
  image4 = loadImage('2right.png');    // 右上角显示的图片
  girlImg = loadImage('2Girl.png');     // 女孩的图片
  bgImg = loadImage("2Road.png");
}

function setup() {
  let huabu = createCanvas(windowWidth,windowHeight);
  huabu.parent('boxappearcontain');
  // createCanvas(1920,1080);  // 创建画布大小为浏览器窗口大小
  
  // 初始化女孩的X坐标，从屏幕左边开始
  girlX = -200;  // 女孩在屏幕外初始位置
}

function draw() {
  background(220);  // 设置背景色
  imageMode(CENTER)
  image(bgImg, width/2,height/2,1920,1080);
  // 计算boxImg的中心点
  let centerX = width / 2;
  let centerY = height / 2;

  // 判断鼠标是否在boxImg上方
  let isMouseOver = (mouseX > centerX - 100 && mouseX < centerX + 100 &&
                     mouseY > centerY+150 - 100 && mouseY < centerY+150 + 100);

  // 让女孩从左边走到box的左边
  let targetX = centerX - 300;  // 目标是box的左边 150 像素
  if (girlX < targetX) {
    girlX += 3;  // 控制女孩的速度
  }
  
  // 绘制女孩，随着girlX变化移动
  imageMode(CENTER);
  image(girlImg, girlX, centerY+150);  // 假设女孩大小为150x300

  if (isMouseOver && !isClicked) {
    // 鼠标在图片上方且未点击时，增加抖动强度
    shakeIntensity = 10;

    // 添加随机偏移，使图片摇动
    let shakeX = random(-shakeIntensity, shakeIntensity);
    let shakeY = random(-shakeIntensity, shakeIntensity);

    // 在屏幕中心绘制boxImg
    imageMode(CENTER);
    image(boxImg, centerX + shakeX, centerY+150 + shakeY, 200, 200);  // 图片大小为200x200

    // 绘制image3和image4，位置为boxImg的左上角和右上角，并添加抖动
    image(image3, centerX - 120 + shakeX, centerY+150 - 120 + shakeY, 50, 50);
    image(image4, centerX + 120 + shakeX, centerY+150 - 120 + shakeY, 50, 50);
  } else if (!isClicked) {
    // 当鼠标不在图片上时，恢复原始的抖动强度
    shakeIntensity = 1;

    // 添加随机偏移，使图片轻微摇动
    let shakeX = random(-shakeIntensity, shakeIntensity);
    let shakeY = random(-shakeIntensity, shakeIntensity);

    // 在屏幕中心绘制boxImg
    imageMode(CENTER);
    image(boxImg, centerX + shakeX, centerY+150 + shakeY, 200, 200);
  } else {
    // 如果图片被点击了，则停止抖动并显示photo2
    imageMode(CENTER);
    image(photo2, centerX, centerY+150,300, 225);  // 显示点击后的图片
  }
}

// 点击鼠标事件
function mousePressed() {
  // 检查鼠标是否在boxImg上方
  let centerX = width / 2;
  let centerY = height / 2;
  let isMouseOver = (mouseX > centerX - 100 && mouseX < centerX + 100 &&
                     mouseY > centerY+150 - 100 && mouseY < centerY+150 + 100);

  if (isMouseOver) {
    isClicked = true; // 点击boxImg后标识为已点击
  }
}