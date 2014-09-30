this["JST"] = this["JST"] || {};

this["JST"]["game"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;

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
  
  
  return " winner";
  }

function program7(depth0,data) {
  
  
  return "\r\n      <a class=\"fav-away faved\" href=\"#\"><i class=\"fa fa-star\"></i></a>\r\n    ";
  }

function program9(depth0,data) {
  
  
  return "\r\n      <a class=\"fav-away\" href=\"#\"><i class=\"fa fa-star-o\"></i></a>\r\n    ";
  }

function program11(depth0,data) {
  
  
  return "\r\n      <a class=\"fav-home faved\" href=\"#\"><i class=\"fa fa-star\"></i></a>\r\n    ";
  }

function program13(depth0,data) {
  
  
  return "\r\n      <a class=\"fav-home\" href=\"#\"><i class=\"fa fa-star-o\"></i></a>\r\n    ";
  }

function program15(depth0,data) {
  
  
  return "<span class=\"right\">Final</span>";
  }

  buffer += "<div class=\"inner";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.HomeTeamFav), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n  <div class=\"team away-team";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.AwayTeamWon), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.AwayTeamFav), {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  if (helper = helpers.AwayTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class=\"mascot\">";
  if (helper = helpers.AwayTeamNickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamNickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n    <span class=\"right\"><i class=\"fa fa-chevron-right\"></i>";
  if (helper = helpers.AwayTeamScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.AwayTeamScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n  </div>\r\n  <div class=\"team home-team";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.HomeTeamWon), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\r\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.HomeTeamFav), {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  if (helper = helpers.HomeTeamName) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamName); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class=\"mascot\">";
  if (helper = helpers.HomeTeamNickname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamNickname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n    <span class=\"right\"><i class=\"fa fa-chevron-right\"></i>";
  if (helper = helpers.HomeTeamScore) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.HomeTeamScore); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\r\n  </div>\r\n  <div class=\"game-meta\">"
    + escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.GameDate), options) : helperMissing.call(depth0, "date", (depth0 && depth0.GameDate), options)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.GameScoreIsFinal), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\r\n</div>\r\n";
  return buffer;
  });

this["JST"]["stories"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
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
    + " <small>statesman.com</small></h3>\r\n<ul class=\"small-block-grid-1 medium-block-grid-3 large-block-grid-4\">\r\n  ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.objects), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>\r\n";
  return buffer;
  });