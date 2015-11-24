function deepKeys(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        throw new TypeError('deep keys needs to be passed an object');
    }
    let keys = Object.keys(obj);
    let result = [...keys];

    function getDeepKeys(keys, object) {
        keys.forEach((key) => {
            if (object.hasOwnProperty(key)) {
                const deepObj = object[key];
                if(typeof deepObj === 'object') {
                    const deepKeys = Object.keys(deepObj);
                    result = result.concat(deepKeys);
                    return getDeepKeys(deepKeys, deepObj);
                }
            }
        })
    }
    getDeepKeys(keys, obj);
    return result;
}

module.exports = deepKeys;
