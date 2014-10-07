define(['backbone'], function(Backbone) {

  var Game = Backbone.Model.extend({

    initialize: function(options) {
      this.setId(options.id);
    },

    setId: function(id) {
      this.id = id;
      this.fetch({
        success: function(model) {
          console.log(model.toJSON());
        }
      });
    },

    url: function() {
      return 'http://teamplayer.statesman.com/web/gateway.php?site=default&tpl=GameJSON&Sport=1&id=' + this.id;
    }

  });

  return Game;

});
