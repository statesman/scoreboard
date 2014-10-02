define(['backbone'], function(Backbone) {

  var Searchbox = Backbone.View.extend({

    initialize: function() {
      // Store the search box element for easy access later
      this.$searchBox = this.$el.find('input');

      // When the collection is updated, run the search on the
      // new models
      this.collection.on('sync', function() {
        this.doSearch();
      }, this);
    },

    // Listen for interactions with the search box and
    // fire appropriate methods
    events: {
      "click .clear": "clearSearch",
      "keyup input": "doSearch"
    },

    // Method to get the contents of the search box
    getSearch: function() {
      return this.$searchBox.val();
    },

    // Method to set the search box contents
    setSearch: function(search) {
      this.$searchBox.val(search);
    },

    // Method to actually run the search
    doSearch: function() {
      this.collection.search(this.getSearch());
    },

    // Method to reset the collection search
    clearSearch: function() {
      this.setSearch('');
      this.doSearch();
    }

  });

  return Searchbox;

});
