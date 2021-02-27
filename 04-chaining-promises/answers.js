/* eslint-disable linebreak-style */
/**
 * 
 * EXERCISE 1
 * 
 * @param {Promise} promise 
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then(asyncTransformer).then(resolve).catch(reject);
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then(slowAsyncProcess);
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {function} getUserById 
 * @param {function} getOrganizationById 
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
  return function getUserByIdWithOrganization(userId){
    return getUserById(userId).then(user => {
      if (user) {
        return getOrganizationById(user.organizationId).then(org => {
          user.organization = org;
          return user;
        });
      }
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};