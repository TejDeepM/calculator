
function calculateAreaHerons() {
    var a = parseFloat(document.getElementById("sideOne").value)
    var b = parseFloat(document.getElementById("sideTwo").value)
    var c = parseFloat(document.getElementById("sideThree").value)
    var s = ((a + b + c)/2).toFixed(2)

    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2)
    document.getElementById("heronsAnswer").innerHTML = area.toString()
}

function calculateAreaHalfbh() {
    var b = parseFloat(document.getElementById("base").value).toFixed(2)
    var h = parseFloat(document.getElementById("height").value).toFixed(2)
    var area = (b*h)/2

    document.getElementById("halfbhAnswer").innerHTML = area.toString()
}
