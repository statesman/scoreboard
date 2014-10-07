define(['backbone', 'collections/scores', 'views/scoreboard', 'views/searchbox', 'views/weekselect', 'models/game', 'config'], function(Backbone, Scores, Scoreboard, Searchbox, Weekselect, Game, config) {

  var App = Backbone.Router.extend({

    routes: {
      "": "default",
      "week/:week": "weekScores",
      "game/:id": "gameDetail"
    },

    // Default route to call when someone hits the app's root
    default: function() {
      this.weekScores(config.currentWeek);
    },

    // Controller for the route that shows week-by-week scores
    weekScores: function(week) {
      // Setup and store instances of all our Backbone objects if this is the first run
      if(typeof this.scores === "undefined") {
        this.scores = new Scores({week: parseInt(week, 10)});
        this.scoreboard = new Scoreboard({collection: this.scores, el: '#scores'});
        this.searchbox = new Searchbox({collection: this.scores, el: '#team-search'});
        this.weekselect = new Weekselect({collection: this.scores, el: '#week'});
      }
      // Otherwise, just change the week
      else {
        this.scores.setWeek(week);
      }
    },

    // Controller for the route that shows individual game details
    gameDetail: function(id) {
      this.game = new Game({id: parseInt(id, 10)});
    }

  });

  return App;

});
