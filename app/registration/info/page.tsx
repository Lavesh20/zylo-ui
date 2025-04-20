import Image from "next/image"
import Link from "next/link"
import Logo from "@/components/logo"
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react"

export default function RestaurantInfo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center">
          <Logo size="small" />
          <h1 className="text-xl font-medium text-[#0a3158] ml-4">Restaurant registration</h1>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#f8b133]">
            <Image src="/avatar.png" alt="User Avatar" width={40} height={40} />
          </div>
          <svg
            className="w-4 h-4 ml-1 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[175px] bg-white min-h-[calc(100vh-73px)] border-r">
          <div className="py-8 px-4">
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-1">Step 1</div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#f8b133] flex items-center justify-center text-white text-sm font-medium mr-2">
                  1
                </div>
                <div className="text-sm font-medium">Restaurant Info</div>
              </div>
            </div>

            <div>
              <div className="text-sm text-gray-500 mb-1">Step 2</div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-sm font-medium mr-2">
                  2
                </div>
                <div className="text-sm font-medium text-gray-500">Restaurant Document</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">Restaurant Info</h2>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <ChevronLeft className="w-4 h-4 text-gray-500" />
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-medium mb-6">Give your restaurant details for registration</h3>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Restaurant name</label>
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Restaurant name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Restaurant owner name</label>
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Restaurant owner name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Restaurant complete address</label>
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Restaurant complete address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Restaurant phone number</label>
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Restaurant phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-700">Restaurant email address</label>
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Restaurant email address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Link
              href="/registration/document"
              className="px-4 py-2 bg-[#f8b133] text-white rounded-lg flex items-center"
            >
              Next Step
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
