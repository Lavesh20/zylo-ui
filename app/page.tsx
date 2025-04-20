import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"

export default function SignUp() {
  return (
    <div className="flex min-h-screen">
      {/* Left side with logo */}
      <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-white">
        <div className="max-w-[400px] flex flex-col items-center">
          <div className="flex items-center mb-4">
            <span className="text-[#0a3158] text-[120px] font-bold leading-none">Z</span>
            <span className="text-[#0a3158] text-[120px] font-bold leading-none -ml-4">y</span>
            <span className="text-[#0a3158] text-[120px] font-bold leading-none -ml-4">l</span>
            <div className="relative -ml-2">
              <div className="w-[80px] h-[80px] rounded-full bg-[#f8b133] flex items-center justify-center">
                <div className="w-[60px] h-[60px] rounded-full border-[6px] border-white flex items-center justify-center">
                  <div className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                    <div className="w-[15px] h-[15px] rounded-full bg-[#f8b133]"></div>
                  </div>
                  <div className="absolute w-[10px] h-[2px] bg-white rotate-0 translate-x-[15px]"></div>
                  <div className="absolute w-[10px] h-[2px] bg-white rotate-72 translate-x-[15px]"></div>
                  <div className="absolute w-[10px] h-[2px] bg-white rotate-144 translate-x-[15px]"></div>
                  <div className="absolute w-[10px] h-[2px] bg-white rotate-216 translate-x-[15px]"></div>
                  <div className="absolute w-[10px] h-[2px] bg-white rotate-288 translate-x-[15px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[#0a3158] text-[50px] font-bold -mt-8 ml-auto">RIDE</div>
          <h2 className="text-3xl text-center text-[#0a3158] mt-4">Restaurant - Partner</h2>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-8">Sign up</h1>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

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
                placeholder="Your mobile number"
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
              <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Eye className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
              <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Eye className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <div className="w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center bg-[#f8b133]">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <label className="ml-2 text-sm text-gray-500">
                By signing up, you agree to the <span className="text-[#f8b133]">Terms of service</span> and{" "}
                <span className="text-[#f8b133]">privacy policy</span>.
              </label>
            </div>

            <button type="submit" className="w-full p-3 bg-[#f8b133] text-white rounded-lg font-medium">
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500">Or</p>

            <div className="flex justify-center space-x-4 mt-4">
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
                <Image src="/google.png" alt="Google" width={20} height={20} />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
                <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
              </button>
              <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
                <Image src="/apple.png" alt="Apple" width={20} height={20} />
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Already have an account?{" "}
              <Link href="/login" className="text-[#f8b133] font-medium">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
