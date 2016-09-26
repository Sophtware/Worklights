var options = {
    type: "basic",
    title: "Worklights Reminder",
    message: "You have finished your current routine. Start another default routine?",
    iconUrl: "icon.png",
    buttons: [{title: "Yes"}, {title: "No"}]
}

var lastSelectedAnimation = "";

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

    $("#show-notifications-checkbox").click(function() {
        if ($("#show-notifications-checkbox").is(':checked')) {
            window.setTimeout(function hi(){chrome.notifications.create(options)}, 10000);
        }
    });

    $("#select-animation").change(function() {
        $(document.body).removeClass("animated " + lastSelectedAnimation);

        // Update the last selected animation
        lastSelectedAnimation = $(this).val();

        if (lastSelectedAnimation != "none") {
            $(document.body).addClass("animated " + lastSelectedAnimation);
        }
    });
});

chrome.notifications.onButtonClicked.addListener(function(notifId, btnIdx) {
    if (btnIdx === 0) {
        chrome.notifications.clear(notifId);
    } else if (btnIdx === 1) {
        chrome.notifications.clear(notifId);
    }
});