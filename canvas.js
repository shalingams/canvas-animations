const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(300, 400, 100, 100);
// c.fillStyle = 'blue'
// c.fillRect(400, 100, 100, 100);

// c.beginPath()
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = 'red';
// c.stroke();

// Arc / Circle
// c.arc(x: Int, y: Int, radius: Int, startAngle: Float, endAngle: Float, drawCounterClockwise: Bool)
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for (let index = 0; index < 100; index++) {
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = "blue";
//   c.stroke();
// }

class Circle {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.radius = radius;
  }

  draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = this.color;
    c.stroke();
    c.fill();
  }

  update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    if (this.y + this.radius > innerHeight || this.y + this.radius < 0) {
      this.dy = -this.dy;
    }
    this.y += this.dy;
    this.draw();
  }
}

let circleArray = [];

for (let i = 0; i < 500; i++) {
  const radius = 30;
  let x = Math.random() * (innerWidth  - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5);
  let dy = (Math.random() - 0.5);
  circleArray.push(new Circle(x, y, dx, dy, radius, 'blue'));
}

console.log(circleArray);
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  // loop through all the circles and update their position
  circleArray.forEach((circle) => {
    circle.update();
  });
}

animate();
