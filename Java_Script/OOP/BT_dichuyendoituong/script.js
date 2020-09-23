/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function () {
    return (
      '<img width="' +
      this.size +
      '"' +
      ' height="' +
      this.size +
      '"' +
      ' src="' +
      this.image +
      '"' +
      ' style="top: ' +
      this.top +
      "px; left:" +
      this.left +
      'px;position:absolute;" />'
    );
  };

  this.moveRight = function () {
    this.left += 5;
    console.log("ok: " + this.left);
  };
  this.moveLeft = function () {
    this.left -= 5;
  };
  this.moveBottom = function () {
    this.top += 5;
  };
  this.moveTop = function () {
    this.top -= 5;
  };
}

var hero = new Hero("ball.png", 20, 30, 200);

function start() {
  // hero.moveRight();
  document.getElementById("game").innerHTML = hero.getHeroElement();
  requestAnimationFrame(start);
}
// start();
