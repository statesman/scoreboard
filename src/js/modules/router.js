define(['backbone', 'collections/scores', 'views/scoreboard', 'views/searchbox', 'views/weekselect', 'models/game', 'views/gamedetail', 'config'], function(Backbone, Scores, Scoreboard, Searchbox, Weekselect, Game, Gamedetail, config) {

  var App = Backbone.Router.extend({

    routes: {
      "": "default",
      "week/:week": "showScores",
      "game/:id": "showGame"
    },

    // Default route to call when someone hits the app's root
    default: function() {
      this.showScores(config.currentWeek);
    },

    // Controller for the route that shows week-by-week scores
    showScores: function(week) {
      // Setup and store instances of all our Backbone objects if this is the first run
      if(typeof this.scores === "undefined") {
        this.scores = new Scores({week: parseInt(week, 10)});
        this.scoreboard = new Scoreboard({collection: this.scores});
        this.searchbox = new Searchbox({collection: this.scores, el: '#team-search'});
        this.weekselect = new Weekselect({collection: this.scores, el: '#week'});
      }
      // Otherwise, just change the week
      else {
        this.scores.setWeek(week);
      }
    },

    // Controller for the route that shows individual game details
    showGame: function(id) {
      this.game = new Game({id: parseInt(id, 10)});
      this.gameDetail = new Gamedetail({model: this.game});
    }

  });

  return App;

});
