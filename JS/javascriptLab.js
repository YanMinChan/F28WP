
console.log('hello file');

window.onload = function(){
	
console.log('loaded...');

document.body.style.backgroundColor = "lightblue";

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';

script.setAttribute('data-height', '10px');
script.setAttribute('data-position', 'top');
script.setAttribute('data-message', 'We use cookies!');

document.body.appendChild(script); 

script.onload = function()
{
  console.log('loaded script');
  
}
}
console.log('ready');