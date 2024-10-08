let highestZIndex = 100;

document.querySelectorAll('.window').forEach(windowElement => {
    windowElement.addEventListener('mousedown', function() {
        highestZIndex++;
        windowElement.style.zIndex = highestZIndex;
    });

    const titleBar = windowElement.querySelector('.title-bar');
    titleBar.addEventListener('mousedown', function(e) {
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

        titleBar.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
        });

        titleBar.ondragstart = function() {
            return false;
        };
    });
});

function openWindow(id) {
    const windowElement = document.getElementById(id);
    if (windowElement) {
        windowElement.style.display = 'block';
        highestZIndex++;
        windowElement.style.zIndex = highestZIndex;
    }
}

function closeWindow(id) {
    const windowElement = document.getElementById(id);
    if (windowElement) {
        windowElement.style.display = 'none';
    }

}