define(['handlebars', 'helpers'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["game"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " faved";
  }

function program3(depth0,data) {
  
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.AwayTeamFav), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  }

function program5(depth0,data) {
  
  
  return " played";
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <div class=\"row team away-team";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.AwayTeamWon), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n      <div class=\"small-9 medium-8 columns\">\r\n        <span class=\"team-name\">";
  if (helper = helpers.AwayTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> <div class=\"inline-block\"><span class=\"mascot\">";
  if (helper = helpers.AwayTeamNickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamNickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>"
    + escapeExpression((helper = helpers.favAway || (depth0 && depth0.favAway),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.AwayTeamFav), options) : helperMissing.call(depth0, "favAway", (depth0 && depth0.AwayTeamFav), options)))
    + "</div>\r\n      </div>\r\n      <div class=\"small-3 medium-4 columns text-right\">\r\n        <i class=\"fa fa-chevron-right\"></i>";
  if (helper = helpers.AwayTeamScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"row team home-team";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.HomeTeamWon), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n      <div class=\"small-9 medium-8 columns\">\r\n        <span class=\"team-name\">";
  if (helper = helpers.HomeTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> <div class=\"inline-block\"><span class=\"mascot\">";
  if (helper = helpers.HomeTeamNickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamNickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>"
    + escapeExpression((helper = helpers.favHome || (depth0 && depth0.favHome),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.HomeTeamFav), options) : helperMissing.call(depth0, "favHome", (depth0 && depth0.HomeTeamFav), options)))
    + "</div>\r\n      </div>\r\n      <div class=\"small-3 medium-4 columns text-right\">\r\n        <i class=\"fa fa-chevron-right\"></i>";
  if (helper = helpers.HomeTeamScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"small-12 columns game-meta\">\r\n        <hr class=\"show-for-medium-up\" />\r\n        "
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.GameTimestamp), options) : helperMissing.call(depth0, "date", (depth0 && depth0.GameTimestamp), options)))
    + " <span class=\"right\">Final</span>\r\n      </div>\r\n    </div>\r\n  ";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return " winner";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <div class=\"row\">\r\n      <div class=\"small-8 columns\">\r\n        <div class=\"team away-team";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.AwayTeamWon), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n          <span class=\"team-name\">";
  if (helper = helpers.AwayTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> <div class=\"inline-block\"><span class=\"mascot\">";
  if (helper = helpers.AwayTeamNickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamNickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>"
    + escapeExpression((helper = helpers.favAway || (depth0 && depth0.favAway),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.AwayTeamFav), options) : helperMissing.call(depth0, "favAway", (depth0 && depth0.AwayTeamFav), options)))
    + "</div>\r\n        </div>\r\n        <div class=\"team home-team";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.HomeTeamWon), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n          <span class=\"team-name\">";
  if (helper = helpers.HomeTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span> <div class=\"inline-block\"><span class=\"mascot\">";
  if (helper = helpers.HomeTeamNickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamNickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>"
    + escapeExpression((helper = helpers.favHome || (depth0 && depth0.favHome),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.HomeTeamFav), options) : helperMissing.call(depth0, "favHome", (depth0 && depth0.HomeTeamFav), options)))
    + "</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"small-4 columns text-right game-time\">"
    + escapeExpression((helper = helpers.dateTime || (depth0 && depth0.dateTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.GameTimestamp), options) : helperMissing.call(depth0, "dateTime", (depth0 && depth0.GameTimestamp), options)))
    + "</div>\r\n    </div>\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.VenueName), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  ";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n      <div class=\"row\">\r\n        <div class=\"small-12 columns game-meta\">\r\n          <hr class=\"show-for-medium-up\" />\r\n          <i class=\"fa fa-map-marker\"></i> <span class=\"venue\">";
  if (helper = helpers.VenueName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.VenueName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n        </div>\r\n      </div>\r\n    ";
  return buffer;
  }

  buffer += "<div class=\"inner";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.HomeTeamFav), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.GameScoreIsFinal), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n  ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.GameScoreIsFinal), {hash:{},inverse:self.program(10, program10, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</div>\r\n";
  return buffer;
  });

this["Templates"]["noresults"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"no-results\">\n  <h4>No results</h4>\n  <p>Your search for <em>";
  if (helper = helpers.search) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.search); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</em> didn't turn up any results.</p>\n</div>\n";
  return buffer;
  });

this["Templates"]["stories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\r\n    <li><a href=\"http://www.statesman.com";
  if (helper = helpers.url_path) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url_path); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\r\n  ";
  return buffer;
  }

  buffer += "<h3>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.meta)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <small>statesman.com</small></h3>\r\n<ul class=\"small-block-grid-1 medium-block-grid-4 large-block-grid-6\">\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.objects), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });

return this["Templates"];

});