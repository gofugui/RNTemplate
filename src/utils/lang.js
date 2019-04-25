/**
 * check data type
 */

export const isPresent = (obj) => typeof obj !== 'undefined' && obj !== null

export const isBlank = (obj) => typeof obj === 'undefined' || obj === null

export const isBoolean = (obj) => typeof obj === 'boolean'

export const isNumber = (obj) => typeof obj === 'number'

export const isString = (obj) => typeof obj === 'string'

export const isArray = (obj) => Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Array]'

export const isDate = (obj) => obj instanceof Date && !isNaN(obj.valueOf())

export const isPromise = (obj) => isPresent(obj) && isFunction(obj.then)

export const isFunction = (obj) => typeof obj === 'function'

export const serialize = (params) => {
    const ret = [];
    Object.keys(params).forEach(key => {
      const value = params[key];
      if (isPresent(value)) {
        ret.push(`${encode(key)}=${encode(value)}`);
      }
    });
  
    return ret.join('&');
  };
export const encode = (value) => {
    return encodeURIComponent(value)
      .replace(/%40/gi, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  };