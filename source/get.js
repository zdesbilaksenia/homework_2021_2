'use strict';

const get = (object, properties) => {
    if (typeof object !== 'object' || typeof properties !== 'string')
        return undefined;

    const listOfProperties = properties.split('.');
    for (let i = 0; i < listOfProperties.length; i++) {
        if (listOfProperties[i] !== '') {
            if (object !== undefined)
                object = object[listOfProperties[i]];
            else
                object = undefined;
        }
    }

    return object;
}