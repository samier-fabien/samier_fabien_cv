class Bubble {
  constructor(
    canvas,
    ctx,
    xPos,
    yPos,
    dx,
    dy,
    r,
    text = "",
    colorOne = "black",
    colorTwo = "white",
    density = 1
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = xPos;
    this.y = yPos;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.c1 = colorOne;
    this.c2 = colorTwo;
    this.d = density;
    this.m = this.d * Math.PI * this.r ** 2; // masse = densité * surface
    this.text = text;
    this.draw();
  }

  /**
   * Se charge de dessiner les bulles sur la canvas
   */
  draw() {
    const linearGradient = this.ctx.createLinearGradient(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
    linearGradient.addColorStop(0, "#FF204E");
    linearGradient.addColorStop(0.2, "#FF3EA5");
    linearGradient.addColorStop(0.4, "#6420AA");
    linearGradient.addColorStop(0.6, "#836FFF");
    linearGradient.addColorStop(0.8, "#007F73");
    linearGradient.addColorStop(1, "#4CCD99");

    // Calculer la position du texte pour le centrer dans le cercle
    this.ctx.fillStyle = linearGradient;
    this.ctx.font = "bold " + this.r / 2 + "px 'Courier New', monospace";
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.fillText(this.text, this.x, this.y);

    const radialGradient = this.ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
    radialGradient.addColorStop(0, this.c1);
    radialGradient.addColorStop(1, this.c2);

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    this.ctx.fillStyle = radialGradient;
    this.ctx.fill();
    // this.ctx.strokeStyle = "black";
    // this.ctx.stroke();
    this.ctx.closePath();
  }
}

export default Bubble;
