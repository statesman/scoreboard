define(['iosOverlay', 'Spinner'], function(iosOverlay, Spinner) {

  // Setup a spin.js spinner to use on the overlay
  var opts = {
    length: 11,
    width: 5,
    radius: 17,
    color: '#FFF',
    hwaccel: true,
    top: 'auto',
    left: 'auto'
  };
  var target = document.createElement("div");

  var spinner = new Spinner(opts).spin(target);

  var loader = {
      on: function() {
        this.overlay = iosOverlay({
          text: "Loading",
          spinner: spinner
        });
      },

      off: function() {
        if(typeof this.overlay !== "undefined") {
          this.overlay.hide();
        }
      }
  };

  return loader;

});
