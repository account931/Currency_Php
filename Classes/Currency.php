<?php
//NOT USED ANYTHING FROM THIS FILE!!!!!!!!!!!!!!!!!
// function to google calc-NOT USED
function currency($from_Currency,$to_Currency,$amount) {
    $amount = urlencode($amount);
    $from_Currency = urlencode($from_Currency);
    $to_Currency = urlencode($to_Currency);
    $url = "http://www.google.com/ig/calculator?hl=en&q=$amount$from_Currency=?$to_Currency";
    $ch = curl_init();
    $timeout = 0;
    curl_setopt ($ch, CURLOPT_URL, $url);
    curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch,  CURLOPT_USERAGENT , "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1)");
    curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $rawdata = curl_exec($ch);
    curl_close($ch);
    $data = explode('"', $rawdata);
    $data = explode(' ', $data['3']);
    $var = $data['0'];
    return round($var,2);
}






// open exchange URL // valid app_id * REQUIRED *  //https://openexchangerates.org/api/latest.json?app_id=14721b0e0be44cc9b0d056ef5a3470cd
$exchange_url = 'https://openexchangerates.org/api/latest.json';
$params = array(
    'app_id' => '14721b0e0be44cc9b0d056ef5a3470cd'
);

// make cURL request // parse JSON
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => $exchange_url . '?' . http_build_query($params),
    CURLOPT_RETURNTRANSFER => true
));
$response = json_decode(curl_exec($curl));
curl_close($curl);

if (!empty($response->rates)) {
    // convert 150 USD to JPY ( Japanese Yen )
    echo $response->rates->JPY * 150;
} else {
	echo "EMPTY";
}





   
   //http://free.currencyconverterapi.com/api/v5/convert?q=EUR_USD&compact=y
   //https://stackoverflow.com/questions/3139879/how-do-i-get-currency-exchange-rates-via-an-api-such-as-google-finance
   //$b = currency($_GET['fromX'], $_GET['toX'], $_GET['sumX']);
   //echo $b;

?>