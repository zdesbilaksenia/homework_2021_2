'use strict';

/**
 * По полученному пути к вложенному свойству объекта вернуть значение этого свойства
 * @param object - объект, значение свойства которого нужно вернуть
 * @param properties - путь к вложенному свойству
 * @returns {undefined|*} - возвращает значение свойства или undefined, если свойства нет
 */

const get = (object, properties) => {
    if (typeof object !== 'object' || typeof properties !== 'string')
        return;

    const listOfProperties = properties.split('.');
    listOfProperties.forEach(item => {
        if (object !== undefined && item)
            object = object[item];
    })

    return object;
}
