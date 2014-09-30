define(['backbone', 'models/score'], function(Backbone, Score) {

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
