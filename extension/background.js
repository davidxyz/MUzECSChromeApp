chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('serialmonitor.html', {
    'width': 360,
    'height': 520
  });
});
