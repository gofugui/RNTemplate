
/**
 * create at 2019/04/25
 */

// Creates a new URL by combining the specified URLs

export const combineURL = (baseUrl, path) => `${baseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`

// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
// https://www.ietf.org/rfc/rfc3986.txt

export const isAbsoluteURL = (url) => /^([a-z][a-z\d]*:)?\/\//i.test(url)
/**
 * check data type
 */

export const isPresent = (obj) => typeof obj !== 'undefined' && obj !== null

export const isEmpty = (obj) => {
  if (isBlank(obj)) {
    return true
  }

  if (obj.length === 0) {
    return true
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false
    }
  }

  return true
}

export const isBlank = (obj) => typeof obj === 'undefined' || obj === null

export const isBoolean = (obj) => typeof obj === 'boolean'

export const isNumber = (obj) => typeof obj === 'number'

export const isString = (obj) => typeof obj === 'string'

export const isArray = (obj) => Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Array]'

export const isDate = (obj) => obj instanceof Date && !isNaN(obj.valueOf())

export const isPromise = (obj) => isPresent(obj) && isFunction(obj.then)

export const isFunction = (obj) => typeof obj === 'function'

export const serialize = (params) => {
  const ret = []
  Object.keys(params).forEach(key => {
    const value = params[key]
    if (isPresent(value)) {
      ret.push(`${encode(key)}=${encode(value)}`)
    }
  })
  return ret.join('&')
}
export const encode = (value) => {
  return encodeURIComponent(value)
    .replace(/%40/gi, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
