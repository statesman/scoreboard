define(['backbone', 'Templates'], function(Backbone, JST) {

  var Gameboard = Backbone.View.extend({
    initialize: function() {
      this.model.on('sync', function() {
        this.render();
      }, this);
    },

    template: JST.gamedetail,
    tagName: 'div',
    className: 'row',

    render: function() {
      this.$el.empty();
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.appendTo('#main');
      return this;
    }
  });

  return Gameboard;

});
