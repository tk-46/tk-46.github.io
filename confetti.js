var colors = ["#1D3DA0", "#f3d127", "#df6310", "#13b428", "#1331b4", "#3170fa", "#faaa31", "#e26b09", "#9e3116", "#9e167c", "#169e7c", "#cc5c12", "#12b0cc"];

var confetti = [];

var confettiAmount = 800;

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
var stop = false;
var waveAngle = 0;
var speed = 2;
var frameInterval = 10;
var lastTimeFrame = Date.now();
var totalTime = 5500;

var animationFrame = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
window.oRequestAnimationFrame ||
window.msRequestAnimationFrame;

function startAnimation () {
    window.requestAnimationFrame (function() {
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            return window.setTimeout(callback, frameInterval);
        };

    });

    var width = window.innerWidth;
    var height = window.innerHeight;

    setCanvas();

    var count = confettiAmount;


    while (confetti.length < count) {
        confetti.push(setConfettiPiece({}, width, height));
    }

    runConfetti();
    window.setTimeout(function() {
        stop = true;
    }, totalTime);
    

}
function runConfetti() {

    if(confetti.length === 0) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        animationTimer = requestAnimationFrame(runConfetti);
    } else {
        var time = Date.now();

        var change = time - lastTimeFrame;

        if(!animationFrame || change > frameInterval) {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            updateConfetti();
            drawConfetti();
            lastTimeFrame = time - (change % frameInterval);
        }

        animationTimer = requestAnimationFrame(runConfetti);
    }
}

function setCanvas() {
    canvas.style.zIndex = "9999999";
    canvas.style.top = "0px";
    canvas.style.position = "fixed";
    canvas.style.display = "block";
    canvas.style.pointerEvents = "none";

    document.body.prepend(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    window.addEventListener("resize", function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }, true);

}

function getRandomColor() {

    return colors[Math.floor(Math.random() * colors.length)]
}

function setConfettiPiece(piece, width, height) {
    piece.color = getRandomColor();
    piece.x = Math.random() * width;
    piece.y = Math.random() * height - height;
    piece.tilt = Math.random() * 9;
    piece.height = Math.random() * 10 + 5;
    piece.width = Math.random() * 6 + 3;
    piece.tiltAngleIncrement = Math.random() * .07 + .05;
    piece.tiltAngle = Math.random() * Math.PI;

    return piece;
}

function drawConfetti() {
    var confettiPiece;
    var x, y, x2;

    for(var i = 0; i < confetti.length; i++) {
        confettiPiece = confetti[i];
        context.beginPath();
        context.lineWidth = confettiPiece.height;
        x2 = confettiPiece.x + confettiPiece.tilt;
        x = x2 + confettiPiece.width / 2;

        y = confettiPiece.y + confettiPiece.tilt + confettiPiece.height / 2;

        context.strokeStyle = confettiPiece.color;
        context.moveTo(x, confettiPiece.y);
        context.lineTo(x2, y);
        context.stroke();
    }
}

function updateConfetti() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var confettiPiece;

    waveAngle += .01;

    for(var i = 0; i < confetti.length; i++) {
        confettiPiece = confetti[i];
        if(confettiPiece.y < -15) {
            confettiPiece.y = height + 100;
        } else {
            confettiPiece.tiltAngle += confettiPiece.tiltAngleIncrement;
            confettiPiece.x += Math.sin(waveAngle) - .5;
            confettiPiece.y += (Math.cos(waveAngle) + confettiPiece.height + speed) * .5;

            confettiPiece.tilt = Math.sin(confettiPiece.tiltAngle) * 15;
        }
        if(confettiPiece.x > width + 20 || confettiPiece.x < -20 || confettiPiece.y > height) {
            if(!stop && confetti.length <= confettiAmount) {
                setConfettiPiece(confettiPiece, width, height);
            } else {
                confetti.splice(i, 1);
                i--;
            }
        }
    }
}
