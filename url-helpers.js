/*
 * URL Helpers
 */

var url = {

  /*
   * Gets a uri segment or an entire uri
   * 
   * Example
   * URI: /these/are/segments/
   
     var name = url.seg( 3 ); // name == 'segments'
     var uri  = url.seg( 'uri' ); // uri == '/these/are/segments'
     
   */
  seg: function ( segment ) {

    var loc       = window.location,
        url       = loc.protocol + "//" + loc.host + loc.pathname;
        segs      = window.location.pathname.split( '/' ),
        uri       = window.location.href.replace( loc.protocol + "//" + loc.host, '');

    // just return the entire uri path
    if ( segment == 'uri' ) {
      return uri;
    }

    else if ( segs.length >= segment ) {
      return segs[ segment ];
    }

    else {
      return false;
    }

  },
  
  /*
   * Gets a query string value from the current url or a custom string
   * 
   * Example
   * URI: /these/are/segments/?cat=chester&dog=wilbur
   
     var cat = url.qs( 'cat' ); // cat == 'chester'
     var dog = url.qs( 'dog' ); // dog == 'wilbur'
     var pig = url.qs( 'pig', '?pig="humphry"' ); // pig == 'humphry'
     
   */
  qs: function ( key, qs ) {
  
    var qs     = qs || window.location.href.slice( window.location.href.indexOf('?') + 1 ),
        keys   = [], 
        val,
        vals   = qs.split('&');
    
    for( var i = 0; i < vals.length; i++ ) {
      
      val = vals[ i ].split('=');
      
      // [ "key", "value" ]
      keys.push( val[0] );
      
      // key = value
      keys[ val[0] ] = val[ 1 ];

    }
    
    if ( keys[ key ] ) {
      return keys[ key ];
    }

    else {
      return false;
    }

  }

}