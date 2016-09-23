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

/*var progressBar1 = document.createElement('div');
  progressBar1.style.height = '5px';
  progressBar1.style.width = '20%';
  progressBar1.style.backgroundColor = 'blue';
  progressBar1.style.position='fixed';
  progressBar1.style.zIndex=10;
  progressBar1.style.bottom=0;
  progressBar1.style.left=0;
  document.body.insertAdjacentElement('beforeend',progressBar1);

var progressBar2 = document.createElement('div');
  progressBar2.style.height = '5px';
  progressBar2.style.width = '30%';
  progressBar2.style.backgroundColor = 'orange';
  progressBar2.style.position='fixed';
  progressBar2.style.zIndex=10;
  progressBar2.style.bottom=0;
  progressBar2.style.left='20%';
  document.body.insertAdjacentElement('beforeend',progressBar2);

var progressBar3 = document.createElement('div');
  progressBar3.style.height = '5px';
  progressBar3.style.width = '50%';
  progressBar3.style.backgroundColor = 'green';
  progressBar3.style.position='fixed';
  progressBar3.style.zIndex=10;
  progressBar3.style.bottom=0;
  progressBar3.style.left='50%';
  document.body.insertAdjacentElement('beforeend',progressBar3);
  */
function click(e) {
    var elementId = this.id;
    if (elementId == "start-button") {
        chrome.tabs.executeScript(null, {code: addTintFunction});
    } else if (elementId == "end-button") {
        chrome.tabs.executeScript(null, {code: removeTintFunction});
    } else if (elementId == "settings-button") {
        chrome.runtime.openOptionsPage();
    }
    
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    var divs = document.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', click);
    }
});
