define(['backbone', 'Templates'], function(Backbone, JST) {

  var Gamedetail = Backbone.View.extend({
    initialize: function() {
      this.model.on('fav', this.render, this);
    },

    close: function() {
      this.remove();
      this.off();
      this.model.off('fav', this.render, this);
    },

    events: {
      'click .fav-home': 'favHome',
      'click .fav-away': 'favAway'
    },

    template: JST.gamedetail,
    tagName: 'div',
    className: 'row',

    // Faving event handlers, which fire corresponding
    // model methods
    favHome: function(e) {
      e.preventDefault();
      this.model.fav('home', this.model.get('HomeTeamID'));
    },
    favAway: function(e) {
      e.preventDefault();
      this.model.fav('away', this.model.get('AwayTeamID'));
    },

    render: function() {
      // Evalaute a couple of templating variables
      this.model.checkFavs();
      // Now it's safe to render
      this.$el.empty();
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.appendTo('#main');
      return this;
    }
  });

  return Gamedetail;

});
