require(['add-to-home-screen', 'Templates', 'modules/router'], function(addToHomeScreen, JST, App) {

  // Trigger Add to Homescreen prompt
  addToHomescreen({
    skipFirstVisit: true,
    maxDisplay: 1
  });

  $(function() {

    // Fire up the Backbone app
    var app = new App();

    // Fetch high school sports stories from Medley
    $.getJSON('list.php?count=8', function(data) {
      var html = JST.stories(data);
      $('#stories').html(html);
    });

    // Make share buttons open in a new window
    $('#share-buttons a').click(function(e) {
      if(window.open(this.href, '', 'height=400,width=600')) {
        // Only deter the browser's default behavior (following
        // the <a> we're bound to) if the window actually opens
        e.preventDefault();
      }
    });

  });

});
