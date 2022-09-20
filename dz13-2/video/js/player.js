
function init() {
    
    media = document.getElementById("media");
    play = document.getElementById("play");
    mute = document.getElementById("mute");
    bar = document.getElementById("bar");
    progress = document.getElementById("progress");
    volume = document.getElementById("volume");
    btn = document.getElementById("media_btn");

    play.addEventListener("click",push);
    media.addEventListener("click",push);
    mute.addEventListener("click",sound);
    btn.addEventListener("click",push);
    

}

function push() {

    if (!media.paused && !media.ended) {
    media.pause();
    play.innerHTML ="Play";
    document.body.append(btn);
    clearInterval(loop);


    }

    else {
    media.play();
    play.innerHTML ="Pause";
    setTimeout(function() {btn.remove()}, 0);  
    loop = setInterval(myStatus, 1000);


    }

}

function myStatus() {

    let max = 400;
    // необходимо привязать продолжительность клипа к длине полоски progress и текущее время воспроизведения к т//екущему  положению полоски progress
    // использовать пропорцию //currentTime, duration	
}





function sound() {
    if (media.muted) {
    media.muted=false;
    mute.setAttribute("class", "muteOn");


    // mute.style =`
    // background: #fff;
    // color: rgb(12, 12, 12)
    // ` 
     }
    else {
    media.muted=true;
    mute.setAttribute("class", "muteOff")


    // mute.style =`
    // // background: #f00;
    // // color: #fff;
    // // `
    }


}




addEventListener("load",init);
