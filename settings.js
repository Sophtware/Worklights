var opts = {
  type: "basic",
  title: "Worklights Reminder",
  message: "You have finished your current routine. Start another default routine?",
  iconUrl: "icon.png",
  buttons: [{title: "Yes"}, {title: "No"}]
}

document.addEventListener('DOMContentLoaded', function () {
    chrome.notifications.create("test", opts, function(){});
});
