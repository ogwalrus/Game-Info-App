async function callApi() {
  return fetch(`https://api.rawg.io/api/games?key=a7bb8bf23e8e49069c1db32e3addcc4d`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },

  })
    .then((response) => response.json().then((json) => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      console.log(json);
      return json;
    })
    .then(
        (response) => ({ response }),
        (error) => ({ error: error.message || 'Something bad happened' })
      
    );
}

// Path: Game-Info-App\client\src\utils\apiCall.js
module.exports = callApi;