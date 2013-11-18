/* Indicate JS enabled module. Pelle Bjerkestrand. WTFPL. */
/* Uses classList */
(function(window, document){
    'use strict';

    var app = window.app || {},
        states = {
            no_js: 'no-js',
            js: 'js'
        };

    function indicate(element){
        element.classList.remove(states.no_js);
        element.classList.add(states.js);
        return element;
    }

    function init(){
        indicate(document.body);
    }

    /* NOTE: External API */
    app.indicate = {
        init: function(){
            init();
        }
    };

    /* NOTE: Export app with module so it can be initialized */
    window.app = app;
})(window, document);