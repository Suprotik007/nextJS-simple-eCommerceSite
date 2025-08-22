import React, { use } from "react";

export default function ProductDetails({ params }) {
  const { id } = use(params); // unwrap params Promise

  // Fetch product data Promise
  const productPromise = fetch(`https://nextjs-practice-project-server.vercel.app/products/${id}`, {
    cache: "no-store",
  }).then((res) => {
    if (!res.ok) throw new Error("Product not found");
    return res.json();
  });

  // Unwrap product data Promise
  const product = use(productPromise);

  return (
    <div className="w-10/12 mx-auto px-6 py-12 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-shadow hover:shadow-xl">
      <h1 className="text-4xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-gray-100">
        {product.name}
      </h1>

      <p className="text-violet-600 font-bold text-2xl mb-4">
        💰 Price: ${product.price}
      </p>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        {product.description}
      </p>

      <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Features:
      </h2>
      <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 mb-8 space-y-1">
        {product.features?.map((f, idx) => (
          <li key={idx}>{f}</li>
        ))}
      </ul>

      <div className="space-y-2 text-gray-800 dark:text-gray-300 mb-8">
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Warranty:</strong> {product.warranty}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
      </div>

      <button
        type="button"
        className="bg-violet-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-md hover:bg-violet-700 transition-colors w-full sm:w-auto"
      >
        Buy Now
      </button>
    </div>
  );
}
