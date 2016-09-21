var notification-options = {
    type: "basic",
    title: "Worklights Reminder",
    message: "You have finished your current routine. Start another default routine?",
    iconUrl: "icon.png",
    buttons: [{title: "Yes"}, {title: "No"}]
}

function click(e) {
    var elementId = this.id;
    if (elementId == "show-notification") {
        chrome.notifications.create(notification-options, function(){});
    }
    
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});