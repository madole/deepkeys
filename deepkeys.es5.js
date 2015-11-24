'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function deepKeys(obj) {
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || Array.isArray(obj)) {
        throw new TypeError('deep keys needs to be passed an object');
    }
    var keys = Object.keys(obj);
    var result = [].concat(_toConsumableArray(keys));

    function getDeepKeys(keys, object) {
        keys.forEach(function (key) {
            if (object.hasOwnProperty(key)) {
                var deepObj = object[key];
                if ((typeof deepObj === 'undefined' ? 'undefined' : _typeof(deepObj)) === 'object') {
                    var _deepKeys = Object.keys(deepObj);
                    result = result.concat(_deepKeys);
                    return getDeepKeys(_deepKeys, deepObj);
                }
            }
        });
    }
    getDeepKeys(keys, obj);
    return result;
}

module.exports = deepKeys;
