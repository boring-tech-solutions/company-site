function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Only the Astro blog has real directory/index.html objects in S3.
  // Rewrite directory-style URIs under /blog so they resolve to index.html.
  // Leave every other path untouched so the SPA error-response fallback
  // (403 -> /index.html) can serve the React app for client-side routes.
  if (uri === '/blog' || uri.indexOf('/blog/') === 0) {
    if (uri.endsWith('/')) {
      request.uri = uri + 'index.html';
    } else if (!uri.split('/').pop().includes('.')) {
      request.uri = uri + '/index.html';
    }
  }

  return request;
}
