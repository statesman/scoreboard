define(['backbone', 'collections/scores', 'views/scoreboard', 'views/searchbox', 'views/weekselect', 'models/game', 'views/gamedetail', 'scrollto', 'config'], function(Backbone, Scores, Scoreboard, Searchbox, Weekselect, Game, Gamedetail, ScrollTo, config) {

  // A class that can handle view-swapping
  var AppView = function(){
    this.views = [];
    this.show = function(currentView, reset) {
      if (this.views.length > 0 && reset === true) {
        _.each(this.views, function(view) {
          if(view.close) {
            view.close();
          }
        }, this);
        this.views.length = 0;
      }
      this.views.push(currentView);
      currentView.render();
    };
  };

  var appview = new AppView();

  var App = Backbone.Router.extend({

    initialize: function() {
      Backbone.history.start();

      this.on('route', function(route) {
        if(route === 'showGame') {
          $('#top').ScrollTo();
        }
      });
    },

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
      var scores = new Scores({week: parseInt(week, 10)});
      scores.fetch({
        dataType: 'jsonp',
        success: function() {
          appview.show(new Scoreboard({collection: scores}), true);
          appview.show(new Searchbox({collection: scores}));
          appview.show(new Weekselect({collection: scores}));
        }
      });
    },

    // Controller for the route that shows individual game details
    showGame: function(id) {
      var game = new Game({id: parseInt(id, 10)});
      game.fetch({
        dataType: 'jsonp',
        success: function() {
          appview.show(new Gamedetail({model: game}), true);
        }
      });
    }

  });

  return App;

});
