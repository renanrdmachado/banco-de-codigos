
  var width 		= '80px';
  var height 		= '80px';
  var size 			= '2px';
  var topColor 		= 'rgba(255,255,255,1)';
  var bottomColor 	= 'rgba(255,255,255,1)';
  var leftColor 	= 'rgba(0,0,0,0)';
  var rightColor 	= 'rgba(0,0,0,0)';
  var tempo 		= '1s';
  var efeito 		= 'ease';
  var maskBG 		= '#004b60';

  $('body').attr('onload','loader()');
  $('body').before("<script>var load;function loader() {load = setTimeout(showPage, 500);} function showPage() {$('.loadermask').fadeOut('slow');}</script>");
  $('body').before("<style>.loader { border: "+size+" solid rgba(255,255,255,0); border-top: "+size+" solid "+topColor+";border-bottom: "+size+" solid "+bottomColor+"; border-left: "+size+" solid "+leftColor+";border-right: "+size+" solid "+rightColor+";border-radius: 50%; width: "+width+"; height: "+height+"; animation: spin "+tempo+" "+efeito+" infinite;}@keyframes spin { 0% { transform: rotate(0deg); }  100% { transform: rotate(360deg); } }@-webkit-keyframes spin { 0% { -webkit-transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); }}.loadermask { position: fixed; width: 100%; height: 100%; background-color: "+maskBG+"; z-index: 9999999; display: flex; align-items: center; justify-content: center; }</style>");
  $('body').before('<div class="loadermask"><div class="loader"></div></div>');
