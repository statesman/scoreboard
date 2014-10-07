define(['backbone', 'collections/scores', 'views/scoreboard', 'views/searchbox', 'views/weekselect', 'config'], function(Backbone, Scores, Scoreboard, Searchbox, Weekselect, config) {

  var App = Backbone.Router.extend({

    routes: {
      "": "default",
      "week/:week": "weekScores"
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
    }

  });

  return App;

});
