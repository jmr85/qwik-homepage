// File: src/routes/product/[skuId]/index.tsx
import type { RequestHandler } from '@builder.io/qwik-city';

type EndpointData = ProductData | null;

interface ProductData {
  skuId: string;
  price: number;
  description: string;
}
export const onPut: RequestHandler<EndpointData> = async ({ url, params, request, response }) => {
  // put your DB access here (hard coding a response for the simplicity)

  // read data from request and perform DB update.
  console.log(params.skuId);
  console.log(request.method);
  console.log(url.pathname);

  // set response headers
  response.headers.append('Cache-Control', ' public, max-age=86400');

  // return data to be access from `useEndpoint()`
  return {
    skuId: params.skuId,
    price: 100,
    description: `Description for ${params.skuId}`,
  };
};