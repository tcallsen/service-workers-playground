self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('install fired');
});

self.addEventListener('activate', function(event) {
  // Perform install steps
  console.log('activate fired');
});

self.addEventListener('fetch', function(event) {
  console.log('fetch fired' , event.request.url)

  //intercept fetch request for SVG and return alternate with orange fill
  if (event.request.url.indexOf('dc.svg') > -1){

  	console.log('returning altered svg');

  	var blob = new Blob(['<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg5598" inkscape:output_extension="org.inkscape.output.svg.inkscape" sodipodi:docname="District of Columbia Republican Presidential Primary Election Results by County, 2012.svg" inkscape:version="0.48.2 r9819" sodipodi:version="0.32" x="0px" y="0px" width="163.035px" height="185.9px" viewBox="0 0 163.035 185.9" enable-background="new 0 0 163.035 185.9" xml:space="preserve"><defs><inkscape:perspective id="perspective5606" inkscape:vp_z="744.09448 : 526.18109 : 1" inkscape:vp_y="0 : 1000 : 0" inkscape:vp_x="0 : 526.18109 : 1" sodipodi:type="inkscape:persp3d" inkscape:persp3d-origin="372.04724 : 350.78739 : 1"></inkscape:perspective></defs><sodipodi:namedview showgrid="false" inkscape:cy="526.18109" inkscape:cx="372.04724" inkscape:zoom="0.48272354" objecttolerance="10" guidetolerance="10" gridtolerance="10000" borderopacity="1.0" bordercolor="#666666" pagecolor="#ffffff" id="base" inkscape:window-maximized="0" inkscape:window-y="-4" inkscape:window-x="-4" inkscape:window-height="721" inkscape:window-width="1024" inkscape:current-layer="layer1" inkscape:document-units="px" inkscape:pageshadow="2" inkscape:pageopacity="0.0"></sodipodi:namedview><g id="layer1" transform="translate(-270.7255,-465.29266)" inkscape:label="Layer 1" inkscape:groupmode="layer"><path id="DC_Washington" inkscape:label="Washington, DC" fill="#FF6700" stroke="#FFFFFF" stroke-width="2.3993" d="   M281.009,533.978l35.092-57.128l32.672,16.94l74.705,38.468l-68.4,107.377l-4.585-40.76l-16.878-32.8l-28.723-12.609   L281.009,533.978"/></g></svg>'], {type : 'image/svg+xml'});
  	var init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" };

  	event.respondWith( new Response(blob,init) );

  }

});