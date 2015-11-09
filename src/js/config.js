define(['moment'], function(moment) {

// numWeeks was 11 when I started
  var numWeeks = 11;
  var firstFriday = moment('2015-08-28', 'YYYY-MM-DD');
  var urlBase = 'http://teamplayer.statesman.com';
  var sportId = '1';
  var selectBoxFormat = 'MMM Do';

  /* ~ STOP EDITING HERE ~ */


  // Generate array with weeks and labels
  var weeks = [{
    title: 'Week 1: ' + firstFriday.clone().subtract(1, 'days').format(selectBoxFormat) + ' to ' + firstFriday.clone().add(1, 'days').format(selectBoxFormat),
    date: firstFriday.format('YYYY-MM-DD')
  }];
  var today = moment();
  var currentWeek;
  for(var i = 2; i <= numWeeks; i++) {
    firstFriday.add(1, 'weeks');
    weeks.push({
      title: 'Week ' + i + ': ' + firstFriday.clone().subtract(1, 'days').format(selectBoxFormat) + ' to ' + firstFriday.clone().add(1, 'days').format(selectBoxFormat),
      date: firstFriday.format('YYYY-MM-DD')
    });
  }

  // Add arrays like these for each playoff week
/*
  weeks.push({
    title: 'Playoffs: Week 1',
    date: '2015-11-12'
  });
*/
  weeks.push({
    title: 'Playoffs: Week 1',
    date: '2015-11-12'
  });

  // Figure out if it's Thursday of the given week yet; if
  // it is, set the currentWeek variable accordingly
  for(var w = 0; w < weeks.length; w++) {
    var friday = moment(weeks[w].date, 'YYYY-MM-DD');
    if(typeof currentWeek === "undefined") {
      if(friday.subtract(1, 'days') > today) {
        currentWeek = w;
      }
    }
  }

  // This makes it so if the curent week is before the first week of the season, it will take you to the first week.
  if (currentWeek === 0) {
    currentWeek = 1;
  }

  // If we didn't get a hit above, set the currentWeek to the
  // last week available
  if(typeof currentWeek === "undefined") {
    currentWeek = (weeks.length - 1);
  }


  // Return the calculated config
  return {
    currentWeek: currentWeek,
    weeks: weeks,
    urlBase: urlBase,
    sportId: sportId
  };

});
