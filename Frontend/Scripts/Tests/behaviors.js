/* global chai:false, app:false, describe:false, beforeEach:false, it:false, afterEach:false */
var assert = chai.assert;

describe('The behaviors module', function(){
    var elementId = 'el',
        elementSelector = '#' + elementId,
        element = document.createElement('div');

    beforeEach(function(){
        element.id = elementId;
        document.body.appendChild(element);
    });

    it('should activate element', function(){
        app.behaviors.activate(elementSelector);

        assert.ok(element.classList.contains('active'));
    });

    it('should deactivate element', function(){
        app.behaviors.deactivate(elementSelector);

        assert.ok(element.classList.contains('inactive'));
    });

    it('should show element', function(){
        app.behaviors.show(elementSelector);

        assert.ok(element.classList.contains('shown'));
    });

    it('should hide element', function(){
        app.behaviors.hide(elementSelector);

        assert.ok(element.classList.contains('hidden'));
    });

    it('should toggle element', function(){
        app.behaviors.toggle(elementSelector);

        assert.ok(element.classList.contains('shown'));
        assert.notOk(element.classList.contains('hidden'));

        app.behaviors.toggle(elementSelector);

        assert.ok(element.classList.contains('hidden'));
        assert.notOk(element.classList.contains('shown'));
    });

    afterEach(function(){
        element.parentNode.removeChild(element);
    });
});