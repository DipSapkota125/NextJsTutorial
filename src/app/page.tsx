import Link from "next/link";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="text-blue-500 underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
