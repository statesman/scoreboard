define(['backbone', 'jquery', 'Templates', 'config'], function(Backbone, $, JST, config) {

  var Weekselect = Backbone.View.extend({

    close: function() {
      this.remove();
      this.off();
    },

    // Bind selector changes and setup the previous/next week
    // buttons
    events: {
      'change select': 'dateChange',
      'click .prev': 'weekPrev',
      'click .next': 'weekNext'
    },

    template: JST.weekselect,

    render: function() {
      var data = {
        weeks: config.weeks,
        currentWeek: this.collection.getWeek(),
        numWeeks: config.weeks.length
      };
      this.$el.html(this.template(data)).appendTo('#week');
      return this;
    },

    // Event handler for changes to the week select box
    dateChange: function() {
      var index = this.$el.find('select option:selected').val();
      index = parseInt(index, 10) + 1;
      Backbone.history.navigate("week/" + index, true);
    },

    // Event handler to the previous week button
    weekPrev: function(e) {
      if(!this.$el.find('.prev').hasClass('disabled')) {
        this.collection.prevWeek();
      }
      e.preventDefault();
    },

    // Event handler for the next week button
    weekNext: function(e) {
      if(!this.$el.find('.next').hasClass('disabled')) {
        this.collection.nextWeek();
      }
      e.preventDefault();
    }

  });

  return Weekselect;

});
