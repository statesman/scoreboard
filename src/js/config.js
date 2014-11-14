define(['moment'], function(moment) {

  var numWeeks = 11;
  var firstFriday = moment('2014-08-29', 'YYYY-MM-DD');
  var urlBase = 'http://teamplayer.statesman.com';
  var sportId = '1';

  /* ~ STOP EDITING HERE ~ */


  // Generate array with weeks and labels
  var weeks = [{
    title: 'Week 1',
    date: firstFriday.format('YYYY-MM-DD')
  }];
  var today = moment();
  var currentWeek;
  for(var i = 2; i <= numWeeks; i++) {
    weeks.push({
      title: 'Week ' + i,
      date: firstFriday.add(1, 'weeks').format('YYYY-MM-DD')
    });
  }
  weeks.push({
    title: 'Playoffs: Week 1',
    date: '2014-11-14'
  });

  // Figure out if it's Thursday of the given week yet; if
  // it is, set the currentWeek variable accordingly
  for(var w = 2; w <= numWeeks; w++) {
    var friday = firstFriday.clone();
    if(typeof currentWeek === "undefined") {
      if(friday.subtract(1, 'days') > today) {
        currentWeek = (w - 1);
      }
    }
  }
  // If we didn't get a hit above, set the currentWeek to the
  // last week available
  if(typeof currentWeek === "undefined") {
    currentWeek = weeks.length;
  }


  // Return the calculated config
  return {
    currentWeek: currentWeek,
    weeks: weeks,
    urlBase: urlBase,
    sportId: sportId
  };

});
