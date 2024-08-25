function updateClock() {
    const clockElement = document.getElementById('clock');
    if (!clockElement) {
        console.error('Clock element not found');
        return;
    }
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    const timeString = `${hours}:${minutes} ${ampm}`;
    clockElement.textContent = timeString ? timeString : '00:00';
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the time immediately
