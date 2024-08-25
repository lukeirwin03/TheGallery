document.addEventListener('DOMContentLoaded', () => {
    const trickWindow = document.getElementById('trick-window');
    const closeButton = trickWindow.querySelector('.close-button');

    closeButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Clone the trick window twice
        const clone1 = trickWindow.cloneNode(true);
        const clone2 = trickWindow.cloneNode(true);

        // Generate unique IDs for the new windows
        const uniqueId1 = 'trick-window-' + Date.now() + '-1';
        const uniqueId2 = 'trick-window-' + Date.now() + '-2';

        clone1.id = uniqueId1;
        clone2.id = uniqueId2;

        // Add the new windows to the document
        document.body.appendChild(clone1);
        document.body.appendChild(clone2);

        // Position the new windows randomly
        clone1.style.top = (Math.random() * 80) + 'vh';
        clone1.style.left = (Math.random() * 80) + 'vw';

        clone2.style.top = (Math.random() * 80) + 'vh';
        clone2.style.left = (Math.random() * 80) + 'vw';

        // Add the same event listener to the new close buttons
        clone1.querySelector('.close-button').addEventListener('click', (event) => {
            event.preventDefault();
            clone1.remove();
        });

        clone2.querySelector('.close-button').addEventListener('click', (event) => {
            event.preventDefault();
            clone2.remove();
        });
    });
});
