document.querySelectorAll('.window .title-bar').forEach(bar => {
    bar.addEventListener('mousedown', function(e) {
        let windowElement = bar.parentElement;
        let shiftX = e.clientX - windowElement.getBoundingClientRect().left;
        let shiftY = e.clientY - windowElement.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            windowElement.style.left = pageX - shiftX + 'px';
            windowElement.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        bar.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
            bar.onmouseup = null;
        });

        bar.ondragstart = function() {
            return false;
        };
    });
});

function openWindow(id, initialX = 350, initialY = 100) {
    const windowElement = document.getElementById(id);
    windowElement.style.display = 'block';
    windowElement.style.left = initialX + 'px';
    windowElement.style.top = initialY + 'px';
}

function closeWindow(id) {
    document.getElementById(id).style.display = 'none';
    // document.getElementById("game-container").style.display = 'none';
}
