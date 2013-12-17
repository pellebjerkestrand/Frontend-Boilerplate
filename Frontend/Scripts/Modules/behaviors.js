(function(global){
    /* Common behaviors module. Pelle Bjerkestrand. WTFPL. */
    'use strict';

    var app = global.app || {},
        document = global.document,
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

    function addClass(nodeList, htmlClass){
        for(var i = 0; i < nodeList.length; i++){
            addClassToElement(nodeList[i], htmlClass);
        }
    }

    function addClassToElement(element, htmlClass){
        element.classList.add(htmlClass);
    }

    function removeClass(nodeList, htmlClass){
        for(var i = 0; i < nodeList.length; i++){
            removeClassFromElement(nodeList[i], htmlClass);
        }
    }

    function removeClassFromElement(element, htmlClass){
        element.classList.remove(htmlClass);
    }

    function activate(selector){
        removeClass(document.querySelectorAll(selector), states.inactive);
        addClass(document.querySelectorAll(selector), states.active);
    }

    function deactivate(selector){
        removeClass(document.querySelectorAll(selector), states.active);
        addClass(document.querySelectorAll(selector), states.inactive);
    }

    function show(selector){
        removeClass(document.querySelectorAll(selector), states.hidden);
        addClass(document.querySelectorAll(selector), states.shown);
    }

    function showElement(element){
        removeClassFromElement(element, states.hidden);
        addClassToElement(element, states.shown);
    }

    function hide(selector){
        removeClass(document.querySelectorAll(selector), states.shown);
        addClass(document.querySelectorAll(selector), states.hidden);
    }

    function hideElement(element){
        removeClassFromElement(element, states.shown);
        addClassToElement(element, states.hidden);
    }

    function toggle(selector){
        var elements = document.querySelectorAll(selector);

        for(var i = 0; i < elements.length; i++){
            if(elements[i].classList.contains(states.shown)){
                hideElement(elements[i]);
            } else {
                showElement(elements[i]);
            }
        }
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
            toggle(this.dataset[data.toggle]);
        });
    }

    /* NOTE: External API */
    app.behaviors = {
        activate: activate,
        deactivate: deactivate,
        show: show,
        hide: hide,
        toggle: toggle,
        init: init
    };

    /* NOTE: Export app with module so it can be initialized */
    global.app = app;
})(this);