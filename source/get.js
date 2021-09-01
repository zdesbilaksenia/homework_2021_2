'use strict';

const get = (object, properties) => {
    if (typeof object !== 'object' || typeof properties !== 'string')
        return;

    const listOfProperties = properties.split('.');
    listOfProperties.forEach(item => {
        if (item) {
            if (object !== undefined)
                object = object[item];
        }
    })

    return object;
}
