class PathExt {
  constructor() {
    this.path = new Path2D();
    this.length = 0;
    this.instructionQueue = [];
    this.startingPoint = false;
    this.currentPoint = false;
  }

  hasStartPoint()
  {
    return this.startingPoint != false;
  }

  moveTo(x, y)
  {
    this.startingPoint = {x: x, y: y};
    this.path.moveTo(x, y);
    this.currentPoint = 0;
  }

  lineTo(x, y)
  {
    this.path.lineTo(x, y);
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  {
    this.path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  }

  quadraticCurveTo(cpx, cpy, x, y)
  {
    this.path.quadraticCurveTo(cpx, cpy, x, y);
  }

  arc(x, y, radius, startAngle, endAngle, anticlockwise = false)
  {
    this.path.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  }

  arcTo(x1, y1, x2, y2, radius)
  {
    this.path.arcTo(x1, y1, x2, y2, radius);
  }

  ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise = false)
  {
    this.path.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
  }

  rect(x, y, width, height)
  {
    this.path.rect(x, y, width, height);
  }

  closePath()
  {
    this.path.closePath();
    return this.path;
  }

  getPath()
  {
    return this.path;
  }

}
