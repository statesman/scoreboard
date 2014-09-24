<?php

  // Read the count URL parameter; provide 12 as defaulf it nothing's set
  if(!isset($count) || !is_numeric($count)) {
    $count = $_GET['count'];
  }
  else {
    $count = 12;
  }

  // Fetch the stories from Medley as JSON
  $json = file_get_contents('http://www.statesman.com/api/content/v1/automaticlist/7118/?format=json&omit_desc_html=true');
  $json = json_decode($json);

  // Truncate the story list, based on $count
  $json->objects = array_slice($json->objects, 0, $count);

  // Return the resutls as JSON
  header('Content-Type: application/json');
  print json_encode($json);

?>
