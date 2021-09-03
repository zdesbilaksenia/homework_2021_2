'use strict';

/**
 * По полученному пути к вложенному свойству объекта вернуть значение этого свойства
 * @param {*} obj - объект, значение свойства которого нужно вернуть
 * @param {string} properties - путь к вложенному свойству
 * @returns {undefined|*} - возвращает значение свойства или undefined, если свойства нет
 */

const get = (obj, properties) => {
    if (!obj || typeof properties !== 'string')
        return;

    let tempObj = {...obj};
    
    const listOfProperties = properties.split('.');
    listOfProperties.forEach(item => {
        if (tempObj !== undefined && item)
            tempObj = tempObj[item];
    })

    return tempObj;
}
