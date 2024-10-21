let buttonSound = document.querySelector(".sound")
let video = document.querySelector(".main-video")
let info = document.querySelector(".information")
let infoBox = document.querySelector(".box")


buttonSound.addEventListener("click", clickSom)
info.addEventListener("click", showInformation)
infoBox.addEventListener("click", hideInformation)


function clickSom() {

    if (video.muted) {
        video.muted = false
    } else {
        video.muted = true
    }

}

function showInformation() {
    infoBox.style.display = "block"
}

function hideInformation() {
    infoBox.style.display = "none"
}



