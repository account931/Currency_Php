$(document).ready(function(){
	
	var wallURL = [
	    'https://i.pinimg.com/originals/08/58/d6/0858d6df28c34239fe8e0077e19be750.png',  //cash
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQvp8gXVXK0Vb7ctlANuwugGW13OTnAWqriztJUGoBRXd0CXK8',    //blue
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDxrC1c4GaaJmBlciFeUZ8bsHheWefJXbGiUOFYOnXR5oGrVhAg',  //steel
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJTFmh8ur7hPYFn543z7OnYh1Kv3d51AQWWFiPDjJH8Bm7O3K',    //blue 2
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcDV5NdKfWnGR_cnEIO-iT-3hX_HtEpgPv5OFIhG3-Kgt_4Z0',    //green
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgH3NYs8BS69_Rf02K3t4TO_TLuYoYYzz0tXq_fb5bnmmzctFx',    //semi white
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4eUvBUEqNvtTWJqe2n0j-LrZZHpXMCLRII8gBdj66J8yyg_h',     //steel
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMuDL_pJKTnIt9lWX7WxiXdQOD7pg0TMXHdS5opQixcod3IbozDQ',   // white color
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mN6UajC1pXOOJ11DW1OKLL-X8tZ_0LzIuw3axNFgt2veGffesw',    //very color
		'https://thumbs.dreamstime.com/z/sunny-seamless-pattern-yellow-orange-sun-shapes-blue-background-34440134.jpg',      //patt blue
		'https://rfclipart.com/image/preview/34-00-e9/seamless-color-hand-drawn-sunny-pattern-Download-Royalty-free-Vector-File-EPS-153192.jpg', //mandala
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0QY9pg43mzXhjbmW_N6p7ztO1R8ztK6cU8bx3Np6e-Pn8IJwRA',  //rain
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt8cHzsOjY4rCNqAdG4jUJY0VseU4_3IsB5QRwNuRGJk5ed5Awtg',  //rain2
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRMbAKCXIwpkaYHqS2pPDSqWz1ko9t8uqTTfrJGFdZHciymtu',   //thunder
		'http://www.proactivedental.com.au/wp-content/uploads/2015/10/girl-248x300.png',   //fml
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEPWGOzxTXCXYCBi4WajukuQQ7Q7PlOA-FGzQsKV_cxjT2fPvxw', //sunset
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIBUy2Ru9gOD3vJUrRnWqCojmEftftOM0K_WvmW6fi70MDAl8',  //search
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwOeUhq4-8t_xS98RZyj6Atk-tWNIXiZphHolDpusOAAj607S', //road
		
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1OpSRjwhd0nyJcTZYZ6lUo4v46eYVpZkSJgOizuVk0ldeFffg', //islam
		'https://banner2.kisspng.com/20180308/oze/kisspng-islamic-architecture-motif-pattern-islamic-traditional-decorative-patterns-5aa104eb92d7b2.2841900615205019956015.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYsQ04RfZT4vWwxrfTCXuBAmeG6YSpzJZtT-bPhVbxj9u0CfyZ',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz_GlZLlJCAW4mXLKNOqvVEs8NdUOalVbzGdl9Sdwnf-wpapp7Jg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXycguf1VLYxNuHJ_Vp0ynyEYCrn0tI76jl4fRCrnfGpod3UzWzQ',
		'http://www.wallpaper-box.com/smartphone/wp-content/uploads/2014/09/Colorful-abstract-wallpaper-433x191.jpg',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzFbadouFp0oi4agez0lv9En7GPsGyQE1G_bXQX085b7X_pfkFg',
		'http://getdrawings.com/image/space-drawing-56.jpg',         //space-drawing-56
		'http://getdrawings.com/images/space-drawing-3.jpg',        //space black white
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsI5s1TRhYvyua-35eDL5XbPiU3VLH9Kp15hVZECaZRheH2bVH',
		'https://d298hcpblme28l.cloudfront.net/product-lg/0ef1de67e9bf4a860e954aa3b1e2bad1.jpg',                  //space black
		'https://png.pngtree.com/element_origin_min_pic/17/08/19/0dffc570d4ae2954f3b949e5868fd774.jpg',          // star sky
		'https://www.wpclipart.com/textures/floral/floral_seamless_pattern_green.png',           //green
		'https://banner2.kisspng.com/20180226/vzw/kisspng-coffee-green-tea-cafe-matcha-green-coffee-shop-pattern-5a94b3d232f101.3641932715196948022087.jpg',  //green cattle
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbHoI7xYqlWr1zZAtoA1tAalUJaPixTnAvZdr95QD4IKCjou3',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FtYsBBt6wS_Lx7mx3BeEtIKgIn30fyJXHCPkBXzUHKrrDvastQ',
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbNCaXAUaKeyrmJWiqlAIUGqgH9zxh1GAXn0uBAnJsGMp07rSaZA',
   ];
   
	
	
	
	
	// Click to change theme
	$("#changeStyle").click(function() {  
	    changeBGColor();   
	}); 
	
	
	var counter = 0;
	
	function changeBGColor() {
		if(counter==wallURL.length){
			counter = 0;
		} else {
		counter++;
		}
        var cols = document.getElementsByClassName('head-style');
        for(i=0; i<cols.length; i++) {
            cols[i].style.backgroundImage = 'url(' + wallURL[counter] + ')';
      
        }
     }



});
// end ready	
	