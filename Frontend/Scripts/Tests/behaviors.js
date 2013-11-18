var assert = chai.assert;

describe('The behaviors module', function(){
    var elementId = 'el';

    beforeEach(function(){
        var el = document.createElement('div');
        el.id = elementId;
        document.body.appendChild(el);
    });

    it('should activate element', function(){
        var el = document.getElementById(elementId);
        app.behaviors.activate(el);

        assert.ok(el.classList.contains('active'));
    });

    it('should deactivate element', function(){
        var el = document.getElementById(elementId);
        app.behaviors.deactivate(el);

        assert.ok(el.classList.contains('inactive'));
    });

    it('should show element', function(){
        var el = document.getElementById(elementId);
        app.behaviors.show(el);

        assert.ok(el.classList.contains('shown'));
    });

    it('should hide element', function(){
        var el = document.getElementById(elementId);
        app.behaviors.hide(el);

        assert.ok(el.classList.contains('hidden'));
    });

    it('should toggle element', function(){
        var el = document.getElementById(elementId);

        app.behaviors.toggle(el);

        assert.ok(el.classList.contains('shown'));
        assert.notOk(el.classList.contains('hidden'));

        app.behaviors.toggle(el);

        assert.ok(el.classList.contains('hidden'));
        assert.notOk(el.classList.contains('shown'));
    });

    afterEach(function(){
        var el = document.getElementById(elementId);
        el.parentNode.removeChild(el);
    });
});