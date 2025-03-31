const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = await params;
  const { productId: id } = await productId;
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: Product Name</p>
      <p>Product Description: Product Description</p>
      <p>Product Price: $100</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
