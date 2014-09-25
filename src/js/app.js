var Score = Backbone.Model.extend({
  initialize: function() {
    // Set a boolean for the winner that can be used during templating
    if(this.get('GameScoreIsFinal') == "1") {
      if(this.get('AwayTeamScore') > this.get('HomeTeamScore')) {
        this.set('AwayTeamWon', true);
      }
      else {
        this.set('HomeTeamWon', true);
      }
    }
    // Store a lowercase version of each team name for searching
    var searchable = [this.get('HomeTeamName').toLowerCase(), this.get('AwayTeamName').toLowerCase()];
    this.set('Searchable', searchable.join(' '));
  }
});

var Scores = Backbone.Collection.extend({
  model: Score,

  // Method that, when passed a string, adds a hidden attribute
  // to all models in the collection that don't contain the passed
  // string
  search: function(needle) {
    needle = needle.toLowerCase();
    this.each(function(game) {
      if(game.get('Searchable').indexOf(needle) === -1) {
        game.set('hidden', true);
      }
      else {
        game.unset('hidden');
      }
    });
    this.trigger('filtered');
  },

  // Undoes the search method by removing the hidden attribute
  clearSearch: function() {
    this.each(function(game) {
      game.unset('hidden');
    });
    this.trigger('filtered');
  }
});

var Gameboard = Backbone.View.extend({
  template: JST.game,
  tagName: 'tr',
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var Scoreboard = Backbone.View.extend({
  initialize: function() {
    // Listen for the filtered event, which indicates that a search has
    // completed or been cleared, then rerender the view
    this.collection.on('filtered', function() {
      this.render();
    }, this);
  },
  renderSingle: function(game) {
    if(game.get('hidden') !== true) { // Only render items that aren't hidden
      var gameboard = new Gameboard({model: game});
      this.$el.append(gameboard.render().el);
    }
  },
  render: function() {
    this.$el.html('');
    this.collection.forEach(this.renderSingle, this);
    return this;
  }
});

$(function() {

  // Fetch scores from TeamPlayer

  var week = $('#week'),
      scores = new Scores(),
      scoreboard;

  var urlBase = 'http://teamplayer.statesman.com/web/gateway.php?site=default&tpl=TickerJSON&Sport=1&StartDate=';

  var fetch = function(friday) {
    var dateObj = moment(friday, "YYYY-MM-DD"),
        startDate = dateObj.subtract(1, 'days').format('YYYY-MM-DD'),
        endDate = dateObj.add(2, 'days').format('YYYY-MM-DD'),
        url = urlBase + startDate + '&EndDate=' + endDate;
    $.getJSON(url, function(data) {
      scores.set(data);
      console.log(scores.toJSON());
      scoreboard = new Scoreboard({collection: scores, el: '#scores'});
      scoreboard.render();
      $('.hide').removeClass('hide');
    });
  };

  fetch(week.val());
  week.on('change', function() {
    fetch(week.val());
  });

  // Fetch high school sports stories from Medley
  $.getJSON('list.php?count=8', function(data) {
    var html = JST.stories(data);
    $('#stories').html(html);
  });

  // Trigger a search on the scores collection when someone
  // enters text into the team search box
  $('#team-search').on('keyup', function() {
    scores.search($(this).val());
  });

});
