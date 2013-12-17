(function(global){
    /* Indicate JS enabled module. Pelle Bjerkestrand. WTFPL. */
    'use strict';

    var app = global.app || {},
        states = {
            no_js: 'no-js',
            js: 'js'
        };

    function indicate(element){
        element.classList.remove(states.no_js);
        element.classList.add(states.js);
    }

    function init(){
        indicate(global.document.body);
    }

    /* NOTE: External API */
    app.indicate = {
        init: init
    };

    /* NOTE: Export app with module so it can be initialized */
    global.app = app;
})(this);