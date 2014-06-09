(function(global, MQ){
    /* Responsive images module. Pelle Bjerkestrand. WTFPL. */
    'use strict';

    var app = global.app || {},
        contexts = {
            alpha: 'alpha',
            beta: 'beta',
            gamma: 'gamma',
            delta: 'delta',
            epsilon: 'epsilon',
            zeta: 'zeta',
            eta: 'eta'
        },
        selectors = {
            images: '[data-images]'
        },
        states = {
            loading: 'loading'
        };

    function loadHandler(){
        this.classList.remove(states.loading);
    }

    function attachLoadHandler(element){
        if(!element.dataset.loader){
            element.addEventListener('load', loadHandler);
            element.dataset.loader = true;
        }
    }

    function setImageToContext(element, context){
        var image = element.dataset.images[context];

        if(image){
            element.classList.add(states.loading);
            element.setAttribute('src', image);
        }
    }

    function setImagesToContext(context){
        var images = global.document.body.querySelectorAll(selectors.images);

        for(var i = 0; i < images.length; i++){
            attachLoadHandler(images[i]);
            setImageToContext(images[i], context);
        }
    }

    function init(){
        MQ.init([
            {
                context: [contexts.alpha, contexts.beta, contexts.gamma, contexts.delta, contexts.epsilon, contexts.zeta, contexts.eta],
                call_for_each_context: true,
                match: function(){
                    setImagesToContext(MQ.getContext());
                }
            }
        ]);
    }

    app.responsiveImages = {
        init: init
    };

    global.app = app;
})(this, MQ);