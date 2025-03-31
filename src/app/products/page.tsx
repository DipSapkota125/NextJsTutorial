const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$99.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "$79.99",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: "$49.99",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover mb-2"
          />
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
