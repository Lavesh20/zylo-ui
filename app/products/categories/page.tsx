"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Plus, Circle, ChevronRight } from "lucide-react"

export default function Categories() {
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)

  // Sample categories data
  const categories = Array(7).fill({
    name: "Starter",
    description: "Lorem ipsum sit dolor emit",
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="categories" />

      <div className="flex-1">
        <Header title="Products" />

        <div className="p-6">
          {showAddCategoryForm ? (
            <AddCategoryForm onClose={() => setShowAddCategoryForm(false)} />
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium">Categories</h2>
                <button
                  className="flex items-center px-4 py-2 bg-[#f8b133] text-white rounded-lg"
                  onClick={() => setShowAddCategoryForm(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add new category
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Category Name</th>
                      <th className="text-left p-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="p-4">{category.name}</td>
                        <td className="p-4">{category.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function AddCategoryForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center mb-6">
        <Circle className="w-5 h-5 text-[#f8b133] mr-2" />
        <h2 className="text-lg font-medium">Add new Category</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category name</label>
          <input
            type="text"
            placeholder="Category name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category description</label>
          <textarea
            placeholder="Category description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            rows={3}
          ></textarea>
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
