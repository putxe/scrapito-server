export async function handlePost(request: Request): Promise<Response> {
  const body = await request.json();
  if (body.length <= 0)
    return new Response('Body not supported', { status: 500 });
  console.log(body);
  return new Response();
}
