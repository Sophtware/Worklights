var addTintFunction = 'function tint(){\
  var className = "tint";\
  var regex = new RegExp("(^"+className+")|( "+className+")");\
  if(! document.body.className.match(regex) ){\
    document.body.className += " " + className;\
  }\
}\
tint();'

var removeTintFunction = 'function removeTint(){\
  var className = "tint";\
  var regex = new RegExp("(^"+className+")|( "+className+")");\
  if(! document.body.className.match(regex) ){\
    document.body.className += " " + className;\
  }\
}\
removeTint();'

function click(e) {
    var elementId = this.id;
    if (elementId == "start-button") {
        chrome.tabs.executeScript(null, {code: addTintFunction});
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
