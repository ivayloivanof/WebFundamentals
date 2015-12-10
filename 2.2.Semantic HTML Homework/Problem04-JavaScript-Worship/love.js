window.onload = function(){

    var canvas = document.getElementById("Canvas");
    canvas.width = 240;
    canvas.height = 260;

    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("I love JavaScript", 10, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "rgb(241, 218, 78)";
    ctx.fillRect(50, 80, 134, 134);
    ctx.stroke();

    var jsText = new Image();
    jsText.src = 'js.png';
    ctx.drawImage(jsText, 78, 135);
    ctx.update();
}