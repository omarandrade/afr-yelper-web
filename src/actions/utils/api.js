const deleteAsync = (endpoint, data) => (
  makeFetch(endpoint, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  })
);

const getAsync = (endpoint) => (
  makeFetch(endpoint, { method: 'GET' })
);

const postAsync = (endpoint, data) => (
  makeFetch(endpoint, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
);

const putAsync = (endpoint, data) => (
  makeFetch(endpoint, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  })
);

const makeFetch = (endpoint, options) => (
  fetch(endpoint, options)
    .then(handleResponse)
);

const handleResponse = (response) => (
  response.json().then((json) => {
    if (response.ok) {
      return json;
    }

    return Promise.reject({
      statusCode: response.status,
      ...json
    });
  })
);

export default {
  deleteAsync,
  getAsync,
  postAsync,
  putAsync
};
