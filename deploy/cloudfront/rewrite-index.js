function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Rewrite directory-style URIs for static sub-apps that ship real
  // /index.html objects in S3. Leave exact /case-studies alone so the SPA
  // fallback can handle the listing route, but rewrite /blog and
  // /case-studies/* detail pages.
  var shouldRewrite =
    uri === '/blog' ||
    uri.indexOf('/blog/') === 0 ||
    (uri.indexOf('/case-studies/') === 0 && uri !== '/case-studies/');

  if (shouldRewrite) {
    if (uri.endsWith('/')) {
      request.uri = uri + 'index.html';
    } else if (!uri.split('/').pop().includes('.')) {
      request.uri = uri + '/index.html';
    }
  }

  return request;
}
