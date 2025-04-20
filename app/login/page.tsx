import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"

export default function Login() {
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
          <h1 className="text-4xl font-bold mb-8">Welcome!</h1>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              />
              <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Eye className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-red-500 text-sm">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="w-full p-3 bg-[#f8b133] text-white rounded-lg font-medium">
              Login
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
              Don't have an account?{" "}
              <Link href="/" className="text-[#f8b133] font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
