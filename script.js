const canvas=document.getElementById("el-canvas");
const ctx=canvas.getContext("2d");

//texto sin relleno

ctx.letterSpacing="10px";
ctx.font = "bold 40px serif"
ctx.strokeText("un texto aquí", 5, 240);

//texto con relleno
ctx.shadowColor="red";
ctx.shadowBlur=10;
ctx.font="italic 30px sans";
ctx.fillText("Otro texto", 5, 280);

//círculo
ctx.beginPath();
ctx.arc(320, 100, 30, 0, 2*Math.PI);
ctx.stroke();

//ellipse 
ctx.beginPath();
ctx.ellipse(310, 90, 5, 15, Math.PI / 4, 0, 2 *Math.PI);
ctx.stroke();

//otro círculo 
ctx.beginPath();
ctx.arc(220, 100, 30, 0, 2*Math.PI);
ctx.stroke();

//otro ellipse 
ctx.beginPath();
ctx.ellipse(220, 90, 5, 15, Math.PI / 4, 0, 2 *Math.PI);
ctx.stroke();


//arco
ctx.beginPath();
ctx.arc(280, 150, 50, 0, Math.PI);
ctx.stroke();
    


  




