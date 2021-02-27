/* eslint-disable linebreak-style */
/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise.then(result => {
      if (result instanceof Error) {
        reject(result);
      }
      resolve(transformer(result));
    }).catch(reject);
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(result => {
      let value = Number(result);
      if (!isNaN(value)) {
        return new Promise((resolve) =>{
          resolve(value * value);
        });
      } else {
        return new Promise((_resolve, reject) =>{
          reject(`Cannot convert '${result}' to a number!`);
        });
      }
    }).catch();
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(() => {
      return new Promise(function (resolve) {
        resolve(0);
      });
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(value => {
    return new Promise((_resolve, reject) => {
      reject(value);
    });
  }, reason => {
    return new Promise((resolve) => {
      resolve(reason);
    });
  });
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};