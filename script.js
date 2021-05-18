var buttonEvolution = document.getElementById('button_evolution');
var buttonFire = document.getElementById('button_fire');
var buttonWings = document.getElementById('button_wings');
var video = document.getElementById('video');


buttonEvolution.addEventListener('click', playEvolution);
buttonFire.addEventListener('click', playFire);
buttonWings.addEventListener('click', playWings);

function playEvolution() {
    video.src = "videos/background-evolution.mp4";
    console.log('Run Evolution');
}

function playFire() {
    video.src = "videos/background-fire.mp4";
    console.log('Run Fire');
}

function playWings() {
    video.src = "videos/background-wings.mp4";
    console.log('Run Wings');
}