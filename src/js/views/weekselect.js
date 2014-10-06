define(['backbone', 'jquery'], function(Backbone, $) {

  var Weekselect = Backbone.View.extend({

    // Constructor that stores the select box, next button,
    // previous button and the current selection along with a
    // count of the total number of options
    initialize: function() {
      this.$select = this.$el.find('select');
      this.$next = this.$el.find('.next');
      this.$prev = this.$el.find('.prev');
      this.$current = this.$select.find('option:selected');
      this.count = this.$select.children().length;
    },

    // Bind selector changes and setup the previous/next week
    // buttons
    events: {
      'change select': 'dateChange',
      'click .prev': 'weekPrev',
      'click .next': 'weekNext'
    },

    // Event handler for changes to the week select box
    dateChange: function() {
      this.collection.setDate(this.$select.val());
      this.$current = this.$select.find('option:selected');
      this._buttonClasses();
    },

    // Event handler to the previous week button
    weekPrev: function(e) {
      var i = this.$current[0].index;
      if(i !== 0) {
        this.$current.removeAttr('selected');
        this.$current.prev().attr('selected', true);
        this.$select.change();
        this._buttonClasses();
      }
      e.preventDefault();
    },

    // Event handler for the next week button
    weekNext: function(e) {
      var i = this.$current[0].index;
      if(i !== (this.count - 1)) {
        this.$current.removeAttr('selected');
        this.$current.next().attr('selected', true);
        this.$select.change();
        this._buttonClasses();
      }
      e.preventDefault();
    },

    // A helper to reevaluate the disabled classes on the
    // next previous buttons each time the week is changed
    _buttonClasses: function() {
      var i = this.$current[0].index;

      // Evaluate classes for the previous button
      if(i === 0) {
        this.$prev.addClass('disabled');
      }
      else if(this.$prev.hasClass('disabled')) {
        this.$prev.removeClass('disabled');
      }

      // Evaluate classes for the next button
      if(i === (this.count - 1)) {
        this.$next.addClass('disabled');
      }
      else if(this.$next.hasClass('disabled')) {
        this.$next.removeClass('disabled');
      }
    }

  });

  return Weekselect;

});
