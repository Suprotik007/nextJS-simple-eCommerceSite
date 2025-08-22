import React from "react";

export default async function ProductDetails({ params }) {
  const { id } = params;

  // Fetch product from backend API
  const res = await fetch(`http://localhost:5000/products/${id}`, {
    cache: "no-store" // ensures fresh data each request
  });

  if (!res.ok) return <p className="text-center mt-10">Product not found</p>;

  const product = await res.json();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-violet-500 font-semibold mb-2">💰 Price: ${product.price}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{product.description}</p>

      <h2 className="text-2xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc pl-6 mb-4">
        {product.features?.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>

      <p className="mb-2"><strong>Brand:</strong> {product.brand}</p>
      <p className="mb-2"><strong>Category:</strong> {product.category}</p>
      <p className="mb-2"><strong>Warranty:</strong> {product.warranty}</p>
      <p className="mb-2"><strong>Stock:</strong> {product.stock}</p>
      {product.image && (
        <img src={product.image} alt={product.name} className="mt-4 rounded-lg" />
      )}
    </div>
  );
}
