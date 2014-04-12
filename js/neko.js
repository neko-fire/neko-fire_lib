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

