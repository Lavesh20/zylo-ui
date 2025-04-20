"use client"

import Link from "next/link"
import Logo from "./logo"
import { Home, Package, DollarSign, User } from "lucide-react"
import { useState } from "react"

export default function Sidebar({
  active,
}: { active: "dashboard" | "products" | "orders" | "earnings" | "profile" | "categories" }) {
  const [showCategories, setShowCategories] = useState(active === "categories")

  return (
    <div className="w-[175px] min-h-screen border-r bg-white">
      <div className="p-4 border-b">
        <Logo size="small" />
      </div>

      <div className="py-4">
        <Link
          href="/dashboard"
          className={`flex items-center px-4 py-3 ${active === "dashboard" ? "bg-[#f8b133] text-white" : "text-gray-600 hover:bg-gray-100"}`}
        >
          <Home className={`h-5 w-5 ${active === "dashboard" ? "text-white" : "text-gray-400"} mr-3`} />
          <span className={`${active === "dashboard" ? "font-medium" : ""}`}>Dashboard</span>
        </Link>

        <div>
          <Link
            href="/products"
            className={`flex items-center px-4 py-3 ${active === "products" || active === "categories" ? "bg-[#f8b133] text-white" : "text-gray-600 hover:bg-gray-100"}`}
            onClick={() => setShowCategories(!showCategories)}
          >
            <Package
              className={`h-5 w-5 ${active === "products" || active === "categories" ? "text-white" : "text-gray-400"} mr-3`}
            />
            <span className={`${active === "products" || active === "categories" ? "font-medium" : ""}`}>Products</span>
            {(active === "products" || active === "categories") && <span className="ml-auto">→</span>}
          </Link>

          {(active === "products" || active === "categories") && (
            <Link
              href="/products/categories"
              className={`flex items-center pl-12 py-2 ${active === "categories" ? "text-[#f8b133]" : "text-gray-600"} hover:bg-gray-100`}
            >
              <span className={`text-sm ${active === "categories" ? "font-medium" : ""}`}>Categories</span>
            </Link>
          )}
        </div>

        <Link
          href="/orders"
          className={`flex items-center px-4 py-3 ${active === "orders" ? "bg-[#f8b133] text-white" : "text-gray-600 hover:bg-gray-100"}`}
        >
          <svg
            className={`h-5 w-5 ${active === "orders" ? "text-white" : "text-gray-400"} mr-3`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className={`${active === "orders" ? "font-medium" : ""}`}>Orders</span>
        </Link>

        <Link
          href="/earnings"
          className={`flex items-center px-4 py-3 ${active === "earnings" ? "bg-[#f8b133] text-white" : "text-gray-600 hover:bg-gray-100"}`}
        >
          <DollarSign className={`h-5 w-5 ${active === "earnings" ? "text-white" : "text-gray-400"} mr-3`} />
          <span className={`${active === "earnings" ? "font-medium" : ""}`}>Earnings</span>
        </Link>

        <Link
          href="/profile"
          className={`flex items-center px-4 py-3 ${active === "profile" ? "bg-[#f8b133] text-white" : "text-gray-600 hover:bg-gray-100"}`}
        >
          <User className={`h-5 w-5 ${active === "profile" ? "text-white" : "text-gray-400"} mr-3`} />
          <span className={`${active === "profile" ? "font-medium" : ""}`}>My Profile</span>
        </Link>
      </div>
    </div>
  )
}
