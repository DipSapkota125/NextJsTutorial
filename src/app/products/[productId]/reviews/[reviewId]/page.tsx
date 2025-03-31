const ProductReview = async ({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) => {
  const reviewId = await params;
  const { reviewId: id } = await reviewId;
  return (
    <div>
      <h1>Product Review</h1>
      <p>Review ID: {id}</p>
      <p>message: Hey I Love this Product</p>
    </div>
  );
};

export default ProductReview;
