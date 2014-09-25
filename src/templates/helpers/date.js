/* Usage: {{date dateString}} turns 2014-01-02 into 1/2 */

Handlebars.registerHelper('date', function(dateString) {
  dateString = Handlebars.Utils.escapeExpression(dateString);

  var dateObj = moment(dateString, "YYYY-MM-DD");

  return new Handlebars.SafeString(dateObj.format("M/D"));
});
