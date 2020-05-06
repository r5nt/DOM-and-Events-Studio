// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    let shuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);

    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", (event) => {
        if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight += 10000);
        }
    });

    let landing = document.getElementById("landing");
    landing.addEventListener("click", (event) => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight = 0);
        document.getElementById("rocket").style.marginTop = "0px";
        document.getElementById("rocket").style.marginLeft = "0px";
    });

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", (event) => {
        if (window.confirm("Confirm that you want to abort the mission.")) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight = 0);
            document.getElementById("rocket").style.marginTop = "0px";
            document.getElementById("rocket").style.marginLeft = "0px";
        }
    });

    let rocket = document.getElementById("rocket");
    let rocketX = 0;
    let rocketY = 0;
    rocket.style.position = "absolute";
    rocket.style.marginTop = rocketX + "px";
    rocket.style.marginLeft = rocketY + "px";

    let up = document.getElementById("up");
    up.addEventListener("click", (event) => {
        rocketY -= 10;
        rocket.style.marginTop = rocketY + "px";
        document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight += 10000);

    });

    let down = document.getElementById("down");
    down.addEventListener("click", (event) => {
        rocketY += 10;
        rocket.style.marginTop = rocketY + "px";
        document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight -= 10000);
    });

    let right = document.getElementById("right");
    right.addEventListener("click", (event) => {
        rocketX += 10;
        rocket.style.marginLeft = rocketX + "px";
    });

    let left = document.getElementById("left");
    left.addEventListener("click", (event) => {
        rocketX -= 10;
        rocket.style.marginLeft = rocketX + "px";
    });

}

window.onload = init;
