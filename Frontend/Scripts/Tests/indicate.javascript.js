var assert = chai.assert;

describe('The JavaScript indicator module', function(){

    beforeEach(function(){
        document.body.classList.add('no-js');
    });

    it('should indicate JavaScript', function(){
        app.indicate.init();

        assert.ok(document.body.classList.contains('js'));
        assert.notOk(document.body.classList.contains('no-js'));
    });

    it('should not indicate JavaScript', function(){
        assert.ok(document.body.classList.contains('no-js'));
        assert.notOk(document.body.classList.contains('js'));
    });

    afterEach(function(){
        document.body.classList.remove('js');
        document.body.classList.remove('no-js');
    });
});