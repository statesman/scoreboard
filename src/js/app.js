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

var Scores = Backbone.Collection.extend({
  model: Score
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
    this.$el.html('');
    this.collection.forEach(this.renderSingle, this);
    return this;
  }
});

$(function() {

  var week = $('#week');
  var scores = new Scores();

  var urlBase = 'http://teamplayer.statesman.com/web/gateway.php?site=default&tpl=TickerJSON&Sport=1&StartDate=';

  var fetch = function(friday) {
    var dateParts = friday.split('-');
    var dateBase = dateParts[0] + '-' + dateParts[1] + '-';
    var date = parseInt(dateParts[2], 10);
    var startDate = dateBase + (date - 1);
    var endDate = dateBase + (date + 1);
    var url = urlBase + startDate + '&EndDate=' + endDate;
    $.getJSON(url, function(data) {
      //console.log(data);
      scores.set(data);
      scoreboard = new Scoreboard({collection: scores, el: '#scores'});
      scoreboard.render();
      $('.hide').removeClass('hide');
    });
  };

  fetch(week.val());
  week.on('change', function() {
    fetch(week.val());
  });

});
