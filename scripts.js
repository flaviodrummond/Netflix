let buttonSound = document.querySelector(".sound")
let video = document.querySelector(".main-video")
let info = document.querySelector(".information")
let infoBox = document.querySelector(".box")

info.addEventListener("click", showInformation)
infoBox.addEventListener("click", hideInformation)


window.addEventListener("load", clickSom)

function clickSom() {

   video.play()

   fadeInAudio(video, 5);

}

function showInformation() {
    infoBox.style.display = "block"
}

function hideInformation() {
    infoBox.style.display = "none"
}

function fadeInAudio(videoElement, duration) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const track = audioContext.createMediaElementSource(videoElement);
    const gainNode = audioContext.createGain();
    
    // Conecta o áudio do vídeo ao gainNode
    track.connect(gainNode).connect(audioContext.destination);

    // Define o volume inicial do vídeo como 0 (silencioso)
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    
    // Aumenta o volume até 1 (volume máximo) durante a duração especificada
    gainNode.gain.linearRampToValueAtTime(1, audioContext.currentTime + duration);
}


