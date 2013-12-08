$(document).ready(function() {

  console.log('-- app.js --');

  var qs = $('.has-qs').prop('src');

  console.log(qs);
  console.log( url.qs('func1', qs) );

  console.log( url.qs('loc') );

  // todo: loop through all script tags


  // $('body').append(html);

});