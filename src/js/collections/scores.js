define(['backbone', 'models/score', 'moment', 'underscore', 'modules/loader', 'config'], function(Backbone, Score, moment, _, loader, config) {

  var Scores = Backbone.Collection.extend({
    model: Score,

    initialize: function(options) {
			this.setWeek(options.week);

      // When something is faved, trigger a sort
      this.on('fav', this.sort);

			// When a request starts, throw up a loading spinner
      this.on('request', loader.on);

			// When the API request finishes, get rid of the spinner
      this.on('sync', loader.off);
    },

    // A method to set the date for the TeamPlayer query
    setWeek: function(week) {
			this.week = parseInt(week, 10);
      this.date = moment(config.weeks[week - 1].date, "YYYY-MM-DD");
    },

		getWeek: function(week) {
			if(typeof this.week === "undefined") {
				return config.currentWeek;
			}
			else {
				return this.week;
			}
		},

		prevWeek: function() {
			var current = this.getWeek();
			Backbone.history.navigate("week/" + (current - 1), true);
		},

		nextWeek: function() {
			var current = this.getWeek();
			Backbone.history.navigate("week/" + (current + 1), true);
		},

    // Returns the URL for a TeamPlayer query that will return
    // three days of score results, centered on our stored date property
    url: function() {
      var urlBase = config.urlBase + "/web/gateway.php?site=default&tpl=TickerJSON&Sport=" + config.sportId,
          StartDate = this.date.subtract(1, 'days').format('YYYY-MM-DD'),
          EndDate = this.date.add(2, 'days').format('YYYY-MM-DD');

      return urlBase + '&StartDate=' + StartDate + '&EndDate=' + EndDate;
    },

    // Rewrite the comparator to sort first by fav status, then by score status,
    // then by timestamp, then by home team
    comparator: function(model) {
      var c = "";
      // Weight by fav status
      if(model.get('HomeTeamFav') === true || model.get('AwayTeamFav') === true) {
        c = c + "0";
      }
      else {
        c = c + "1";
      }
      // Then by whether the game score is available
      if(model.get('GameScoreIsFinal') === true) {
        c = c + "0";
      }
      else {
        c = c + "1";
      }
      // Then by game time and team name
      c = c + model.get('GameTimestamp') + model.get('HomeTeamName');
      return c;
    },

    // Method that, when passed a string, adds a hidden attribute
    // to all models in the collection that don't contain the passed
    // string
    search: function(needle) {
			if(typeof needle !== "undefined") {
	      needle = needle.toLowerCase();
	      var resultCount = 0;
	      this.each(function(game) {
	        if(game.get('Searchable').indexOf(needle) === -1) {
	          game.set('hidden', true);
	        }
	        else {
	          game.unset('hidden');
	          resultCount++;
	        }
	      });
	      this.trigger('filtered');

	      // Send an empty event if there are no results found, which will
	      // allow us to show the user a no results box
	      if(resultCount === 0) {
	        this.trigger('noResults', needle);
	      }
			}
    },

    // Undoes the search method by removing the hidden attribute
    clearSearch: function() {
      this.each(function(game) {
        game.unset('hidden');
      });
      this.trigger('filtered');
    }
  });

  return Scores;

});
