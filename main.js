(function(){
       var $productElement = document.querySelector(".etsyItems");
       var url = "https://api.etsy.com/v2/listings/active.js?api_key=cyb59loklak469vjw5p7y62q&keywords=whiskey&includes=Images,Shop&limit=24&sort_on=score";
       fetchJSONP(url, app);

       function app(httpReturn){
           var products = httpReturn.results;

           displayProducts(products);
       }
       
       function displayProducts(products){
           console.log(products);
       }
       
       function fetchJSONP(url, callback) {
           var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
           var script = document.createElement('script');

           window[callbackName] = function(data) {
               delete window[callbackName];
               document.body.removeChild(script);
               callback(data);
           };

           script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
           document.body.appendChild(script);
       }
   });