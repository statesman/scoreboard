define(['backbone', 'views/gameboard'], function(Backbone, Gameboard) {

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

  return Scoreboard;

});