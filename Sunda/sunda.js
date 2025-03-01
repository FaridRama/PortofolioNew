document.addEventListener("DOMContentLoaded", function() {
    var notification = document.getElementById('welcome-notification');
    notification.classList.add('show');

    setTimeout(function() {
        notification.classList.remove('show');
    }, 3000);
});