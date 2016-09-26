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
            window.setTimeout(function hi(){chrome.notifications.create(options)}, 90000);
        }
    }
}

$(document).ready(function() {
    $("#add-blocked-website").on("keydown", function search(e) {
        if(e.keyCode == 13) {
            $('#blocked-table tr:last').after('<tr><td>' + $(this).val() + '</td></tr>');
            $(this).val("");
            $("#added-website-success").removeClass("hidden");
        }
    });

    $("#save-settings").click(function(event) {
        event.preventDefault();
        $("#saved-settings-success").removeClass("hidden");
        $('html, body').animate({ scrollTop: 0 }, 0);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});
