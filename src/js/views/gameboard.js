define(['backbone', 'Templates'], function(Backbone, JST) {

  var Gameboard = Backbone.View.extend({
    // Listen for the fav stars to be clicked, then fire
    // faving events
    events: {
      "click .fav-home": "favHome",
      "click .fav-away": "favAway"
    },

    initialize: function() {
      this.model.on('change', this.render, this);
    },

    template: JST.gameboard,
    tagName: 'li',

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    // Faving event handlers, which fire corresponding
    // model methods
    favHome: function(e) {
      e.preventDefault();
      this.model.fav('home', this.model.get('HomeTeamID'));
    },
    favAway: function(e) {
      e.preventDefault();
      this.model.fav('away', this.model.get('AwayTeamID'));
    }
  });

  return Gameboard;

});
