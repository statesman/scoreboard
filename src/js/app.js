require(['add-to-home-screen', 'Templates', 'collections/scores', 'views/scoreboard', 'views/searchbox', 'views/weekselect'], function(addToHomeScreen, JST, Scores, Scoreboard, Searchbox, Weekselect) {

  // Trigger Add to Homescreen prompt
  addToHomescreen({
    skipFirstVisit: true,
    maxDisplay: 1
  });

  $(function() {

    // Setup instances of our Backbone collection and views
    var scores = new Scores({date: $('#week').val()});
    var scoreboard = new Scoreboard({collection: scores, el: '#scores'});
    var searchbox = new Searchbox({collection: scores, el: '#team-search'});
    var weekselect = new Weekselect({collection: scores, el: '#week'});

    // Fetch the data from TeamPlayer
    scores.fetch();

    // Fetch high school sports stories from Medley
    $.getJSON('list.php?count=8', function(data) {
      var html = JST.stories(data);
      $('#stories').html(html);
    });

    // Setup share buttons
    $('#share-buttons a').click(function(e) {
      if(window.open(this.href, '', 'height=400,width=600')) {
        e.preventDefault();
      }
    });

  });

});
