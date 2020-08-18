import Vector from './Vector.js';

class MovingCursor {
  constructor(elementName, x, y, w, h) {
    this.el = document.querySelector(elementName);
    this.location = new Vector(x || 0, y || 0);
    this.velocity = new Vector(0,0);
    this.acceleration = new Vector(0,0);
    this.height = h || 20;
    this.width = w || 20;
    this.rate = 0.3;
    this.delta = new Vector(0,0);
  }

  get x() {
    return this.location.x;
  }

  get y() {
    return this.location.y;
  }

  setLocation(x,y) {
    this.location.set(x,y);
  }

  move() {
    // this.el.transform = `translate(${this.location.x - this.w/2},${this.location.y - this.h/2})`;
    this.el.setAttribute('cx', this.location.x);
    this.el.setAttribute('cy', this.location.y);
  }

  update() {
    
  }

  follow(vec) {
    // debugger;
    // get unit vector toward vec
    // u - v = w
    // w = vector from v to u
    this.delta.set(vec.x - this.location.x, vec.y - this.location.y);
    this.delta.mult(this.rate);
    this.location.add(this.delta);
  }
}

export default MovingCursor;