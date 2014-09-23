var Score = Backbone.Model.extend({
  initialize: function() {
    // Set a boolean for the winner that can be used during templating
    if(this.get('AwayTeamScore') > this.get('HomeTeamScore')) {
      this.set('AwayTeamWon', true);
    }
    else {
      this.set('HomeTeamWon', true);
    }
  }
});

var url = 'http://teamplayer.statesman.com/web/gateway.php?site=default&tpl=TickerJSON&Sport=1&StartDate=2014-09-19&EndDate=2014-09-19';

var Scores = Backbone.Collection.extend({
  model: Score,
  url: url
});

var Gameboard = Backbone.View.extend({
  initialize: function() {
    var src = $('#game-template').html();
  },
  template: JST.game,
  tagName: 'tr',
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var Scoreboard = Backbone.View.extend({
  renderSingle: function(game) {
    var gameboard = new Gameboard({model: game});
    this.$el.append(gameboard.render().el);
  },
  render: function() {
    this.collection.forEach(this.renderSingle, this);
    return this;
  }
});

$(function() {

  // Fetch data, then render the scores
  var scores = new Scores();
  scores.fetch({
    success: function() {
      console.log(scores.toJSON());
      scoreboard = new Scoreboard({collection: scores, el: '#scores'});
      scoreboard.render();
      console.log('test');
    }
  });

});
