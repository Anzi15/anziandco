"use client"
import { useState } from "react";

const tabs = [
  {
    name: "Shipping & Return",
    content: (
      <div className="space-y-2 text-sm text-gray-700">
        <p>Shipping in 2-3 working days</p>
        <p>Free shipping on orders over PKR 2500</p>
        <p>Returns accepted within 7 days of delivery</p>
        <p>Return shipping will be paid by the customer</p>
      </div>
    ),
  },
  {
    name: "Care Guide",
    content: (
      <div className="space-y-2 text-sm text-gray-700">
        <p>Do not bleach or tumble dry</p>
        <p>Hand wash recommended</p>
        <p>Iron on low heat inside out</p>
      </div>
    ),
  },
  {
    name: "Material",
    content: (
      <div className="space-y-2 text-sm text-gray-700">
        <p>100% Premium Cotton</p>
        <p>Soft and breathable</p>
        <p>Perfect for all seasons</p>
      </div>
    ),
  },
  {
    name: "Size Chart",
    content: (
      <table className="text-sm text-gray-700 border w-full border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Size</th>
            <th className="p-2">Chest (in)</th>
            <th className="p-2">Length (in)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Small</td>
            <td className="p-2">36</td>
            <td className="p-2">27</td>
          </tr>
          <tr>
            <td className="p-2">Medium</td>
            <td className="p-2">38</td>
            <td className="p-2">28</td>
          </tr>
          <tr>
            <td className="p-2">Large</td>
            <td className="p-2">40</td>
            <td className="p-2">29</td>
          </tr>
        </tbody>
      </table>
    ),
  },
];

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-2xl shadow-md max-w-6xl mx-auto mt-10">
      {/* Left side */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Product Details</h2>
        <p className="text-gray-600 mb-4">
          Discover everything you need to know about this product — including care instructions, material details, and our shipping policies.
        </p>
        <img
          src="/your-image.png"
          alt="Product"
          className="w-full rounded-lg shadow"
        />
      </div>

      {/* Right side - Tabs */}
      <div className="md:w-1/2">
        <div className="flex border-b mb-4 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 font-medium text-sm transition duration-200 ${
                activeTab === index
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="pt-2">{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}
