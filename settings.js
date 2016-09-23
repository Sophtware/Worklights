var options = {
    type: "basic",
    title: "Worklights Reminder",
    message: "You have finished your current routine. Start another default routine?",
    iconUrl: "icon.png",
    buttons: [{title: "Yes"}, {title: "No"}]
}

function click(e) {
    var elementId = this.id;
    if (elementId == "show-notifications") {
        if (document.getElementById('show-notifications-checkbox').checked) {
            chrome.notifications.create(options);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});