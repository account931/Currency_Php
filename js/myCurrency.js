$(document).ready(function(){
	
	
	$("#getCurrency").click(function() {  
	    myAjaxCurrencyRequest();
	});
	
	
	function myAjaxCurrencyRequest() 
	{	
        // send  data  to  PHP handler  ************ 
        $.ajax({
            url: 'ajax_php/Currency_ajax.php',
            type: 'POST',
			dataType: 'JSON', // without this it returned string(that can be alerted), now it returns object
			//passing the city
            data: { 
			    
			},
            success: function(data) {
                // do something;
                //$("#weatherResult").stop().fadeOut("slow",function(){ $(this).html(data) }).fadeIn(2000);
			    //alert("S");
				alert("AED is " + data.rates.AED);
				getAjaxCurrencyAnswer(data);
            },  //end success
			error: function (error) {
				$("#currencyResult").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br> NO Currency FOUND</h4>")}).fadeIn(2000);
            }	
        });
                                               
       //  END AJAXed  part 
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// Core action which includes getWeather(function (data), it is called onLoad and onClick
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function getAjaxCurrencyAnswer(data)
	{
		
		var l = Object.keys(data.rates).length;
		//alert("Found currencies " + l);
		
		var alls = "<h3>Found currencies " + l + ". <h3><br>";
		
		for (var key in data.rates) {
	    //for (var i = 0; i < l; i++){  
			alls = alls + "<div class='col-sm-1 col-xs-1'>" + key + ":</div>" + 
			              "<div class='col-sm-1 col-xs-3'>" + data.rates[key] +  "</div>" +
					      "<div class='col-sm-1 col-xs-5'> per 1 USD </div>";
		}
	
	//html weather result with animation
    $("#currencyResult").stop().fadeOut("slow",function(){ $(this).html(alls)}).fadeIn(2000);
	
	
		  
		  

	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
// end ready	
	