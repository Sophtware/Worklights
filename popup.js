var insertionCode = 'var className = "tint";\
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

function click(e) {
//  chrome.tabs.executeScript(null, {file: chrome.extension.getURL("js/tint.js")});
  chrome.tabs.executeScript(null, {code: insertionCode});
    window.close();
}


document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
