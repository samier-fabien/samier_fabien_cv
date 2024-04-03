class Bubble {
  constructor(canvas, ctx, xPos, yPos, dx, dy, r, color, density = 1) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = xPos;
    this.y = yPos;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.c = color;
    this.d = density;
    this.m = this.d * Math.PI * this.r ** 2; // masse = densité * surface
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = this.c;
    this.ctx.fill();
    this.ctx.stroke();
  }
}

export default Bubble;
