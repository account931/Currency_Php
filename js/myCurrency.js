$(document).ready(function(){
	
	window.myJsonData; //will store to global json answer
	
	// Click to convert specified sum to specified currency
	$("#getCurrencyExchange").click(function() {  
	    myAjaxCurrencyRequest(); //runs ajax request to get all JSON curr List
		calcTheSum();  // calc  the exchange rate of specified sum
	}); 
	
	
	// Click to show all 170 currencies rate
	$("#getAllCurrencyList").click(function() {  
	    myAjax_toShowAllCurrenciesList();
	});
	
	
	
	
	
	//onClickconverts specified sum to specified currency
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
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
			async: false,
            success: function(data) {
                // do something;
                //$("#weatherResult").stop().fadeOut("slow",function(){ $(this).html(data) }).fadeIn(2000);
			    //alert("S");
				window.myJsonData = data; //assing to global
				alert("AED is " + data.rates.AED);
				
				getAjaxCurrencyAnswer(data);
            },  //end success
			error: function (error) {
				$("#currencyResult").stop().fadeOut("slow",function(){ $(this).html("<h4 style='color:red;padding:3em;'>ERROR!!! <br> NO Currency FOUND</h4>")}).fadeIn(2000);
            }	
        });
                                               
       //  END AJAXed  part 
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// Function that fires on ajax success of {myAjaxCurrencyRequest()} and forms the answer
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function getAjaxCurrencyAnswer(data)
	{
		
		var l = Object.keys(data.rates).length;
		//alert("Found currencies " + l);
		
		var alls = "<h3 class='red'>Available amount of  currencies => " + l + " </h3><br>";
		
		for (var key in data.rates) {
	    //for (var i = 0; i < l; i++){  
			alls = alls + "<div class='col-sm-1 col-xs-2'>" + key + ":</div>" + 
			              "<div class='col-sm-2 col-xs-5'>" + data.rates[key] +  "</div>" +
					      "<div class='col-sm-9 col-xs-5'> per 1 USD </div>";
		}
	
	//html weather result with animation
    $("#currencyResult").stop().fadeOut("slow",function(){ $(this).html(alls)}).fadeIn(2000);
	
	
		  
		  

	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// Function that calc  the exchange rate of specified sum
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function calcTheSum()
	{
		if (checkIfNotTheSameVal()){
		
             var curr1 = $("#sel1").val();
		     var curr2 = $("#sel2").val();
	     
		    
		 
		     //alert(curr1);
	         //alert("uu " + window.myJsonData.rates.GBP);
			 //alert("Comapare " +  window.myJsonData.rates.GBP + " vs " + window.myJsonData.rates[curr1]);
			 //alert("OBJ- " + JSON.stringify(window.myJsonData.rates[x], null, 4));  
		     //alert(window.myJsonData.rates[curr2]);
			 
			 
			 // Mega Err was here-> use {window.myJsonData.rates[curr1]} not {window.myJsonData.rates.curr1} to access json object value while the key is a variable from <select><option>
			 var amount = $("#sum").val();
			 var selected_toUSD = amount / window.myJsonData.rates[curr1]; //gets the amount of selected_1 currency in USD
			 var finalExchange = (selected_toUSD *  window.myJsonData.rates[curr2]).toFixed(2) + " " + curr2; //gets the Final sum ( USD sum * exch rate selected_2 currency),{.toFixed(2)} = 3.77 instead 3.77458745438954
		     var finalText = "<h3 class='red border'><i class='fa fa-child' style='font-size:48px;margin-left:5%;'></i><br><br>" +  $("#sum").val() + " " + curr1 + " = " + finalExchange + "</h3>"; // 100 UAH = 4 USD
			 
			 //html weather result with animation
             $("#exchangeResult").stop().fadeOut("slow",function(){ $(this).html(finalText)}).fadeIn(2000);
		 
		}  
		  

	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	// Function that 
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	
	function checkIfNotTheSameVal()
	{
	    if($("#sel1").val()== $("#sel2").val()){
			alert("Same value, change one of them");
			return false;
		} else {
			return true;
		}
		  	  

	}
	
	// **                                                                                  **
    // **************************************************************************************
    // **************************************************************************************
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//onClickconverts shows all 170 currencies rate
	// **************************************************************************************
    // **************************************************************************************
    //                                                                                     **
	function myAjax_toShowAllCurrenciesList() 
	{
        alert("K");	
        myAjaxCurrencyRequest(); //runs ajax request to get all JSON curr List
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
// end ready	
	