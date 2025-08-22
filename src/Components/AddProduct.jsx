"use client";

import { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    brand: "",
    warranty: "",
    stock: "",
    image: "",
    features: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const featuresArray = formData.features
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f);

      const productToSend = {
        ...formData,
        price: Number(formData.price),
        stock: Number(formData.stock),
        features: featuresArray
      };

      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productToSend)
      });

      if (!res.ok) throw new Error("Failed to add product");

      setMessage("✅ Product added successfully!");
      setFormData({
        name: "",
        price: "",
        description: "",
        category: "",
        brand: "",
        warranty: "",
        stock: "",
        image: "",
        features: ""
      });
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
        Add Product
      </h1>

      {message && (
        <p
          className={`mb-6 text-center font-semibold ${
            message.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { label: "Product Name", name: "name", type: "text", required: true },
          { label: "Price", name: "price", type: "number", required: true },
          {
            label: "Description",
            name: "description",
            type: "textarea",
            required: true
          },
          { label: "Category", name: "category", type: "text", required: true },
          { label: "Brand", name: "brand", type: "text" },
          { label: "Warranty", name: "warranty", type: "text" },
          { label: "Stock", name: "stock", type: "number" },
          { label: "Image URL", name: "image", type: "url" },
          {
            label: "Features (comma separated)",
            name: "features",
            type: "text"
          }
        ].map(({ label, name, type, required }) => {
          if (type === "textarea") {
            return (
              <div key={name} className="flex flex-col">
                <label
                  htmlFor={name}
                  className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  {label}
                  {required && <span className="text-red-600">*</span>}
                </label>
                <textarea
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={required}
                  rows={4}
                  className="resize-none p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
                ></textarea>
              </div>
            );
          }

          return (
            <div key={name} className="flex flex-col">
              <label
                htmlFor={name}
                className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
              >
                {label}
                {required && <span className="text-red-600">*</span>}
              </label>
              <input
                id={name}
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
              />
            </div>
          );
        })}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors focus:outline-none focus:ring-4 focus:ring-violet-400 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
