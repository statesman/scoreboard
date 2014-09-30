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
