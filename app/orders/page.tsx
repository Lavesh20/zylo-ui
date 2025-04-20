import Image from "next/image"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"

export default function Orders() {
  // Sample new orders data
  const newOrders = [
    { name: "Spicy seasoned seafood noodles", price: "$2.29", quantity: "01" },
    { name: "Spicy seasoned seafood noodles", price: "$2.29", quantity: "02" },
  ]

  // Sample recent orders data
  const recentOrders = [
    {
      id: "112345",
      customer: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles",
      payment: "$125",
      status: "Completed",
    },
    {
      id: "112345",
      customer: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles",
      payment: "$125",
      status: "Preparing",
    },
    {
      id: "112345",
      customer: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles",
      payment: "$125",
      status: "Pending",
    },
    {
      id: "112345",
      customer: "Eren Jaegar",
      menu: "Spicy seasoned seafood noodles",
      payment: "$125",
      status: "Declined",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="orders" />

      <div className="flex-1">
        <Header title="Orders" />

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-4">Orders</h2>

            <h3 className="text-lg font-medium mb-3">New Orders</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {newOrders.map((order, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex mb-3">
                    <div className="w-28 h-28 bg-[#e6f2f2] rounded-lg flex items-center justify-center mr-4">
                      <Image src="/noodles.png" alt={order.name} width={100} height={100} className="rounded-full" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">{order.name}</h4>
                      <div className="text-sm font-medium mb-1">{order.price}</div>
                      <div className="text-xs text-gray-500">Qty: {order.quantity}</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 py-2 bg-[#f8b133] text-white rounded-lg text-sm font-medium">
                      Accept
                    </button>
                    <button className="flex-1 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-medium mb-3">Recent Orders</h3>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-gray-600">Order ID</th>
                    <th className="text-left p-4 font-medium text-gray-600">Customer</th>
                    <th className="text-left p-4 font-medium text-gray-600">Menu</th>
                    <th className="text-left p-4 font-medium text-gray-600">Total Payment</th>
                    <th className="text-left p-4 font-medium text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="border-b last:border-0">
                      <td className="p-4">{order.id}</td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-[#f8b133] bg-opacity-30 flex items-center justify-center mr-3">
                            <span className="text-xs text-[#f8b133]">EJ</span>
                          </div>
                          <span>{order.customer}</span>
                        </div>
                      </td>
                      <td className="p-4">{order.menu}</td>
                      <td className="p-4">{order.payment}</td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-600"
                              : order.status === "Preparing"
                                ? "bg-purple-100 text-purple-600"
                                : order.status === "Pending"
                                  ? "bg-orange-100 text-orange-600"
                                  : "bg-red-100 text-red-600"
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
          </div>
        </div>
      </div>
    </div>
  )
}
