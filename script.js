document.getElementById('heart').addEventListener('click', function() {
    document.getElementById('popup').classList.add('show');
    var audio = document.getElementById('popup-audio');
    if(audio) {
        audio.currentTime = 0;
        audio.play();
    }
});

// Helper function to show next section
function showNext(currentId, nextId) {
    document.getElementById(currentId).style.display = 'none';
    document.getElementById(nextId).style.display = 'block';
}

// Add event listeners for each next button
document.getElementById('next-btn-1').addEventListener('click', function() {
    showNext('letter-text', 'image-text-1');
});
document.getElementById('next-btn-2').addEventListener('click', function() {
    showNext('image-text-1', 'image-text-2');
});
document.getElementById('next-btn-3').addEventListener('click', function() {
    showNext('image-text-2', 'image-text-3');
});
document.getElementById('next-btn-4').addEventListener('click', function() {
    showNext('image-text-3', 'image-text-4');
});
document.getElementById('next-btn-5').addEventListener('click', function() {
    showNext('image-text-4', 'image-text-5');
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('show');
    // Optionally reset to first letter for next time:
    document.getElementById('letter-text').style.display = 'block';
    document.getElementById('image-text-1').style.display = 'none';
    document.getElementById('image-text-2').style.display = 'none';
    document.getElementById('image-text-3').style.display = 'none';
    document.getElementById('image-text-4').style.display = 'none';
    document.getElementById('image-text-5').style.display = 'none';
});