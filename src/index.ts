import { handlePost } from './handler';

addEventListener('fetch', (event) => {
  const request = event.request;
  const { pathname } = new URL(request.url);
  if (request.method === 'POST' && pathname === '/scrape') {
    event.respondWith(handlePost(event.request));
  }
});
