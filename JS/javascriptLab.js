
console.log('hello file');

window.onload = function(){
	
console.log('loaded...');

document.body.style.height = '200pt';

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';
/*
script['data-height']   = '10px';
script['data-position'] = 'top';
script['data-message']  = 'We use cookies!';
*/
script.setAttribute('data-height', '10px');
script.setAttribute('data-position', 'top');
script.setAttribute('data-message', 'We use cookies!');

document.head.appendChild(script); 

script.onload = function()
{
  console.log('loaded script');

  // console.log( initCookieConsent );
}
}
console.log('ready');