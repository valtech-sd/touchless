class Vector {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }
  get x() {
    return this.X;
  }
  get y() {
    return this.Y;
  }
  set(x,y) {
    this.X = x;
    this.Y = y;
  }

  add(vec) {
    // is it a vector?
    // if (vec instanceof Vector)
    this.X = this.X + vec.x;
    this.Y = this.Y + vec.y;
    // return this;
  }

  sub(vec) {
    this.X = this.X - vec.x;
    this.Y = this.Y - vec.y;
  }

  mult(num) {
    this.X = this.X * num;
    this.Y = this.Y * num;
  }
  div(num) {
    this.X = this.X / num;
    this.Y = this.Y / num;
  }

  distance(vec) {
    return Math.sqrt((this.X - vec.x) * (this.X - vec.x) + (this.Y - vec.y) * (this.Y - vec.y));
  }

  get length() {
    return Math.sqrt(this.X * this.X + this.Y * this.Y);
  }

  get unit() {
    return new Vector(this.X / this.length, this.Y / this.length);
  }

}

export default Vector;