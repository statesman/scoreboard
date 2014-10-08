define(['handlebars', 'helpers'], function(Handlebars) {

this["Templates"] = this["Templates"] || {};

this["Templates"]["gameboard"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + " <span class=\"right\"><a href=\"#/game/";
  if (helper = helpers.GameID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.GameID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Final</a></span>\r\n      </div>\r\n    </div>\r\n  ";
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

this["Templates"]["gamedetail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"game-detail\">\n  <div class=\"columns medium-8\">\n    <div class=\"row\">\n      <div class=\"inner clearfix\">\n        <div class=\"columns small-6 text-right\">\n          <h3><i class=\"fa fa-star-o\"></i> ";
  if (helper = helpers.AwayTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.AwayTeamNickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamNickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<br /><small>";
  if (helper = helpers.AwayOverallWins) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayOverallWins); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (helper = helpers.AwayOverallLosses) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayOverallLosses); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small></h3>\n          <h1 class=\"score\">";
  if (helper = helpers.AwayTeamScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n          <p>Total yards: ";
  if (helper = helpers.AwayTotalYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTotalYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>First downs: ";
  if (helper = helpers.AwayFirstDowns) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayFirstDowns); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-6\">\n          <h3>";
  if (helper = helpers.HomeTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.HomeTeamNickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamNickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <i class=\"fa fa-star-o\"></i><br /><small>";
  if (helper = helpers.HomeOverallWins) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeOverallWins); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (helper = helpers.HomeOverallLosses) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeOverallLosses); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small></h3>\n          <h1 class=\"score\">";
  if (helper = helpers.HomeTeamScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n          <p>Total yards: ";
  if (helper = helpers.HomeTotalYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTotalYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>First downs: ";
  if (helper = helpers.HomeFirstDowns) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeFirstDowns); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-12 game-meta text-center\">\n          <div class=\"meta-item\">\n            <i class=\"fa fa-calendar-o\"></i> "
    + escapeExpression((helper = helpers.longDateTime || (depth0 && depth0.longDateTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.GameDate), (depth0 && depth0.GameTime), options) : helperMissing.call(depth0, "longDateTime", (depth0 && depth0.GameDate), (depth0 && depth0.GameTime), options)))
    + "\n          </div>\n          <div class=\"meta-item\">\n            <i class=\"fa fa-map-marker\"></i> ";
  if (helper = helpers.VenueName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.VenueName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n          </div>\n        </div>\n        <hr />\n        <div class=\"columns small-12 text-center\">\n          <h5>Rushing</h5>\n        </div>\n        <div class=\"columns small-6 text-right\">\n          <p>Rush attempts: ";
  if (helper = helpers.AwayRushingAttempts) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayRushingAttempts); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Rush yards: ";
  if (helper = helpers.AwayRushingYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayRushingYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Rush yards per attempt: ";
  if (helper = helpers.AwayRushingYardsPerAttempt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayRushingYardsPerAttempt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-6\">\n          <p>Rush attempts: ";
  if (helper = helpers.HomeRushingAttempts) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeRushingAttempts); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Rush yards: ";
  if (helper = helpers.HomeRushingYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeRushingYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Rush yards per attempt: ";
  if (helper = helpers.HomeRushingYardsPerAttempt) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeRushingYardsPerAttempt); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-12 text-center\">\n          <hr />\n          <h5>Passing</h5>\n        </div>\n        <div class=\"columns small-6 text-right\">\n          <p>Pass completions: ";
  if (helper = helpers.AwayPassCompletions) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPassCompletions); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Pass attempts: ";
  if (helper = helpers.AwayPassAttempts) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPassAttempts); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Pass interceptions: ";
  if (helper = helpers.AwayPassingInterceptions) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPassingInterceptions); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Pass completion %: ";
  if (helper = helpers.AwayPassCompletionPercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPassCompletionPercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Passing yards: ";
  if (helper = helpers.AwayPassingYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPassingYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Yards per catch: ";
  if (helper = helpers.AwayYardsPerCatch) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayYardsPerCatch); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-6\">\n          <p>Pass completions: ";
  if (helper = helpers.HomePassCompletions) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePassCompletions); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Pass attempts: ";
  if (helper = helpers.HomePassAttempts) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePassAttempts); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Pass interceptions: ";
  if (helper = helpers.HomePassingInterceptions) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePassingInterceptions); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Pass completion %: ";
  if (helper = helpers.HomePassCompletionPercentage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePassCompletionPercentage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Passing yards: ";
  if (helper = helpers.HomePassingYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePassingYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Yards per catch: ";
  if (helper = helpers.HomeYardsPerCatch) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeYardsPerCatch); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div><div class=\"columns small-12 text-center\">\n          <hr />\n          <h5>Fumbles</h5>\n        </div>\n        <div class=\"columns small-6 text-right\">\n          <p>Fumbles: ";
  if (helper = helpers.AwayFumbles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayFumbles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Fumbles lost: ";
  if (helper = helpers.AwayFumblesLost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayFumblesLost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-6\">\n          <p>Fumbles: ";
  if (helper = helpers.HomeFumbles) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeFumbles); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Fumbles lost: ";
  if (helper = helpers.HomeFumblesLost) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeFumblesLost); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-12 text-center\">\n          <hr />\n          <h5>Punting</h5>\n        </div>\n        <div class=\"columns small-6 text-right\">\n          <p>Punts: ";
  if (helper = helpers.AwayPunts) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPunts); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Punting average: ";
  if (helper = helpers.AwayPuntingAverage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPuntingAverage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Punting yards: ";
  if (helper = helpers.AwayPuntingYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPuntingYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-6\">\n          <p>Punts: ";
  if (helper = helpers.HomePunts) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePunts); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Punting average: ";
  if (helper = helpers.HomePuntingAverage) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePuntingAverage); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Punting yards: ";
  if (helper = helpers.HomePuntingYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePuntingYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-12 text-center\">\n          <hr />\n          <h5>Penalties</h5>\n        </div>\n        <div class=\"columns small-6 text-right\">\n          <p>Penalties: ";
  if (helper = helpers.AwayPenalties) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPenalties); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Penalty Yards: ";
  if (helper = helpers.AwayPenaltyYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayPenaltyYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n        <div class=\"columns small-6\">\n          <p>Penalties: ";
  if (helper = helpers.HomePenalties) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePenalties); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n          <p>Penalty Yards: ";
  if (helper = helpers.HomePenaltyYards) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomePenaltyYards); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"columns medium-4\">\n    <h4>Box score</h4>\n    <table class=\"box-score\">\n      <tbody>\n        <tr>\n          <td></td>\n          <td>1st</td>\n          <td>2nd</td>\n          <td>3rd</td>\n          <td>4th</td>\n          <td>OT</td>\n          <td>Final</td>\n        </tr>\n        <tr>\n          <td>";
  if (helper = helpers.AwayTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.AwayFirstQuarterPoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayFirstQuarterPoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.AwaySecondQuarterPoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwaySecondQuarterPoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.AwayThirdQuarterPoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayThirdQuarterPoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.AwayFourthQuarterPoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayFourthQuarterPoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.AwayOvertimePoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayOvertimePoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.AwayTeamScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n        <tr>\n          <td>";
  if (helper = helpers.HomeTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.HomeFirstQuarterPoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeFirstQuarterPoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.HomeSecondQuarterPoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeSecondQuarterPoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.HomeThirdQuarterPoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeThirdQuarterPoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.HomeFourthQuarterPoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeFourthQuarterPoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.HomeOvertimePoints) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeOvertimePoints); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n          <td>";
  if (helper = helpers.HomeTeamScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n";
  return buffer;
  });

