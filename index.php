<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-title" content="Prep Scores">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="apple-touch-icon" href="//projects.statesman.com/common/appicon_aas.jpg">

  <link rel="icon" type="image/png" href="//projects.statesman.com/common/favicon.ico">

  <meta name="description" content="Scores for high school football games from around Central Texas.">

  <meta property="og:title" content="Texas High School Football Scores"/>
  <meta property="og:description" content="Scores for high school football games from around Central Texas."/>
  <meta property="og:image" content="http://projects.statesman.com/common/appicon_aas.jpg"/>
  <meta property="og:url" content="http://projects.statesman.com/sports/scores/"/>

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@statesman" />
  <meta name="twitter:title" content="Central Texas High School Football Scores" />
  <meta name="twitter:description" content="Scores for high school football games from around Central Texas." />
  <meta name="twitter:image" content="http://projects.statesman.com/common/appicon_aas.jpg" />
  <meta name="twitter:url" content="http://projects.statesman.com/sports/scores/" />

  <title>Central Texas High School Football Scores | Statesman.com</title>

  <link href="dist/styles.css" rel="stylesheet" />

  <?php include "../../common/metrics-head.js";?>

  <!-- Advertising -->
  <script type='text/javascript'>
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  (function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') +
    '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
  })();
  </script>

  <script type='text/javascript'>
  googletag.cmd.push(function() {
    googletag.defineSlot('/12523293/www.statesman.com-wired/sports/high_school_football', [728, 90], 'div-gpt-ad-1403295829614-1').addService(googletag.pubads());
    googletag.defineSlot('/12523293/www.statesman.com-wired/sports/high_school_football', [320, 50], 'div-gpt-ad-1403295829614-3').addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.pubads().enableVideoAds();
    googletag.enableServices();
  });
  </script>
</head>
<body>

  <div style="overflow-x:hidden;">

  <?php
    /* Generate sharing URLs */
    $url = urlencode("http://projects.statesman.com/sports/scores/");
    $fb_url = "https://www.facebook.com/sharer.php?u=" . $url;
    $tw_url = "https://twitter.com/intent/tweet?url=" . $url . "&related=statesman";
  ?>

	<nav class="top-bar">
		<ul class="title-area">
			<li class="name"><h1>
				<a href="http://www.statesman.com/" target="_blank"><img width="546" height="52" src="assets/logo.png"></a>
			</h1></li>
		</ul>
	</nav>

  <div id="share-buttons">
    <ul class="right">
      <a href="<?php print $fb_url; ?>" target="_blank" class="button round tiny facebook"><i class="fa fa-facebook"></i></a>
      <a href="<?php print $tw_url; ?>" target="_blank" class="button round tiny twitter"><i class="fa fa-twitter"></i></a>
    </ul>
  </div>

  <div class="row small-12 medium-12 large-12 centered">

    <h1>High school scoreboard</h1>

    <noscript>
      <div data-alert class="alert-box alert radius">
        This app requires JavaScript. To view scores, enable JavaScript in your Web browser and reload this page.
      </div>
    </noscript>

    <div class="form row">
      <div id="week" class="medium-6 columns"></div>
      <div id="team-search" class="medium-6 columns">
        <div class="row collapse postfix-radius">
          <div class="small-11 columns">
            <input type="text" placeholder="Team" />
          </div>
          <div class="small-1 columns">
            <a href="#" class="clear">
              <span class="postfix"><i class="fa fa-times"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div data-alert class="alert-box secondary text-alert show-for-large-up">
      <i class="fa fa-mobile"></i> Want high school text alerts on your phone? <a target="_blank" href="http://www.statesman.com/sports/high-school-sports-score-alerts/">Sign up at statesman.com</a>.
    </div>

    <ul id="scores" class="small-block-grid-1 medium-block-grid-3 large-block-grid-5"></ul>

    <div id="stories"></div>

    <hr />

  </div>

  <!-- Advertising/metrics -->
  <div class="text-center advertising">
    <div id='div-gpt-ad-1403295829614-3' class="show-for-small-only">
      <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1403295829614-3'); });
      </script>
    </div>
    <div id='div-gpt-ad-1403295829614-1' class="show-for-medium-up">
      <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1403295829614-1'); });
      </script>
    </div>
  </div>

  <div id="footer" class="row small-11 medium-8 large-6 centered">
    <?php include "../../common/footer.php"; ?>
  </div>

  <!-- statesman specfic stuff -->
  <script type="text/javascript">
    var projectSite = "statesman";
    var projectChannel = "sports";
    var projectCategory = "high school football";
    var projectSubCategory = "mobile scores";
  </script>

  <?php include "../../common/metrics.js"; ?>

  <script src="dist/scripts.js" ></script>

  <?php if($_SERVER['SERVER_NAME'] === 'localhost'): ?>
    <script src="//localhost:35729/livereload.js"></script>
  <?php endif; ?>

  </div>

</body>
</html>
