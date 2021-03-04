import { handlePost } from './handler';

addEventListener('fetch', (event) => {
  const request = event.request;
  const { pathname } = new URL(request.url);
  if (pathname === '/scrape') {
    event.respondWith(handlePost(event.request));
  }
});
