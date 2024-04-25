
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t bg-gray-50  border-gray-200 border-gray-200 py-4 md:py-6">
      <div className="container flex flex-col gap-4 items-center px-4 md:px-6 sm:flex-row sm:justify-between">
        <nav className="flex gap-4">
          <Link className="font-medium text-sm tracking-wide hover:underline" target='_blank' to='https://github.com/RaazKetan/ReadmeEditor'>
            Get Code
          </Link>
          <Link className="font-medium text-sm tracking-wide hover:underline" target='_blank' to = "https://ketan-raj-2-0.vercel.app/">
            More
          </Link>
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <Link className="hover:underline" target= '_blank' to = "https://github.com/RaazKetan">
            GitHub
          </Link>
          <Link className="hover:underline" target='_blank' to = "https://www.linkedin.com/in/ketan-raj-4ab47b204/">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
