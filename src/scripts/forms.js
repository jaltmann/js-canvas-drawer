class Forms {

  constructor() {

  }

  static degreeToRadian(degree)
  {
    return degree * (Math.PI / 180);
  }

  static roundRect(ctx, x, y, width, height, radius = 5) {

    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }

    let pathExt = new PathExt();

    pathExt.moveTo(x + radius.tl, y);
    pathExt.lineTo(x + width - radius.tr, y);
    pathExt.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    pathExt.lineTo(x + width, y + height - radius.br);
    pathExt.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    pathExt.lineTo(x + radius.bl, y + height);
    pathExt.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    pathExt.lineTo(x, y + radius.tl);
    pathExt.quadraticCurveTo(x, y, x + radius.tl, y);

    return {path: pathExt.getPath(), length: pathExt.length};

  }

  static pokeball(x, y, innerRadius, outerRadius) {
    let pathExt = new PathExt();
    //pathExt.arc(x, y, innerRadius, Math.PI, Math.PI/2);
    //pathExt.arc(x, y, outerRadius, Math.PI/2, Math.PI);
    pathExt.arc(x, y, innerRadius, this.degreeToRadian(180), this.degreeToRadian(90));
    pathExt.arc(x, y, outerRadius, this.degreeToRadian(90), this.degreeToRadian(180));
    return {path: pathExt.getPath(), length: pathExt.length};
  }

  static star(x, y, innerRadius, outerRadius) {
    let points = [];
    for (var i = 0 ; i < 5; i++)
    {
      points.push({x: parseInt(x + outerRadius * Math.cos(this.degreeToRadian(72*i))), y: parseInt(y + outerRadius * Math.sin(this.degreeToRadian(72*i)))});
      points.push({x: parseInt(x + innerRadius * Math.cos(this.degreeToRadian((72*i)+36))), y: parseInt(y + innerRadius * Math.sin(this.degreeToRadian((72*i)+36)))});
    }

    let pathExt = new PathExt();
    while (points.length > 0)
    {
      let point = points.shift();

      if (!pathExt.hasStartPoint())
      {
        pathExt.moveTo(point.x, point.y);
      }
      pathExt.lineTo(point.x, point.y);
    }
    pathExt.closePath();

    return {path: pathExt.getPath(), length: pathExt.length};
  }
}
