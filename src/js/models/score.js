define(['backbone', 'modules/favs'], function(Backbone, Favs) {

  var favs = new Favs();

  var Score = Backbone.Model.extend({
    initialize: function() {

      // Check localstorage to see if teams are favs and store a boolean
      // on their model if they are
      if(this.has('HomeTeamID') && this.has('AwayTeamID')) {
        if(favs.isFav(this.get('HomeTeamID'))) {
          this.set('HomeTeamFav', true);
        }
        if(favs.isFav(this.get('AwayTeamID'))) {
          this.set('AwayTeamFav', true);
        }
      }

      // Store a lowercase version of each team name for searching
      if(this.has('HomeTeamName') && this.has('AwayTeamName')) {
        var searchable = [this.get('HomeTeamName').toLowerCase(), this.get('AwayTeamName').toLowerCase()];
        this.set('Searchable', searchable.join(' '));
      };

    },

    // Method that handles faving functionality by storing
    // fav status as a model attribute and storing it in
    // local storage
    fav: function(team, id) {
      if(team === 'home') {
        if(this.get('HomeTeamFav') === true) {
          this.set('HomeTeamFav', false);
          favs.unFav(id);
        }
        else {
          this.set('HomeTeamFav', true);
          favs.fav(id);
        }
      }
      else if(team === 'away') {
        if(this.get('AwayTeamFav') === true) {
          this.set('AwayTeamFav', false);
          favs.unFav(id);
        }
        else {
          this.set('AwayTeamFav', true);
          favs.fav(id);
        }
      }
    }
  });

  return Score;

});
