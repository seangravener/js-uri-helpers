var app = (function(self, global){

  var modules = modules || {}

  function addModule( name, module ){
    modules[ name ] = module;
    return modules[ name ];
  };

  // bleh
  function init( mod, params ){

    var mod = mod || false;

    // if ( mod ) app.module.mod( params );

    $.each(modules, function(i, module){
      if ( typeof module === 'function' )
        module();
    });

  }

  console.log(global);

  return {
    addModule: addModule,
    module: modules,
    init: init
  };

})(app || {}, this);

app.addModule('testMod', function(a){
  console.log('test module init ' + a);
});
app.module.testMod('a var');

app.addModule('testMod2', function(a){
  console.log('test module 2 init ' + a);
});
app.module.testMod2(' 2 a var 222');

// app.init();

// @TODO prototype
// var testMod = new app.module();