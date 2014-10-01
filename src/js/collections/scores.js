define(['backbone', 'models/score', 'moment'], function(Backbone, Score, moment) {

  var Scores = Backbone.Collection.extend({
    model: Score,

    initialize: function(options) {
      // Set the inital date, so we can build a URL
      this.setDate(options.date);

      // When something is faved, trigger a sort, which
      // will trigger a re-render
      this.on('change:HomeTeamFav', function() {
        this.sort();
      });
      this.on('change:AwayTeamFav', function() {
        this.sort();
      });
    },

    // A method to set the date for the TeamPlayer query
    setDate: function(date) {
      this.date = moment(date, "YYYY-MM-DD");
    },

    // Returns the URL for a TeamPlayer query that will return
    // three days of score results, centered on our stored date property
    url: function() {
      var urlBase = "http://teamplayer.statesman.com/web/gateway.php?site=default&tpl=TickerJSON_clone&Sport=1",
          StartDate = this.date.subtract(1, 'days').format('YYYY-MM-DD'),
          EndDate = this.date.add(2, 'days').format('YYYY-MM-DD');

      return urlBase + '&StartDate=' + StartDate + '&EndDate=' + EndDate;
    },

    // Rewrite the comparator to sort first by fav status,
    // then by timestamp, then by home team
    comparator: function(model) {
      if(model.get('HomeTeamFav') === true || model.get('AwayTeamFav') === true) {
        c = "0" + model.get('GameTimestamp') + model.get('HomeTeamName');
      }
      else {
        c = "1" + model.get('GameTimestamp') + model.get('HomeTeamName');
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

  return Scores;

});
