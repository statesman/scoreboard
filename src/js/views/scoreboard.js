define(['backbone', 'views/gameboard', 'Templates'], function(Backbone, Gameboard, JST) {

  var Scoreboard = Backbone.View.extend({
    initialize: function() {
      // Listen for the filtered event, which indicates that a search has
      // completed or been cleared, then rerender the view
      this.collection.on('filtered', function() {
        this.render();
      }, this);

      // If a search turns up no results, say so
      this.collection.on('noResults', function(search) {
        this.$el.html(JST.noresults({search: search}));
      }, this);

      // Listen for the fav event, which is fired after a favorite
      // is added, and rerender the view
      this.collection.on('fav', function() {
        this.render();
      }, this);
    },

    tagName: 'ul',
    id: 'scores',
    className: 'small-block-grid-1 medium-block-grid-3 large-block-grid-5',

    renderSingle: function(game) {
      if(game.get('hidden') !== true) { // Only render items that aren't hidden
        var gameboard = new Gameboard({model: game});
        this.$el.append(gameboard.render().el);
      }
    },

    render: function() {
      this.$el.empty();
      this.collection.forEach(this.renderSingle, this);
      this.$el.appendTo('#main');
      return this;
    }
  });

  return Scoreboard;

});
