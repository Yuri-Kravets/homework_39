"use strict";
(function() {
    let user = {
        data: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                a1: 1,
                b1: 2,
                c1: 3,
                d1: {
                    a2: 3,
                    b2: 3,
                    c2: 3,
                }
            },
        }
    }
    

DeepFreeze(user);
user['a'] = "value3";


    function DeepFreeze(obj) {
        getObjData(obj);
        
        function getObjData(o) {

            for (let prop in o) {
                if(typeof o[prop] === "object") {
                    getObjData(o[prop])
                } else {
                    console.log('object value:', o[prop]);
                    writable:false;
                    configurable:false;
                }
            }
        }
    }
console.log(Object.entries(user));
})();
