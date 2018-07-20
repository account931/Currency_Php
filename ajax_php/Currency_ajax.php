<?php
    //include '../Classes/autoload.php'; //uses autoload instead of manual includin each class-> Error if it is included in 2 files=only1 is accepted
	
	
	   
    //make sure that this script can be called from your application, check if  a Constant was declared, u should define $SecurityConstant in main index.php
	//$a = new Security();
    //$a->checkSecurityConstant();  //CHECK SECURITY!!!!!!!!!!!!!!!
   
   
    // run Class RunWeatherRequest to send file_get_contents($data_url)
	//RunWeatherRequest::askWeatherApi();
	
	
	
	
	
	
	
	
	
	
	//$city = $_POST['serverCity'];
	       //echo "We get " . $city;
	       //$city = "Kyiv";
	
	       //form the URL for weather API
	       $data_url = "https://openexchangerates.org/api/latest.json?app_id=14721b0e0be44cc9b0d056ef5a3470cd";  //
	      //echo "<br>url " . $data_url;
	
	     // Gets the OpenWeather API
         if (!$json = file_get_contents($data_url)) {
		     echo "<br>Currency php Error</br>";
	     }
         //echo $json;
         //$obj = json_decode($json,true);//,  true used for [], not  used  for '->';
	
         echo $json;
         //print_r($obj); // display the JSOn to screen
         //echo json_encode($obj); // MAke sure JSOn encode  gotten result 
	
	
	
?>