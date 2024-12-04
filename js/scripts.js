document.getElementById("button").onclick = function() {
    document.getElementById("button2").style.background = "red";
    document.getElementById("button2").style.display = "inline";
    document.getElementById("crossbar").style.display = "inline";
}


document.getElementById("crossbar").onclick = function() {
    document.getElementById("button2").style.display = "none";
    document.getElementById("crossbar").style.display = "none";
}


document.getElementById("iconbar").onclick = function() {
    document.getElementById("details").style.background = "yellow";
    document.getElementById("details").style.display = "inline";
    document.getElementById("cross").style.display = "inline";
}

document.getElementById("cross").onclick = function() {
    document.getElementById("details").style.display = "none";
    document.getElementById("cross").style.display = "none";
}