
function ended(){
    document.location = 'underConstruction.html';
}


function jump(){
    var vid = document.getElementById("playingVideo");
    localStorage.currentTime = vid.currentTime;

    if (vid.currentTime > 240){
        document.location = 'breakdown.html#240';
        return;
    }
    if (vid.currentTime > 210){
        document.location = 'breakdown.html#210';
        return;
    }
    if (vid.currentTime > 180){
        document.location = 'breakdown.html#180';
        return;
    }
    if (vid.currentTime > 150){
        document.location = 'breakdown.html#150';
        return;
    }
    if (vid.currentTime > 120){
        document.location = 'breakdown.html#120';
        return;
    }
    if (vid.currentTime > 90){
        document.location = 'breakdown.html#90';
        return;
     }
     if (vid.currentTime > 60){
        document.location = 'breakdown.html#60';
        return;
     }
    if (vid.currentTime > 30){
        document.location = 'breakdown.html#30';
        return;
    }
    if (vid.currentTime >= 0){
        document.location = 'breakdown.html';
    }
}

function setStartVideo(){
    var vid = document.getElementById("playingVideo");
    vid.currentTime = localStorage.currentTime;
    localStorage.currentTime = 0;

}
