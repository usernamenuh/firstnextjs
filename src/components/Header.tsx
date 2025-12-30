import Image from "next/image"
import Link from "next/link"
import ThemeSwitcher from "@/components/ThemeSwitcher"

function Header() {
  return (
     <header className="header">
     <nav>
            <div className="logo"><Link href="/"><Image src="/favicon.ico" alt="My Next.js App" width={30} height={30} /></Link></div>
     <div className="nav-links">
       <Link href="/">Home</Link>
       <Link href="/about">About</Link>
       <Link href="/posts">Posts</Link>
     </div>
     <ThemeSwitcher />
     </nav>
    </header>
  )
}

export default Header
