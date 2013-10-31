(function(window, document){
    'use strict';

    var site = window.site || {};

    site.init = function(){
        for (var key in site) {
            if (site.hasOwnProperty(key)) {
                var module = site[key];
                if(!!module.init && typeof module.init === "function"){
                    module.init();
                }
            }
        }
    };

    document.addEventListener("DOMContentLoaded", function() {
        site.init();
    });
})(window, document);