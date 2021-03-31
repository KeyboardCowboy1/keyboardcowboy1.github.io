
//calling a few functions on page load
window.addEventListener("load", init, false);

function init() {
    //collapse the divs
    toggleDesignVis();
    toggleDevVis();
    toggleAboutVis();
    
    //Generate a random color on load so the swatch div isn't just white
    genRandomColor();
};

/*This section is for the colour/gradient generator widget */
document.getElementById("randomColorBtn").addEventListener("click", genRandomColor);
document.getElementById("randomGradientBtn").addEventListener("click", genRandomGradient);

//Generate RGB values and output in the swatch div
function genRandomColor() {
    var rgb = "RGB(" + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + ")";
    document.getElementById("generatedSwatch").style.background = rgb;
    document.getElementById("generatedValues").innerHTML = rgb;
}

//Generated RGB values for a gradient and output in the swatch div
function genRandomGradient() {
    var angle = Math.floor(181 * Math.random());
    angle *= 1 == Math.floor(2 * Math.random()) ? 1 : -1;
    var colOne = "RGB(" + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + ")"
      , colTwo = "RGB(" + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + "," + [Math.floor(256 * Math.random())] + ")"
      , gradientString = "linear-gradient(" + angle + "deg," + colOne + "," + colTwo + ")"
      , gradOutput = "<div id='gradient-info'>" + colOne + " - " + colTwo + "<br><span>ANGLE: " + angle + "&deg;</span></div>";

    document.getElementById("generatedSwatch").style.background = gradientString,
    document.getElementById("generatedValues").innerHTML = gradOutput;


}

/*This section is for toggling the visibility of different divs */

document.getElementById("designToggle").addEventListener("click", toggleDesignVis);

function toggleDesignVis() {
    var designDiv = document.getElementById("designContainer");
    if (designDiv.style.display === "none") {
        designDiv.style.display = "block";
    } else {
        designDiv.style.display = "none";
    }

}

document.getElementById("devToggle").addEventListener("click", toggleDevVis);

function toggleDevVis() {
    var devDiv = document.getElementById("devContainer");
    if (devDiv.style.display === "none") {
        devDiv.style.display = "block";
    } else {
        devDiv.style.display = "none";
    }


}

document.getElementById("aboutToggle").addEventListener("click", toggleAboutVis);

function toggleAboutVis() {
    var aboutDiv = document.getElementById("aboutContainer");
    if (aboutDiv.style.display === "none") {
        aboutDiv.style.display = "block";
    } else {
        aboutDiv.style.display = "none";
    }

}

