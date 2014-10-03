define(['collections/scores', 'views/scoreboard', 'views/searchbox', 'views/weekselect'], function(Scores, Scoreboard, Searchbox, Weekselect) {

  var App = Backbone.Router.extend({

    initialize: function() {
      // Setup and store instances of all our Backbone objects
      this.scores = new Scores({date: $('#week').val()});
      this.scoreboard = new Scoreboard({collection: this.scores, el: '#scores'});
      this.searchbox = new Searchbox({collection: this.scores, el: '#team-search'});
      this.weekselect = new Weekselect({collection: this.scores, el: '#week'});

      // Fetch the data from Teamplayer
      this.scores.fetch();
    }

  });

  return App;

});
