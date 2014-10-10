define(['backbone', 'Templates'], function(Backbone, JST) {

  var Searchbox = Backbone.View.extend({

    close: function() {
      this.remove();
      this.off();
    },

    // Listen for interactions with the search box and
    // fire appropriate methods
    events: {
      "click .clear": "clearSearch",
      "keyup input": "doSearch"
    },

    // Method to get the contents of the search box
    getSearch: function() {
      return this.$('input').val();
    },

    // Method to set the search box contents
    setSearch: function(search) {
      this.$('input').val(search);
    },

    // Method to actually run the search
    doSearch: function() {
      this.collection.search(this.getSearch());
    },

    // Method to reset the collection search
    clearSearch: function(e) {
      e.preventDefault();
      this.setSearch('');
      this.doSearch();
    },

    template: JST.searchbox,

    render: function() {
      this.$el.html(this.template()).appendTo('#team-search');
    }

  });

  return Searchbox;

});
