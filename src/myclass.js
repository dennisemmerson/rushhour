export class Car {
    constructor(x, y, type, length, colour) {
      this.position = [];
      this.type = type;
      this.colour = colour;
      this.isActiveCar = false;
      if (type === "h") {
        this.position.push([x, y]);
        for (let i = 1; i < length; i++) {
          this.position.push([x + i, y]);
        }
      }
      if (type === "v") {
        this.position.push([x, y]);
        for (let i = 1; i < length; i++) {
          this.position.push([x, y+i]);
        }
      }
    }
  }