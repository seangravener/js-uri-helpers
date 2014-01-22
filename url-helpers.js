/*
 * URL Helpers
 * Sean Gravener
 */

var helpers = (function (helpers) {

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
          url       = loc.protocol + "//" + loc.host + loc.pathname,
          segs      = window.location.pathname.split( '/' ),
          uri       = window.location.href.replace( loc.protocol + "//" + loc.host, '' );

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
    
      var qs     = qs || window.location.href,
          keys   = [], 
          val,
          vals   = qs.slice( qs.indexOf('?') + 1 ).split(/[;&]/);

      for ( var i = 0; i < vals.length; i++ ) {
        
        val = vals[i].split('=');
        
        // [ "key", "value" ]
        keys.push( val[0] );
        
        // key = value
        keys[ val[0] ] = val[1];

      }
      
      var value = ( keys[key] ) || false;
      
      return value;

    },

    /*
     * updates a url to match the window object's protocol
     * 
     * @url: the url string to update with the window's protocol
     * @protocol: optionally force a protocol. eg 'https:'
     */
    pmatch: function ( url, protocol ) {

      var loc      = window.location,
          parts    = url.split( '//' ), // eg ['http:', 'www.mysite.com']
          p        = parts[0],
          uri      = parts[1];

      protocol = protocol || loc.protocol;
      url = protocol + '//' + uri;

      return url;

    }

  };

  return {
    url: url
  }

})(helpers || {});