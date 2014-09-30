define(['moment', 'backbone', 'modules/favs'], function(moment, Backbone, Favs) {

  var favs = new Favs();

  var Score = Backbone.Model.extend({
    initialize: function() {

      // Add a boolean for district games
      if(this.get('AwayDistrictID') === this.get('HomeDistrictID')) {
        this.set('DistrictGame', true);
      }

      // Make GameScoreIsFinal a boolean for easier templating
      if(this.get('GameScoreIsFinal') === "1") {
        this.set('GameScoreIsFinal', true);
      }
      else {
        this.set('GameScoreIsFinal', false);
      }

      // Set a boolean for the winner that can be used during templating
      if(this.get('GameScoreIsFinal')) {
        if(this.get('AwayTeamScore') > this.get('HomeTeamScore')) {
          this.set('AwayTeamWon', true);
        }
        else {
          this.set('HomeTeamWon', true);
        }
      }

      // Check localstorage to see if teams are favs and store a boolean
      // on their model if they are
      if(favs.isFav(this.get('HomeTeamID'))) {
        this.set('HomeTeamFav', true);
      }
      if(favs.isFav(this.get('AwayTeamID'))) {
        this.set('AwayTeamFav', true);
      }

      // Store a Moment object with the game start time
      var time = moment(this.get('GameDate') + this.get('GameTime'), "YYYY-MM-DDHH:mm:ss");
      this.set('GameTimestamp', time.unix());

      // Store a lowercase version of each team name for searching
      var searchable = [this.get('HomeTeamName').toLowerCase(), this.get('AwayTeamName').toLowerCase()];
      this.set('Searchable', searchable.join(' '));
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
