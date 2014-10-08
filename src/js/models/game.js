define(['backbone', 'config', 'models/score'], function(Backbone, config, Score) {

  var Game = Score.extend({

    initialize: function(options) {
      this.setId(options.id);
      this.on('sync', function() {
        this.checkFavs();
      });
    },

    setId: function(id) {
      this.id = id;
      this.fetch({
        dataType: 'jsonp',
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
