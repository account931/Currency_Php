<!DOCTYPE html>
  <html>
    <head>
      <title>Live Currency</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  
	  <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="Currency" />
      <meta name="keywords" content="Currency calculator">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <script src="js/myCurrency.js"></script><!--  Core Currency JS-->  
	  <script src="js/currenciesList.js"></script><!--  List of currencies + generates <list><option> JS--> 
	 
      <link rel="stylesheet" type="text/css" media="all" href="css/myCurrency.css">
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- Icon lib-->
	  
	    <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

  </head>
  <body>
  
  
  
  
  
  
  
  
  
  
  
  
  
   <div id="headX" class=" text-center myShadow colorAnimate" style ='background-color:lavender;padding:10px;'> <!--#2ba6cb;-->
	   
         <h1 id="h1Text">
             <img id ="wLogo" class="shrink-large" src=""/>		 
		     <span id="textChange" class="textShadow"> Live Currency Exchange rates</span> 
			 <i class="	fa fa-balance-scale" style="font-size:59px"></i> 
		     
			 <img id ="wLogo2" src=""/>
			 <br>
			 <?php date_default_timezone_set("Europe/Kyiv"); ?>
			 <span id="" style="font-size:0.4em;" class="textShadow">last update:   <?php echo date("l") . "  " . date("d/m/Y") ." " .  date("h:i") ?>  from Openexchangerates Stock</span> 
			
			 
		 </h1> 
		   
           <!--<p class="header_p">All cities weather processor</p>-->  <!--generates random lists, ramdomizes integers, etc--> <!--<span class="glyphicon glyphicon-duplicate"></span>-->  
	   </div>
	   
	 



         <br>
         <div class="wrapper grey">
    	     <div class="container">
		   
		   
		   
		         <div class="col-sm-12 col-xs-12 myShadow mainX" style="background-color:lavender;">
				     <i class="	fa fa-dollar" style="font-size:40px"></i>&nbsp;&nbsp;<i class="fa fa-toggle-on" style="font-size:40px"></i>
				 
			         <form class="form-inline" action="Classes/Currency.php">
                          <div class="form-group">
                              <label for="sum">Sum</label>
                              <input type="number" min="1" value="1" class="form-control" id="sum" name="sumX">
                          </div>
						  
                          <div class="form-group" id="Currency1_dropdown1"><!-- Currency 1 dropdown (from), generated in js/currenciesList.js with function {generateSelectOption(selectedOption, i, spanID, textR)}--> 
                          </div>
						  
						  <div class="form-group" id="Currency2_dropdown2">> <!-- Currency 2 dropdown (to), generated in js/currenciesList.js with function {generateSelectOption(selectedOption, i, spanID, textR)}--> 
                          </div>
						  
                          <input id ="getCurrencyExchange" type="button" class="btn btn-default fa fa-cc-visa" style="font-size:20px" value="OK">
						  <input id ="getAllCurrencyList" type="button" class="btn btn-default fa fa-cc-visa" style="font-size:20px" value="Show all List">
						  <br><br><br>
                      </form>
				   
			     </div> <!--END  <div class="col-sm-4 col-xs-12 myShadow mainX-->
				
				 
				  
				  
				  
				  
				  <!----Currency Core result---->
				  <!-- This div accept the JS html result--><!--style='word-wrap: break-word;'--> 
				  
				  <div class="col-sm-12 col-xs-12 myShadow" id="exchangeResult"> <!-- div calc exchange-->
				  </div> <!-- END class="row exchangeResult">-->
				
				 <div class="col-sm-12 col-xs-12 myShadow" id="currencyResult"> <!-- div for listing all curr rates-->
		
				 </div> <!-- END class="row CurrencyResult">-->
				  
				  
				  
				 
				 <br><br><br><br><br><br><br><br><br><br><br>
				 <!-------------------------------FACEBOOK SHARE--------------------------------------->
				 <!-- my custom FB share-->
				 <!--
				 <div class="col-sm-12 col-xs-12 facebook>
				     
					 <center>
                         <a class="fb-share-button large" href="https://www.facebook.com/sharer/sharer.php?u=http://waze.zzz.com.ua/store_locator" target="_blank"><input type="button" value="MyShare" style="background:blue;padding:5px 20px 5px 20px;color:white;border-radius:20px;"/></a>
				    
					     <div class="fb-share-button large" 
                             data-href="=https://www.facebook.com/sharer/sharer.php?u=http://waze.zzz.com.ua/store_locator" 
                             data-layout="button_count">
                         </div>
					</center>
				 </div>--><!-- END <div class="col-sm-4 col-xs-12 facebook>-->
				 
                 <!-----------------------------END FACEBOOK SHARE--------------------------------------->                  
     
    	     </div><!-- /.container -->			  		
    	 </div><!-- /.wrapper -->

                

       
		<!---------PAGE LOADER START, visible while the page is loading, uses js/main_layout.js, css is in yii2_mine.css--------------->
	    <div id="overlay" class="col-sm-12 col-xs-12 myShadow">
		    <center>
		        <img src="images/spinner.gif" alt="" style="width:33%;"/>
			</center>
        </div>
        <!---------END PAGE LOADER --------------->
	
	
	
		
		
		  <!-----Footer ---->
		        
				<div class="footer "> <!--navbar-fixed-bottom  fixxes bootom problem-->
				    <!--Contact: --> <strong>dimmm931@gmail.com</strong><br>
					<?php  echo date("Y"); ?>
				</div>
		<!--END Footer ---->  
		
		
		
	
		
		
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
 <!----------------------- FB API  share---------------------->
 <center><br><br>
  
 <script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v3.0';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

<!-- Your share button code -->
<!--
  <div class="fb-share-button large" 
    data-href="=http://waze.zzz.com.ua/store_locator/" 
    data-layout="button_count">
  </div>
  -->
  <!----------------------- END FB API  share---------------------->

 <br>
 
 
 

 

</body>
</html>