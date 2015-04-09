var model = (function(){
  var module = {};

  var fn1 = function(){
    console.log('fn1');
  };

  module.fn1 = fn1;

  return module;
})();

console.log(model);
