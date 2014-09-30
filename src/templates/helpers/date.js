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

  return new Handlebars.SafeString(dateObj.format("h:mma ddd"));
});