this["Templates"]["noresults"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"no-results\">\r\n  <h4>No results</h4>\r\n  <p>Your search for <em>";
  if (helper = helpers.search) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.search); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</em> didn't turn up any results.</p>\r\n</div>\r\n";
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

this["Templates"]["weekselect"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n        <option value=\""
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" "
    + escapeExpression((helper = helpers.selected || (depth1 && depth1.selected),options={hash:{},data:data},helper ? helper.call(depth0, (data == null || data === false ? data : data.index), (depth1 && depth1.currentWeek), options) : helperMissing.call(depth0, "selected", (data == null || data === false ? data : data.index), (depth1 && depth1.currentWeek), options)))
    + ">"
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\r\n      ";
  return buffer;
  }

  buffer += "<div class=\"row collapse postfix-radius\">\r\n  <div class=\"small-1 columns\">\r\n    <a href=\"#\" class=\"prev"
    + escapeExpression((helper = helpers.prevDisabled || (depth0 && depth0.prevDisabled),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.currentWeek), options) : helperMissing.call(depth0, "prevDisabled", (depth0 && depth0.currentWeek), options)))
    + "\">\r\n      <span class=\"prefix\"><i class=\"fa fa-caret-left\"></i></span>\r\n    </a>\r\n  </div>\r\n  <div class=\"small-10 columns\">\r\n    <select>\r\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weeks), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </select>\r\n  </div>\r\n  <div class=\"small-1 columns\">\r\n    <a href=\"#\" class=\"next"
    + escapeExpression((helper = helpers.nextDisabled || (depth0 && depth0.nextDisabled),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.currentWeek), (depth0 && depth0.numWeeks), options) : helperMissing.call(depth0, "nextDisabled", (depth0 && depth0.currentWeek), (depth0 && depth0.numWeeks), options)))
    + "\">\r\n      <span class=\"postfix\"><i class=\"fa fa-caret-right\"></i></span>\r\n    </a>\r\n  </div>\r\n</div>\r\n";
  return buffer;
  });

return this["Templates"];

});