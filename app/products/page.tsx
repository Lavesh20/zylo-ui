"use client"

import { useState } from "react"
import Image from "next/image"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Plus, Circle, ChevronDown, ChevronRight } from "lucide-react"

export default function Products() {
  const [showAddProductForm, setShowAddProductForm] = useState(false)

  // Sample product data
  const products = Array(10).fill({
    name: "Spicy seasoned seafood noodles",
    price: "$2.29",
    available: "20 available",
    category: "Cat. Main Course",
    image: "/noodles.png",
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="products" />

      <div className="flex-1">
        <Header title="Products" />

        <div className="p-6">
          {showAddProductForm ? (
            <AddProductForm onClose={() => setShowAddProductForm(false)} />
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Products</h2>
                <button
                  className="flex items-center px-4 py-2 bg-[#f8b133] text-white rounded-lg"
                  onClick={() => setShowAddProductForm(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add new product
                </button>
              </div>

              <div className="grid grid-cols-5 gap-4">
                {products.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="h-40 bg-[#e6f2f2] flex items-center justify-center">
                      <Image src="/noodles.png" alt={product.name} width={140} height={140} className="rounded-full" />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-medium text-center">{product.name}</h3>
                      <div className="flex justify-center mt-1">
                        <span className="text-sm font-medium">{product.price}</span>
                      </div>
                      <div className="text-xs text-gray-500 text-center mt-1">{product.available}</div>
                      <div className="text-xs text-[#f8b133] text-center mt-1">{product.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function AddProductForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <Circle className="w-5 h-5 text-[#f8b133] mr-2" />
        <h2 className="text-lg font-medium">Add new product</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Choose category (Optional)</label>
          <div className="relative">
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none appearance-none">
              <option>For eg. Breakfast, Lunch, Dinner, Appetizers etc.</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product name</label>
          <input
            type="text"
            placeholder="Product name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product description</label>
          <textarea
            placeholder="Product description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            rows={3}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product price</label>
          <input
            type="text"
            placeholder="Product price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Zylo commision</label>
          <div className="relative">
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none appearance-none">
              <option>20%</option>
              <option>15%</option>
              <option>10%</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Food type</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full border-2 border-[#f8b133] flex items-center justify-center mr-2">
                <div className="w-3 h-3 rounded-full bg-[#f8b133]"></div>
              </div>
              <span className="text-sm">Veg</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-2"></div>
              <span className="text-sm">Non Veg</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Product images</label>
          <div className="flex space-x-3">
            <div className="w-20 h-20 bg-[#e6f2f2] rounded-lg overflow-hidden">
              <Image src="/noodles.png" alt="Product" width={80} height={80} />
            </div>
            <div className="w-20 h-20 bg-[#e6f2f2] rounded-lg overflow-hidden">
              <Image src="/noodles.png" alt="Product" width={80} height={80} />
            </div>
            <div className="w-20 h-20 border border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <div className="text-right mt-1">
            <span className="text-xs text-gray-400">0/500</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-[#f8b133] text-white rounded-lg flex items-center" onClick={onClose}>
          Save
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  )
}
