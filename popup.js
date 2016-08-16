// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function click(e) {
  chrome.tabs.executeScript(null,
      {code:"\
	if (! document.body.className.match(/(^tint)|( tint)/) ){\
	  document.body.className += \" tint\";\
	}\
    "});
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
//<div style="background-color: red; height:100%; width:100%; position: fixed; z-index: -1000"></div>
