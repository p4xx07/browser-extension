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
    skipButton.onclick = record;
}

function record(){
    startTime = video.currentTime;
    console.log(startTime);
    skipButton.onclick = stopRecord;
}