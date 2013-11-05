/* Initialization meta module. Pelle Bjerkestrand. WTFPL. */
/* Uses addEventListener */
(function(window, document){
    'use strict';

    var app = window.app || {};

    app.init = function(){
        for (var key in app) {
            if (app.hasOwnProperty(key)) {
                var module = app[key];
                if(!!module.init && typeof module.init === "function"){
                    module.init();
                }
            }
        }
    };

    document.addEventListener("DOMContentLoaded", function() {
        app.init();
    });
})(window, document);