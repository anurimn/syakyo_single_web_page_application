/*
 * spa.js
 * ルート名前空間モジュール
 */ 

/* jslint browser: ture, continue: true,
   devel: true, indent: 4, maxerr: 50,
   newcap: true, nomen: true, plusplus: true,
   regexp: true, sloppy: true, vars: false,
   white: true
*/

/*global $, spa:true */

var spa = (function(){
    var initModule = function( $container ){
        spa.shell.initModule($container);
    };
    
    return { initModule: initModule };
}());