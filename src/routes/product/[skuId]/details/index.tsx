import { Resource, component$ } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from "@builder.io/qwik-city";

interface ProductData {
  skuId: string;
  price: number;
  description: string;
}
// probar con http://localhost:5173/product/1234/details
export const onGet: RequestHandler<ProductData> = async ({ params }) => {
  // put your DB access here, we are hard coding a response for simplicity.
  return {
    skuId: params.skuId,
    price: 123.45,
    description: `Description for ${params.skuId}`,
  };
};

export default component$(() => {
    const productData = useEndpoint<ProductData>();
    return (
      <Resource
        value={productData}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(product) => (
          <>
            <h1>Product: {product.skuId}</h1>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
          </>
        )}
      />
    );
  });