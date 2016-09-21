var addTintFunction = 'function tint(){\
    var className = "tint";\
    var regex = new RegExp("(^"+className+")|( "+className+")");\
    if(! document.body.className.match(regex) ){\
        document.body.className += " " + className;\
    }\
}\
tint();'

var removeTintFunction = 'function removeTint(){\
    document.body.className -= "tint";\
}\
removeTint();'

var opts = {
  type: "basic",
  title: "Primary Title",
  message: "Primary message to display",
  iconUrl: "icon.png"
}

function click(e) {
    var elementId = this.id;
    if (elementId == "start-button") {
        chrome.tabs.executeScript(null, {code: addTintFunction});
        chrome.notifications.create("test", opts);
    } else if (elementId == "end-button") {
        chrome.tabs.executeScript(null, {code: removeTintFunction});
    }
    
    window.close();
}


document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});
