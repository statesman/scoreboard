require(['add-to-home-screen', 'Templates', 'moment', 'collections/scores', 'views/scoreboard'], function(addToHomeScreen, JST, moment, Scores, Scoreboard) {

// Trigger Add to Homescreen prompt
addToHomescreen({
  skipFirstVisit: true,
  maxDisplayCount: 1
});

$(function() {

  // Fetch scores from TeamPlayer
  var week = $('#week'),
      searchBox = $('#team-search');
      scores = new Scores();

  var settings = {
    dataType: "jsonp",
    url: "http://teamplayer.statesman.com/web/gateway.php",
    cache: true,
    data: {
      site: "default",
      tpl: "TickerJSON_clone",
      Sport: 1
    },
  };

  var fetch = function(friday) {
    var dateObj = moment(friday, "YYYY-MM-DD");
    settings.data.StartDate = dateObj.subtract(1, 'days').format('YYYY-MM-DD');
    settings.data.EndDate = dateObj.add(2, 'days').format('YYYY-MM-DD');
    $.ajax(settings)
    .done(function(data) {
      scores.set(data);
      var scoreboard = new Scoreboard({collection: scores, el: '#scores'});
      scoreboard.render();
      $('.hide').removeClass('hide');
    });
  };

  fetch(week.val());
  week.on('change', function() {
    fetch(week.val());
    searchBox.val('');
  });

  // Fetch high school sports stories from Medley
  $.getJSON('list.php?count=8', function(data) {
    var html = JST.stories(data);
    $('#stories').html(html);
  });

  // Trigger a search on the scores collection when someone
  // enters text into the team search box
  searchBox.on('keyup', function() {
    scores.search(searchBox.val());
  });

});

});
