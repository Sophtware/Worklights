var addTintFunction = 'var className = "tint animated infinite bounce";\
	var regex = new RegExp("(^"+className+")|( "+className+")");\
	function activateTint(){\
	  if(! document.body.className.match(regex) ){\
	    document.body.className += " " + className;\
	  }\
	}\
	function tint(){\
	  window.setTimeout(activateTint,3000);\
	}\
	\
	tint();'

var removeTintFunction = 'function removeTint(){\
  document.body.className -= "tint animated infinite bounce";\
      }\
      removeTint();'

      var options = {
    type: "basic",
    title: "Worklights Reminder",
    message: "You have finished your current routine. Start another default routine?",
    iconUrl: "icon.png",
    buttons: [{title: "Yes"}, {title: "No"}]
}

function click(e) {
    var elementId = this.id;
    if (elementId == "start-button") {
        chrome.tabs.executeScript(null, {code: addTintFunction});
    } else if (elementId == "end-button") {
        chrome.tabs.executeScript(null, {code: removeTintFunction});
    } else if (elementId == "settings-button") {
        chrome.runtime.openOptionsPage();
    } else if (elementId == "block-button") {
        chrome.tabs.executeScript(null, {code: 'alert("Success! This website will be blocked in the future.");'});
    }
    
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});
