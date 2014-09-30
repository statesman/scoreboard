

var Score = Backbone.Model.extend({
  initialize: function() {
    // Add a boolean for district games
    if(this.get('AwayDistrictID') === this.get('HomeDistrictID')) {
      this.set('DistrictGame', true);
    }
    // Make GameScoreIsFinal a boolean for easier templating
    if(this.get('GameScoreIsFinal') === "1") {
      this.set('GameScoreIsFinal', true);
    }
    else {
      this.set('GameScoreIsFinal', false);
    }
    // Set a boolean for the winner that can be used during templating
    if(this.get('GameScoreIsFinal')) {
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
  },
  // Method that handles faving functionality by storing
  // fav status as a model attribute and storing it in
  // local storage
  fav: function(team) {
    if(team === 'home') {
      if(this.get('HomeTeamFav') === true) {
        this.set('HomeTeamFav', false);
      }
      else {
        this.set('HomeTeamFav', true);
      }
      // store HomeTeamID as a fav
    }
    else if(team === 'away') {
      if(this.get('AwayTeamFav') === true) {
        this.set('AwayTeamFav', false);
      }
      else {
        this.set('AwayTeamFav', true);
      }
      // store AwayTeamID as a fav
    }
  }
});

var Scores = Backbone.Collection.extend({
  model: Score,

  initialize: function() {
    // When something is faved, trigger a sort, which
    // will trigger a re-render
    this.on('change:HomeTeamFav', function() {
      this.sort();
    });
    this.on('change:AwayTeamFav', function() {
      this.sort();
    });
  },

  // Rewrite the comparator to sort first by fav status,
  // then by timestamp, then by home team
  comparator: function(model) {
    var c,
        gametime = moment(model.get('GameDate') + model.get('GameTime'), "YYYY-MM-DDHH:mm:ss");
    if(model.get('HomeTeamFav') === true || model.get('AwayTeamFav') === true) {
      c = "0" + gametime.unix() + model.get('HomeTeamName');
    }
    else {
      c = "1" + gametime.unix() + model.get('HomeTeamName');
    }
    return c;
  },

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
  // Listen for the fav stars to be clicked, then fire
  // faving events
  events: {
    "click .fav-home": "favHome",
    "click .fav-away": "favAway"
  },
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  template: JST.game,
  tagName: 'li',
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  // Faving event handlers, which fire corresponding
  // model methods
  favHome: function(e) {
    e.preventDefault();
    this.model.fav('home', this.model.get('home'));
  },
  favAway: function(e) {
    e.preventDefault();
    this.model.fav('away', this.model.get('away'));
  }
});

var Scoreboard = Backbone.View.extend({
  initialize: function() {
    // Listen for the filtered event, which indicates that a search has
    // completed or been cleared, then rerender the view
    this.collection.on('filtered', function() {
      this.render();
    }, this);

    // Listen for the sort event, which is fired after a favorite
    // is added, and rerender the view
    this.collection.on('sort', function() {
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
var scoreboard;
var scores;
$(function() {

  // Fetch scores from TeamPlayer

  var week = $('#week'),
      searchBox = $('#team-search');
      scores = new Scores();

  var settings = {
    dataType: "json",
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
      console.log(data);
      scoreboard = new Scoreboard({collection: scores, el: '#scores'});
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
