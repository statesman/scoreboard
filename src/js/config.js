define(['moment'], function(moment) {

// numWeeks was 11 when I started
  var numWeeks = 11;
  var firstFriday = moment('2015-07-30', 'YYYY-MM-DD');
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
/*
  weeks.push({
    title: 'Playoffs: Week 1',
    date: '2015-11-14'
  });
  weeks.push({
    title: 'Playoffs: Week 2',
    date: '2015-11-21'
  });
  weeks.push({
    title: 'Playoffs: Week 3',
    date: '2015-11-28'
  });
  weeks.push({
    title: 'Playoffs: Week 4',
    date: '2015-12-5'
  });
  weeks.push({
    title: 'Playoffs: Week 5',
    date: '2015-12-12'
  });
  weeks.push({
    title: 'Playoffs: Week 6',
    date: '2015-12-19'
  });
*/

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
