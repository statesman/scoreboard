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


/* Usage: {{longDateTime dateString timeString}} turns a UNIX timestamp into h:mm dddd, MMM D */

Handlebars.registerHelper('longDateTime', function(dateString, timeString) {
  dateString = Handlebars.Utils.escapeExpression(dateString);
  timeString = Handlebars.Utils.escapeExpression(timeString);

  var dateObj = moment(dateString + '' + timeString, "YYYY-MM-DD HH:mm:ss");

  // AP style times (omit minutes if we're on the hour)
  var timeFormat;
  if(dateObj.minutes() === 0) {
    timeFormat = "ha";
  }
  else {
    timeFormat = "h:mma";
  }

  var timeString = dateObj.format(timeFormat) + ' ' + dateObj.format("dddd, MMM D");

  return new Handlebars.SafeString(timeString);
});


/* Usage: {{barWidth AwayRusingAttempts HomeRushingAttempts "home"}} */
var barWidth = function(away, home, team) {
  away = parseInt(away, 10);
  home = parseInt(home, 10);
  var percent;
  if(team === "home") {
    percent = home / (away + home);
  }
  else {
    percent = away / (away + home);
  }
  return percent * 92;
};

// Round our fake float (it's actually a string) to
// one decimal point
var roundDecimal = function(value) {
  if(value.indexOf('.') !== -1) {
    var parts = value.split('.', 2);
    var decimal = parts[1].substring(0, 1);
    if(decimal === "0") {
      return parts[0];
    }
    else {
      return parts[0] + '.' + parts[1].substring(0, 1);
    }
  }
  else {
    return value;
  }
}

/* Usage {{bar unit label away home team}} */
Handlebars.registerHelper('bar', function(unit, away, home, team, suffix) {
  // Get the label value
  if(team === "away") {
    label = away;
  }
  else {
    label = home;
  }
  // Check if we should add the empty class
  var empty = '';
  if((team === "away" && away === "0") || (team === "home" && home === "0")) {
    empty = ' empty';
  }
  if(typeof suffix === "object") {
    suffix = '';
  }

  var bar = '<div class="bar-wrapper">' +
    '<div class="bar' + empty + '" style="width:' + barWidth(away, home, team) + '%;"></div>' +
    '<div class="bar-label">' + roundDecimal(label) + suffix + '</div>' +
    '<div class="field-label">' + unit + '</div>' +
  '</div>';
  return new Handlebars.SafeString(bar);
});
