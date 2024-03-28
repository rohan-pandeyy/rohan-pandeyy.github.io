const videoElement = document.getElementById('projectVideo');
videoElement.play();
videoElement.addEventListener('ended', () => {
    videoElement.play();
});