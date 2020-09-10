console.log("working")
const skipButton = document.createElement("div", );
skipButton.setAttribute("id", "skip-sponsor-button");
skipButton.textContent = "Skip Sponsor"
setTimeout(function () {
        document.getElementsByTagName('ytd-video-owner-renderer')[0].appendChild(skipButton)
    },
    500
);
const video = document.getElementsByTagName('video')[0];

let startTime = 0;
let endTime = 0;
skipButton.onclick = record;

function stopRecord(){
    endTime = video.currentTime;
    console.log(endTime)
    skipButton.textContent = "Start Record"
    skipButton.classList.remove("pulse")
    skipButton.onclick = record;
    //TODO POST REQUEST TO SERVER
}

function record(){
    startTime = video.currentTime;
    skipButton.textContent = "Stop Recording"
    skipButton.classList.add("pulse")
    console.log(startTime);
    skipButton.onclick = stopRecord;
}