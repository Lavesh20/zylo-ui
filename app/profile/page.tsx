"use client"

import { useState } from "react"
import Image from "next/image"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import { Eye, EyeOff, X, Lock, PenSquare } from "lucide-react"

export default function Profile() {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar active="profile" />

      <div className="flex-1">
        <Header title="My Profile" />

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium">Account Information</h2>
            <div className="flex space-x-2">
              <button
                className="flex items-center px-3 py-2 bg-green-100 text-green-600 rounded-md"
                onClick={() => setShowChangePasswordModal(true)}
              >
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </button>
              <button className="flex items-center px-3 py-2 bg-yellow-100 text-yellow-600 rounded-md">
                <PenSquare className="w-4 h-4 mr-2" />
                Edit Restaurant
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex flex-col items-start mb-6">
  <div className="relative mb-2">
    <div className="w-24 h-24 rounded-full overflow-hidden ">
      <Image src="/profile.png" alt="Profile" width={96} height={96} />
    </div>
    <div className="absolute top-0 left-0 w-6 h-6 bg-[#f8b133] rounded-full flex items-center justify-center">
      <PenSquare className="w-3 h-3 text-white" />
    </div>
  </div>
</div>


            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value="admin@gmail.com"
                  readOnly
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                <div className="flex">
                  <div className="flex items-center border border-gray-300 rounded-lg px-3 mr-1">
                    <span>+89</span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    defaultValue="99999999"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value="•••••"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                    readOnly
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-6 py-2 bg-[#f8b133] text-white rounded-lg">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <button className="absolute top-4 right-4 text-gray-400" onClick={() => setShowChangePasswordModal(false)}>
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-medium mb-6">Change Password</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Old Password</label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    value="•••••"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowOldPassword(!showOldPassword)}
                  >
                    {showOldPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm New Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <button className="w-full py-3 bg-[#f8b133] text-white rounded-lg font-medium">Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
