
document.getElementById("randomColorBtn").addEventListener("click", genRandomColor);
document.getElementById("randomGradientBtn").addEventListener("click", genRandomGradient);

function genRandomColor() {
    var rgb = "RGB(" + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + ")";
    document.getElementById("generatedSwatch").style.background = rgb;
    document.getElementById("generatedValues").innerHTML = rgb;
}

function genRandomGradient() {
    var angle = Math.floor(181 * Math.random());
    angle *= 1 == Math.floor(2 * Math.random()) ? 1 : -1;
    var colOne = "RGB(" + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + ")"
      , colTwo = "RGB(" + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + ")"
      , gradientString = "linear-gradient(" + angle + "deg," + colOne + "," + colTwo + ")"
      , gradOutput = "<div id='gradient-info'>" + colOne + "<br>" + colTwo + "<br><span>Angle: " + angle + "&deg;</span></div>";
      
    document.getElementById("generatedSwatch").style.background = gradientString,
    document.getElementById("generatedValues").innerHTML = gradOutput;
}