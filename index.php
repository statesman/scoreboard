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
  <meta name="twitter:title" content="Texas High School Football Scores" />
  <meta name="twitter:description" content="Scores for high school football games from around Central Texas." />
  <meta name="twitter:image" content="http://projects.statesman.com/common/appicon_aas.jpg" />
  <meta name="twitter:url" content="http://projects.statesman.com/sports/scores/" />

  <title>Texas High School Football Scores</title>

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

	<nav class="top-bar">
		<ul class="title-area">
			<li class="name"><h1>
				<a href="http://www.statesman.com/" target="_blank"><img src="//projects.statesman.com/common/white-logo-small.png"></a>
			</h1></li>
		</ul>
	</nav>

  <?php
    /* Generate sharing URLs */
    $url = urlencode("http://projects.statesman.com/sports/scores/");
    $fb_url = "https://www.facebook.com/sharer.php?u=" . $url;
    $tw_url = "https://twitter.com/intent/tweet?url=" . $url . "&related=statesman";
  ?>

  <div class="row small-12 medium-12 large-12 centered">

    <div class="row">
      <div class="columns small-9 medium-10">
        <h1>High school football scores</h1>
      </div>
      <div class="columns small-3 medium-2">
        <div id="share-buttons">
          <a href="<?php print $fb_url; ?>" class="button round tiny facebook"><i class="fa fa-facebook"></i></a>
          <a href="<?php print $tw_url; ?>" class="button round tiny twitter"><i class="fa fa-twitter"></i></a>
        </div>
      </div>
    </div>

    <noscript>
      <div data-alert class="alert-box alert radius">
        This app requires JavaScript. To view scores, enable JavaScript in your Web browser and reload this page.
      </div>
    </noscript>

    <?php
      /*
       * Generate an array with a list of all Fridays in the season
       */
      $week_count = 11;
      $first_friday = strtotime('8/29/2014');
      $today = time();

      $all_fridays = array();
      $i = 0;
      $marked = FALSE;
      while($i < $week_count) {
        $stamp = $first_friday + (604800 * $i); // 604800 = 1 week
        $all_fridays[$i + 1] = array(
          'date' => date('Y-m-d', $stamp)
        );
        // Mark the current week with a boolean
        // Switch to the next week on Thursday
        if($today < ($stamp + (86400 * 6)) && !$marked) {
          $all_fridays[$i + 1]['current'] = TRUE;
          $marked = TRUE;
        }
        $i++;
      }
    ?>

    <form class="hide">
      <div class="row">
        <div class="medium-6 columns">
          <select id="week">
            <?php foreach($all_fridays as $week => $friday): ?>
              <option value="<?php print $friday['date']; ?>"<?php if($friday['current']) print " selected"; ?>>Week <?php print $week; ?></option>
            <?php endforeach; ?>
          </select>
        </div>
        <div id="team-search" class="medium-6 columns">
          <input type="text" placeholder="Team" />
          <i class="fa fa-times-circle clear"></i>
        </div>
      </div>
    </form>

    <div data-alert class="alert-box secondary text-alert show-for-large-up">
      <i class="fa fa-mobile"></i> Want high school text alerts on your phone? <a target="_blank" href="http://www.mogreet.com/clients/229/v2/cmg-subscriptions.rb?property=statesman.com">Sign up at statesman.com</a>.
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

</body>
</html>
