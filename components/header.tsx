import Image from "next/image"
import Logo from "./logo"

export default function Header({ title, showLogo = false }: { title: string; showLogo?: boolean }) {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <div className="flex items-center">
        {showLogo && <Logo size="small" />}
        <h1 className="text-xl font-medium text-[#0a3158] ml-4">{title}</h1>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#f8b133]">
          <Image src="/avatar.png" alt="User Avatar" width={40} height={40} />
        </div>
        <svg className="w-4 h-4 ml-1 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  )
}
