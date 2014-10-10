define(['backbone', 'config', 'models/score', 'modules/loader'], function(Backbone, config, Score, loader) {

  var Game = Score.extend({

    initialize: function(options) {
      this.setId(options.id);
      this.on('sync', this.checkFavs);

      // When a request starts, throw up a loading spinner
      this.on('request', loader.on);

      // When the API request finishes, get rid of the spinner
      this.on('sync', loader.off);
    },

    setId: function(id) {
      this.id = id;
    },

    url: function() {
      return config.urlBase + '/web/gateway.php?site=default&tpl=GameJSON&Sport=' + config.sportId + '&id=' + this.id;
    }

  });

  return Game;

});
