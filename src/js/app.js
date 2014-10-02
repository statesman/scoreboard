require(['add-to-home-screen', 'Templates', 'collections/scores', 'views/scoreboard'], function(addToHomeScreen, JST, Scores, Scoreboard) {

  // Trigger Add to Homescreen prompt
  addToHomescreen({
    skipFirstVisit: true,
    maxDisplay: 1
  });

  $(function() {

    // Grab the week selector and team search box
    var week = $('#week'),
        searchBox = $('#team-search');

    // Setup instances of our Backbone collection and view
    var scores = new Scores({date: week.val()});
    var scoreboard = new Scoreboard({collection: scores, el: '#scores'});

    // Fetch the data from TeamPlayer and unhide the interface when done
    scores.fetch({
      success: function() {
        $('.hide').removeClass('hide');
      }
    });

    // Re-fetch every time the week selector is toggled
    week.on('change', function() {
      scores.setDate(week.val());
      scores.fetch();
      searchBox.val('');
    });

    // Trigger a search on the scores collection when someone
    // enters text into the team search box
    searchBox.on('keyup', function() {
      scores.search(searchBox.val());
    });

    // Fetch high school sports stories from Medley
    $.getJSON('list.php?count=8', function(data) {
      var html = JST.stories(data);
      $('#stories').html(html);
    });

    // Setup share buttons
    $('#share-buttons').on('click', 'a', function(e) {
      var url = $(this).attr('href');
      window.open(url, 'share', 'height=400,width=600');
      e.preventDefault();
    });

  });

});
