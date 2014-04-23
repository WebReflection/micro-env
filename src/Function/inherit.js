/**
 * @type    Feature
 * @use     to create inheritance through functions
 * @param   the other function which prototype should be inherited
 * @return  the function itself
 * @example

    // as utility
    function Rectangle() {}
    function Square() {}
    Square.inherit(Rectangle);

    // inline
    var Square = function(){}.inherit(Rectangle);

 */
(function(P){
  function C() {
    C[P] = null;
  }
  Function[P].inherit = function (F) {
    C[P] = F[P];
    return (this[P] = new C).constructor = this;
  };
}('prototype'));