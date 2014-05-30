/**
* Neko-Fire Library
*
* requires: jQuery 1.6+
* @author: Martin Bayer
* neko-fire.com
*/

/**
 * Top Level Namespace
 * @type {NEKO|*|{}}
 */
var NEKO = window.NEKO || {};

/**
 * GLOBAL function to extend Namespace
 *
 * @example extendNamespace(NEKO, 'module.submodule.subsubmodule')
 *          extendNamespace(NEKO, 'module')
 * @param namespace          Name of top level namespac, i.e. NEKO
 * @param namespace_module   Name of module within namespace, i.e config
 * @returns {*}
 * @see http://addyosmani.com/blog/essential-js-namespacing/
 */
function extendNamespace( namespace, namespace_module ) {
    'use strict';
    var parts = namespace_module.split('.'),
        parent = namespace,
        partsLength,
        i;
    if (parts[0] === "myApp") {
        parts = parts.slice(1);
    }
    partsLength = parts.length;
    for (i = 0; i < partsLength; i++) {
        //create a property if it doesn't exist
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
}


/**
 * URL Utility Methods
 */
extendNamespace(NEKO,'utilities.URL');
NEKO.utilities.URL = (function(){
    'use strict';

    /**
     * get URL Parameter
     * @param name name of URL Parameter to read
     * @returns {string} decoded URL Parameter
     */
    function getURLParameter(name) {
        return decodeURIComponent(
            (new RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
    }

    // API
    return {
        getURLParameter : getURLParameter
    };

})();


/**
 * Cookie Utility Methods
 * Containing helper to .read(), .create() and .del() cookies.
 */
extendNamespace(NEKO,'utilities.cookies');
NEKO.utilities.cookie = (function () {
    'use strict';

    /**
     * Read value of a cookie
     * @param {String} name of cookie property to read
     */
    function read(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    /**
     * Create Cookie
     * @param name Name of cookie
     * @param value Value of cookie
     * @param days time in d to expiration of cookie
     */
    function create(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    /**
     * delete a cookie by name
     * @param {String} name of cookie delete
     */

    function del(name) {
        create(name, "", -1);
    }

	// Api
    return {
        read: read,
        create: create,
        del: del
    };
})();
