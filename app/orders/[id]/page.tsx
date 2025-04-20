"use client"

import { useState } from "react"
import Image from "next/image"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Circle, ChevronDown, Phone } from "lucide-react"

export default function OrderDetails({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState("Preparing")
  const [isAccepted, setIsAccepted] = useState(false)

  const handleAccept = () => {
    setIsAccepted(true)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="orders" />

      <div className="flex-1">
        <Header title="Orders" />

        <div className="p-6">
          <div className="flex items-center mb-4">
            <Circle className="w-5 h-5 text-[#f8b133] mr-2" />
            <span className="font-medium">12345</span>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700 mb-4">Order from Eren Jaegar</p>

            {isAccepted && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <div className="relative">
                  <select
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none appearance-none"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Preparing</option>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>Declined</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#f8f9fc] rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Order Details</h2>
                <div className="mb-4">
                  <p className="font-medium mb-1">1 x Spicy seasoned seafood noodles</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>

                {!isAccepted ? (
                  <div className="space-y-2">
                    <button
                      className="w-full py-3 bg-[#f8b133] text-white rounded-lg font-medium"
                      onClick={handleAccept}
                    >
                      Accept
                    </button>
                    <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-medium">
                      Decline
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#f8b133] flex items-center justify-center mr-3">
                        <span className="text-xs text-white">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">Order Accepted</p>
                        <p className="text-xs text-gray-500">10:45 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-[#f8b133] flex items-center justify-center mr-3">
                        <span className="text-xs text-white">✓</span>
                      </div>
                      <div>
                        <p className="font-medium">Food Preparing Done</p>
                        <p className="text-xs text-gray-500">10:55 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center opacity-50">
                      <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mr-3">
                        <span className="text-xs text-gray-400"></span>
                      </div>
                      <div>
                        <p className="font-medium">Out for delivery</p>
                        <p className="text-xs text-gray-500">11:15 AM</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-[#f8f9fc] rounded-lg p-6">
                <h2 className="text-lg font-medium mb-4">Order Tracking</h2>
                <div className="mb-4 rounded-lg overflow-hidden">
                  <Image src="/map.png" alt="Map" width={400} height={200} className="w-full h-[200px] object-cover" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#f8b133] flex items-center justify-center mr-3">
                      <span className="text-xs text-white">🏠</span>
                    </div>
                    <div>
                      <p className="font-medium">Paradise Apartment</p>
                      <p className="text-xs text-gray-500">8 Wing 7th Floor Near Kali Bari Mandir</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#f8b133] flex items-center justify-center mr-3">
                      <span className="text-xs text-white">🍽️</span>
                    </div>
                    <div>
                      <p className="font-medium">Hunger Bowl Restaurant</p>
                      <p className="text-xs text-gray-500">Sector 19</p>
                    </div>
                  </div>

                  {isAccepted && (
                    <div className="mt-4">
                      <p className="font-medium mb-2">Delivery Partner</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                            <Image src="/delivery-partner.png" alt="Delivery Partner" width={40} height={40} />
                          </div>
                          <div>
                            <p className="font-medium">Siddhesh Garg</p>
                            <p className="text-xs text-gray-500">4.5 rating</p>
                          </div>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-[#f8b133] flex items-center justify-center">
                          <Phone className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 bg-[#f8f9fc] rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Bill Details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-blue-600">Total</span>
                  <span>$ 2.00</span>
                </div>
                {!isAccepted && (
                  <div className="flex justify-between">
                    <span className="text-blue-600">Handling Charge</span>
                    <span>$ 0.10</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-blue-600">Delivery Fee</span>
                  <span>$ 0.40</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total Bill</span>
                    <span>$ 2.50</span>
                  </div>
                  <p className="text-xs text-gray-500">Incl. of all taxes & charges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isAccepted && (
        <div className="absolute top-4 right-20 bg-gray-100 px-3 py-1 rounded-md flex items-center">
          <span className="text-sm font-medium mr-1">OTP:</span>
          <span className="font-bold">9977</span>
        </div>
      )}
    </div>
  )
}
