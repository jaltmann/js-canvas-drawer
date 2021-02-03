function degreesToRadians(degrees)
{
  return degrees * (Math.PI/180);
}

function radiansToDegrees(radians)
{
  return radians * (180/Math.PI);
}

var c = document.getElementById("c");
var ctx = c.getContext("2d");

ctx.clearRect(0, 0, c.width, c.height);

ctx.save();
ctx.fillStyle = null;
ctx.strokeStyle = 'gold';
ctx.lineWidth = 2;
let pathExt = new PathExt();
pathExt.moveTo(100, 100);
pathExt.lineTo(300, 300);
pathExt.lineTo(300, 100);
pathExt.lineTo(100, 100);

ctx.stroke(pathExt.getPath());
ctx.restore();

ctx.fillStyle = 'red';
ctx.strokeStyle = '#00FF00';
ctx.lineWidth = 5;


ctx.beginPath();
ctx.arc(500, 500, 100, degreesToRadians(0), degreesToRadians(180));
ctx.fill();

ctx.beginPath();
ctx.arc(500, 500, 100, degreesToRadians(90), degreesToRadians(270));
ctx.fill();


ctx.beginPath();



ctx.arc(500, 500, 100, degreesToRadians(0), degreesToRadians(270));
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'silver';
ctx.strokeStyle = 'orange';
ctx.lineWidth = 7;
ctx.rect(500, 100, 175, 175);
ctx.fill();
ctx.stroke();


ctx.lineWidth = 1;
ctx.fillStyle = 'gold';
/*ctx.beginPath();
ctx.arc(250, 500, 100, degreesToRadians(0), degreesToRadians(360));
ctx.stroke();

ctx.beginPath();
ctx.arc(250, 500, 30, degreesToRadians(0), degreesToRadians(360));
ctx.stroke();*/

let starPoints = [];
let distanceInDegree = 360/5;
for (let i = 0; i < 5; i++)
{
  let x = 250 + Math.cos(degreesToRadians(distanceInDegree*i)) * 100;
  let y = 500 + Math.sin(degreesToRadians(distanceInDegree*i)) * 100;
  starPoints.push({x: x, y: y});

  let redianInner = degreesToRadians(distanceInDegree*i+(distanceInDegree/2));
  let xInner = 250 + Math.cos(redianInner) * 30;
  let yInner = 500 + Math.sin(redianInner) * 30;
  starPoints.push({x: xInner, y: yInner});
}

ctx.beginPath();
var startPoint = false;
while(starPoints.length > 0)
{
  let p = starPoints.shift();
  if (startPoint == false)
  {
    startPoint = {x: p.x, y: p.y};
  }
  ctx.lineTo(p.x, p.y);

}
ctx.lineTo(startPoint.x, startPoint.y);
ctx.fill();
ctx.stroke();


document.getElementById('btn-download').addEventListener("click", function(e) {
    var canvas = document.querySelector('#c');

    var dataURL = canvas.toDataURL("image/jpeg", 0.4);

    downloadImage(dataURL, 'programmiertes-bild.jpg');
});

// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}
