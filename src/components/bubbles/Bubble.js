export default class Bubble {
  constructor(x, y, r, color, canvas, ctx, clean = true) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.canvas = canvas;
    this.ctx = ctx;
    this.clean = clean;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();
  }

  paint(dx = 0, dy = 0) {
    this.updatePosition(dx, dy);
    this.draw();
  }

  move(dx = 0, dy = 0) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.updatePosition(dx, dy);
    this.draw();
  }

  updatePosition(dx = 0, dy = 0) {
    this.x += dx;
    this.y += dy;
  }
}
