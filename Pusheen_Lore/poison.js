let raindrops = [];
let lightning = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-container');
  background(0); // 空白背景 (黑色)
  stroke(255); // 设置线条颜色为白色
  strokeWeight(2); // 设置线条粗细
}

function draw() {
  background(0); // 每一帧重绘背景

  // 生成闪电
  if (random(1) < 0.01) {
    createLightning();
  }

  // 画闪电
  for (let i = lightning.length - 1; i >= 0; i--) {
    let l = lightning[i];
    l.show();
    if (l.alpha <= 0) {
      lightning.splice(i, 1); // 删除消失的闪电
    }
  }

  // 生成雨滴
  if (frameCount % 2 === 0) {
    raindrops.push(new Raindrop());
  }

  // 画雨滴
  for (let i = raindrops.length - 1; i >= 0; i--) {
    let r = raindrops[i];
    r.update();
    r.show();
    if (r.offScreen()) {
      raindrops.splice(i, 1); // 删除超出屏幕的雨滴
    }
  }
}

class Raindrop {
  constructor() {
    this.x = random(width);
    this.y = random(-100, -10);
    this.len = random(10, 20);
    this.speed = random(4, 10);
  }

  update() {
    this.y += this.speed;
  }

  show() {
    stroke(138, 43, 226); // 雨滴颜色 (紫色)
    line(this.x, this.y, this.x, this.y + this.len);
  }

  offScreen() {
    return this.y > height;
  }
}

class Lightning {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.alpha = 255;
  }

  show() {
    stroke(255, this.alpha);
    line(this.x, this.y, this.x + random(-50, 50), height);
    this.alpha -= 5; // 逐渐消失
  }
}

function createLightning() {
  lightning.push(new Lightning());
}
