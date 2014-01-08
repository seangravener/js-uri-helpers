$(document).ready(function() {

  console.log('-- qs in <script> tag (app.js)--');
  var uri = $('script#app-js').prop('src');
  console.log('uri: ' + helpers.uri);
  console.log('a  : ' + helpers.url.qs('a', uri) );
  console.log('b  : ' + helpers.url.qs('b', uri) );
  console.log('c  : ' + helpers.url.qs('c', uri) );
  console.log('d  : ' + helpers.url.qs('d', uri) );
  console.log('e  : ' + helpers.url.qs('e', uri) ); // not in qs

  console.log('-- qs in page URI (app.js) --');
  console.log('uri: ' + helpers.url.seg('uri') );
  console.log('a  : ' + helpers.url.qs('a') );
  console.log('b  : ' + helpers.url.qs('b') );
  console.log('c  : ' + helpers.url.qs('c') );
  console.log('d  : ' + helpers.url.qs('d') );
  console.log('e  : ' + helpers.url.qs('e') );

  console.log('--------------------------------');

});