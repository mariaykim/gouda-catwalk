const axios = require("axios");
require("dotenv").config();

const headers = { Authorization: `${process.env.API_KEY}` };

/* **** PRODUCTS SECTION **** */
// only grabs 5 products

const getProducts = (params, callback) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/`, { params,  headers: { 'Authorization': `${process.env.API_KEY}`}})
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      console.log(err);
      callback(err, null);
    });
};

/*** RELATED ITEMS SECTION *****/
// MK copy for reference later
//const getProducts = (callback) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/', { headers: { 'Authorization': `${process.env.API_KEY}`}})
//     .then((response) => {
//       callback(null, response);
//     })
//     .catch((err) => {
//       console.log(err);
//       callback(err, null);
//     });
// };
// const getRelatedProducts = (product_id, callback) => {
//   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${product_id}/related`, {headers})
//   .then((response) => {
//     callback(null, response);
//   })
//   .catch((err) => {
//     callback(err, null);
//   })
// }

const getThumbnail = (productId, callback) => {
  console.log(productId);
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products/${productId}/styles`, { headers: { 'Authorization': `${process.env.API_KEY}`}})
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

/* **** REVIEWS SECTION **** */

/* **** QUESTIONS & ANSWERS SECTION **** */

const getQuestions = (params, callback) => {
  axios
    .get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions", {
      params,
      headers,
    })
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const getAnswers = (questionId, params, callback) => {
  axios
    .get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${questionId}/answers`,
      { params, headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const addQuestion = (params, callback) => {
  axios
    .post(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions",
      params,
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const addAnswer = (questionId, params, callback) => {
  axios
    .post(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${questionId}/answers`,
      params,
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const markQuestion = (questionId, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${questionId}/helpful`,
      {},
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const reportQuestion = (questionId, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions/${questionId}/report`,
      {},
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const markAnswer = (questionId, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${questionId}/helpful`,
      {},
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const reportAnswer = (questionId, callback) => {
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/answers/${questionId}/report`,
      {},
      { headers }
    )
    .then((response) => {
      callback(null, response);
    })
    .catch((err) => {
      callback(err, null);
    });
};

/* **** CART SECTION **** */

/* **** INTERACTIONS SECTION **** */

module.exports = {
  getProducts,
  getThumbnail,
  getQuestions,
  getAnswers,
  addQuestion,
  addAnswer,
  markQuestion,
  reportQuestion,
  markAnswer,
  reportAnswer,
};
