import { expect } from 'chai'
import { handlePost } from '../src/handler'

describe('handlePost', () => {
  it('should return status 500 and body not supported message if body length <= 0', async () => {
    const result = await handlePost(new Request('/', { body: JSON.stringify([]) }));
    const text = await result.text();
    expect(result.status).to.equal(500);
    expect(text).to.equal('Body not supported');
  });
  it('should return status 200 and no text if body length > 0', async () => {
    const result = await handlePost(new Request('/', { body: JSON.stringify(['yihouuu']) }));
    expect(result.status).to.equal(200);
    expect(result.body).to.equal(null);
  })
})
