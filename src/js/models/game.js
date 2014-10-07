define(['backbone', 'config'], function(Backbone, config) {

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
      return config.urlBase + '/web/gateway.php?site=default&tpl=GameJSON&Sport=' + config.sportId + '&id=' + this.id;
    }

  });

  return Game;

});
