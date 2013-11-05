/* Common behaviors module. Pelle Bjerkestrand. WTFPL. */
/* Uses querySelectorAll, classList, addEventListener */
(function(window, document){
    'use strict';

    var app = window.app || {},
        states = {
            active: 'active',
            inactive: 'inactive',
            shown: 'shown',
            hidden: 'hidden'
        },
        selectors = {
            activate: '[data-activate]',
            deactivate: '[data-deactivate]',
            show: '[data-show]',
            hide: '[data-hide]',
            toggle: '[data-toggle]'
        },
        data = {
            activate: 'activate',
            deactivate: 'deactivate',
            show: 'show',
            hide: 'hide',
            toggle: 'toggle'
        };

    function addEventListenerToNodeList(event, nodeList, eventListener){
        for(var i = 0; i < nodeList.length; i++){
            nodeList[i].addEventListener(event, eventListener);
        }
    }

    function activate(element){
        element.classList.remove(states.inactive);
        element.classList.add(states.active);
        return element;
    }

    function deactivate(element){
        element.classList.remove(states.active);
        element.classList.add(states.inactive);
        return element;
    }

    function show(element){
        element.classList.remove(states.hidden);
        element.classList.add(states.shown);
        return element;
    }

    function hide(element){
        element.classList.remove(states.shown);
        element.classList.add(states.hidden);
        return element;
    }

    function toggle(element){
        if(element.classList.contains(states.shown)){
            hide(element);
        } else {
            show(element);
        }

        return element;
    }

    function init(){
        addEventListenerToNodeList('click', document.querySelectorAll(selectors.activate), function(){
            activate(this.dataset[data.activate]);
        });

        addEventListenerToNodeList('click', document.querySelectorAll(selectors.deactivate), function(){
            deactivate(this.dataset[data.deactivate]);
        });

        addEventListenerToNodeList('click', document.querySelectorAll(selectors.show), function(){
            show(this.dataset[data.show]);
        });

        addEventListenerToNodeList('click', document.querySelectorAll(selectors.hide), function(){
            hide(this.dataset[data.hide]);
        });

        addEventListenerToNodeList('click', document.querySelectorAll(selectors.toggle), function(){
            hide(this.dataset[data.toggle]);
        });
    }

    /* NOTE: External API */
    app.behaviors = {
        activate: function(element){
            return activate(element);
        },
        deactivate: function(element){
            return deactivate(element);
        },
        show: function(element){
            return show(element);
        },
        hide: function(element){
            return hide(element);
        },
        toggle: function(element){
            return toggle(element);
        },
        init: function(){
            init();
        }
    };

    /* NOTE: Export app with module so it can be initialized */
    window.app = app;
})(window, document);