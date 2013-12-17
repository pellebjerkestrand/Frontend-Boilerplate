(function(global){
    /* Initialization meta module. Pelle Bjerkestrand. WTFPL. */
    'use strict';

    var app = global.app || {};

    function init(){
        for (var key in app) {
            if (app.hasOwnProperty(key)) {
                var module = app[key];
                if(!!module.init && typeof module.init === "function"){
                    module.init();
                }
            }
        }
    }

    app.init = init;

    global.document.addEventListener("DOMContentLoaded", function() {
        app.init();
    });

    global.app = app;
})(this);