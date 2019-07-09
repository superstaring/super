class Point {
  public readonly x: number;
  public readonly y: number;
  public readonly radius: number;
  public readonly color: string;
  public readonly act?: boolean;

  public constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    act?: boolean
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.act = act;
  }

  public move(deltaX: number, deltaY: number) {
    const x = this.x + deltaX + this.radius < 558 ? this.x + deltaX : 558;
    const y = this.y + deltaY + this.radius < 558 ? this.y + deltaY : 558;
    return new Point(x, y, this.radius, this.color);
  }

  public changeColor(color: string) {
    return new Point(this.x, this.y, this.radius, color);
  }

  public changeRadius(radius: number) {
    return new Point(this.x, this.y, radius, this.color);
  }

  public changeAct(act: boolean) {
    return new Point(this.x, this.y, this.radius, this.color, act);
  }
}

export default Point;
