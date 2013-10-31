//addEventListener polyfill 1.0 / Eirik Backer / MIT Licence
(function(win, doc){
    if(win.addEventListener){
        //No need to polyfill
        return;
    }

    function docHijack(p){
        var old = doc[p];doc[p] = function(v){
            return addListen(old(v));
        };
    }

    function addEvent(on, fn, self){
        return (self = this).attachEvent('on' + on, function(event){
            var e = event || win.event;
            e.preventDefault = e.preventDefault  || function(){
                e.returnValue = false;
            };
            e.stopPropagation = e.stopPropagation || function(){
                e.cancelBubble = true;
            };
            fn.call(self, e);
        });
    }
    function addListen(obj, i){
        if(obj.length){
            i = obj.length;
            while(i--){
                obj[i].addEventListener = addEvent;
            }
        } else {
            obj.addEventListener = addEvent;
        }

        return obj;
    }

    addListen([doc, win]);

    if('Element' in win){
        //IE8
        win.Element.prototype.addEventListener = addEvent;
    } else {
        //IE < 8
        doc.attachEvent('onreadystatechange', function(){
            addListen(doc.all);
        }); //Make sure we also init at domReady
        docHijack('getElementsByTagName');
        docHijack('getElementById');
        docHijack('createElement');
        addListen(doc.all);
    }
})(window, document);