
let heronsAreaButton = document.getElementById("calculateButton")
heronsAreaButton.addEventListener("click", calculateAreaHerons)

function calculateAreaHerons() {
    var a = parseFloat(document.getElementById("sideOne").value)
    var b = parseFloat(document.getElementById("sideTwo").value)
    var c = parseFloat(document.getElementById("sideThree").value)
    var s = ((a + b + c)/2).toFixed(2)
    console.log(s)

    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2)
    console.log(area)
    document.getElementById("heronsAnswer").innerHTML = area
}
