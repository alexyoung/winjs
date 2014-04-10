// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/p/?linkid=232509
(function () {
  'use strict';

  var app = WinJS.Application;

  app.onactivated = function(args) {
    args.setPromise(WinJS.UI.processAll());

    var helloButton = document.getElementById('helloButton');
    helloButton.addEventListener('click', buttonClickHandler, false);
  };

  function buttonClickHandler(eventInfo) {
    var userName = document.getElementById('nameInput').value;
    var greetingString = 'Hello, ' + userName + '!';
    document.getElementById('greetingOutput').innerText = greetingString;
  }

  app.start();
})();
