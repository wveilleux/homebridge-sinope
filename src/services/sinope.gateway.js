const { httpAction, sessionOption } = require('./request');
const R = require('ramda');

const uri = [ 'https://preprod-sws.neviweb.com/api' ];
const urlComposer = R.compose(R.join('/'), R.concat);

function request(params) {

  const {
    method,
    url,
    path,
    body,
    queryString,
    sessionId,
  } = params;

  const httpRequest = sessionId ? sessionOption(sessionId) : httpAction;
  const httpOptions = {
    qs: queryString,
    body,
  };
  const sinopeUrl = url ? url : urlComposer(uri, path);

  return httpRequest(method, sinopeUrl, httpOptions);
}

module.exports = {
  request,
};
