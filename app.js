$(document).ready(function() {

  console.log('-- qs in <script> tag (app.js)--');
  var uri = $('script#app-js').prop('src');
  console.log('uri: ' + uri);
  console.log('a  : ' + url.qs('a', uri) );
  console.log('b  : ' + url.qs('b', uri) );
  console.log('c  : ' + url.qs('c', uri) );
  console.log('d  : ' + url.qs('d', uri) );
  console.log('e  : ' + url.qs('e', uri) ); // not in qs

  console.log('-- qs in page URI (app.js) --');
  console.log('uri: ' + url.seg('uri') );
  console.log('a  : ' + url.qs('a') );
  console.log('b  : ' + url.qs('b') );
  console.log('c  : ' + url.qs('c') );
  console.log('d  : ' + url.qs('d') );
  console.log('e  : ' + url.qs('e') );

  console.log('--------------------------------');

});