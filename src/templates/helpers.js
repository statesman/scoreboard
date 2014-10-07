define(['store', 'moment', 'handlebars'], function(store, moment, Handlebars) {

/* Usage: {{date dateString}} turns 2014-01-02 into 1/2 */

Handlebars.registerHelper('date', function(timeStamp) {
  timeStamp = Handlebars.Utils.escapeExpression(timeStamp);

  var dateObj = moment.unix(timeStamp);

  return new Handlebars.SafeString(dateObj.format("M/D"));
});


/* Usage: {{dateTime dateString}} turns a UNIX timestamp into h:mm ddd */

Handlebars.registerHelper('dateTime', function(timeStamp) {
  timeStamp = Handlebars.Utils.escapeExpression(timeStamp);

  var dateObj = moment.unix(timeStamp);

  // AP style times (omit minutes if we're on the hour)
  var timeFormat;
  if(dateObj.minutes() === 0) {
    timeFormat = "ha";
  }
  else {
    timeFormat = "h:mma";
  }

  var timeString = dateObj.format(timeFormat) + '<br />' + dateObj.format("ddd");

  return new Handlebars.SafeString(timeString);
});


/* Usage: {{favHome}} and {{favAway}} return markup for team fav stars */

// Function that returns markup for fav stars when passed a boolean
// indicating whether the star is for a faved team and a string indicating
// whether the stars are for the home team or away team
var favStars = function(faved, team) {
  // First, check to see if localStorage is enabled so we can read/store favs
  if(store.enabled === true) {
    if(faved === true) {
      return star = '<a class="fav-' + team + ' faved" href="#"><i class="fa fa-star"></i></a>';
    }
    else {
      return star = '<a class="fav-' + team + '" href="#"><i class="fa fa-star-o"></i></a>';
    }
  }
  else {
    return '';
  }
};

Handlebars.registerHelper('favHome', function(faved) {
  return new Handlebars.SafeString(favStars(faved, 'home'));
});

Handlebars.registerHelper('favAway', function(faved) {
  return new Handlebars.SafeString(favStars(faved, 'away'));
});

return Handlebars;

});


/* Usage: {{selected index currentWeek}} will return "selected" if the two are equal */

Handlebars.registerHelper('selected', function(index, currentWeek) {
  if((parseInt(index, 10) + 1) === parseInt(currentWeek, 10)) {
    return new Handlebars.SafeString('selected');
  }
});


/* Usage: {{prevDisabled currentWeek}} */

Handlebars.registerHelper('prevDisabled', function(currentWeek) {
  if(parseInt(currentWeek, 10) === 1) {
    return new Handlebars.SafeString(' disabled');
  }
});


/* Usage: {{nextDisabled currentWeek weekCount}} */

Handlebars.registerHelper('nextDisabled', function(currentWeek, weekCount) {
  if(parseInt(currentWeek, 10) === parseInt(weekCount, 10)) {
    return new Handlebars.SafeString(' disabled');
  }
});
