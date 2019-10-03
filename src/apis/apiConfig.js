let apiConfig;

if (process && process.env) {
  switch (process.env.REACT_APP_API_ENV) {
    case 'production':
      apiConfig = require('./api.prod.json');
      break;

    default:
      apiConfig = require('./api.dev.json');
      break;
  }
}

export default apiConfig;
