"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products") // your backend route
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Our Products
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <li
            key={p._id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {p.name}
            </h2>
            <p className="text-violet-400 font-semibold mb-2">💰 Price: ${p.price}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{p.description}</p>
         <Link href={`/details/${p._id}`}>
  <button className="bg-violet-600 text-white py-1 px-2 rounded hover:bg-violet-700 transition-colors">
    Details
  </button>
</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
