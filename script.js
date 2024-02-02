var noButtonCount = 0;

function nextPage() {
    window.location.href = "yesbutton.html";
}

function moveButton() {
    noButtonCount++;

    if (noButtonCount >= 3) {
        window.location.href = "nobutton.html";
    }

    else {
        var nobutton = document.getElementById('nobutton');
        var buttonWidth = nobutton.offsetWidth;
        var buttonHeight = nobutton.offsetHeight;

        var maxX = window.innerWidth - buttonWidth;
        var maxY = window.innerHeight - buttonHeight;

        var x = Math.random() * maxX;
        var y = Math.random() * maxY;

        nobutton.style.position = 'absolute';
        nobutton.style.left = `${x}px`;
        nobutton.style.top = `${y}px`;
    }
}

function goBack() {
    window.history.back();
}