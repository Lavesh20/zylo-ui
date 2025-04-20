import Image from "next/image"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Package, DollarSign, Box } from "lucide-react"

export default function Dashboard() {
  // Sample order data
  const orders = [
    { customer: "Eren Jaegar", menu: "Spicy seasoned seafood noodles", payment: "$125", status: "Completed" },
    { customer: "Eren Jaegar", menu: "Hot spicy fried rice with omelet", payment: "$125", status: "Preparing" },
    { customer: "Eren Jaegar", menu: "Spicy seasoned seafood noodles", payment: "$125", status: "Pending" },
    { customer: "Eren Jaegar", menu: "Spicy seasoned seafood noodles", payment: "$125", status: "Completed" },
  ]

  // Sample product data
  const products = Array(5).fill({
    name: "Spicy seasoned seafood noodles",
    price: "$2.29",
    available: "20 available",
    category: "Cat. Main Course",
    image: "/noodles.png",
  })

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="dashboard" />

      <div className="flex-1">
        <Header title="Dashboard" />

        <div className="p-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-4 flex items-center">
              <div className="w-14 h-14 rounded-full bg-[#E6F2F2] flex items-center justify-center mr-4">
                <Box className="w-6 h-6 text-[#65B0B0]" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Orders</div>
                <div className="text-2xl font-bold">1750</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center">
              <div className="w-14 h-14 rounded-full bg-[#FFF8E7] flex items-center justify-center mr-4">
                <Package className="w-6 h-6 text-[#f8b133]" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Products</div>
                <div className="text-2xl font-bold">567</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center">
              <div className="w-14 h-14 rounded-full bg-[#E6F2F2] flex items-center justify-center mr-4">
                <DollarSign className="w-6 h-6 text-[#65B0B0]" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Revenue</div>
                <div className="text-2xl font-bold">$1,29,750</div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-medium mb-4">Recent Order</h2>

            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left pb-3 text-sm font-medium text-gray-500">Customer</th>
                  <th className="text-left pb-3 text-sm font-medium text-gray-500">Menu</th>
                  <th className="text-left pb-3 text-sm font-medium text-gray-500">Total Payment</th>
                  <th className="text-left pb-3 text-sm font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#f8b133] bg-opacity-30 flex items-center justify-center mr-3">
                          <span className="text-xs text-[#f8b133]">EJ</span>
                        </div>
                        <span className="text-sm">{order.customer}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm">{order.menu}</td>
                    <td className="py-4 text-sm">{order.payment}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : order.status === "Preparing"
                              ? "bg-purple-100 text-purple-600"
                              : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Recent Products */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-medium mb-4">Recent Products</h2>

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
          </div>
        </div>
      </div>
    </div>
  )
}
