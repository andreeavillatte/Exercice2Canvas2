var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");



ctx.fillStyle="#0000FF";
ctx.fillRect(0,0,400,400);

// // Coupole
ctx.beginPath();            
ctx.fillStyle = "#FFFFFF";
ctx.moveTo(150,160);
ctx.quadraticCurveTo(200,40,250,160);
ctx.fill();


// Partea de sus
ctx.beginPath();            
ctx.fillStyle = "#E0E1F3";
ctx.moveTo(40,200);
ctx.quadraticCurveTo(200,80,360,200);
ctx.fill();

// Partea de jos
ctx.beginPath();            
ctx.fillStyle = "#E0E1F3";
ctx.moveTo(40,200);
ctx.quadraticCurveTo(200,320,360,200);
ctx.fill();