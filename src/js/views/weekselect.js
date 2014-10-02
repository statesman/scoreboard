define(['backbone'], function(Backbone) {

  var Weekselect = Backbone.View.extend({

    events: {
      'change': 'dateChange'
    },

    dateChange: function() {
      this.collection.setDate(this.$el.val());
      this.collection.fetch();
    }

  });

  return Weekselect;

});
