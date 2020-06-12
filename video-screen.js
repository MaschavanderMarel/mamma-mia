
function jump(){
    var vid = document.getElementById("playingVideo");
    document.location = 'breakdown.html#30';
    localStorage.currentTime = vid.currentTime;
    // alert(localStorage.currentTime);

    if (vid.currentTime > 30){
        document.location = 'breakdown.html#30';
    }
    if (vid.currentTime > 60){
       document.location = 'breakdown.html#60';
    }
    if (vid.currentTime > 120){
        document.location = 'breakdown.html#120';
    }
    if (vid.currentTime > 150){
        document.location = 'breakdown.html#150';
    }
    if (vid.currentTime > 180){
        document.location = 'breakdown.html#180';
    }
    if (vid.currentTime > 210){
        document.location = 'breakdown.html#210';
    }
    if (vid.currentTime > 240){
        document.location = 'breakdown.html#240';
    }
}

function setStartVideo(){
    var vid = document.getElementById("playingVideo");
    // alert(localStorage.currentTime);
    vid.currentTime = localStorage.currentTime;
    localStorage.currentTime = 0;

}
