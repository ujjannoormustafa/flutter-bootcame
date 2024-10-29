import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background grid */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1A1A1A 1px, transparent 1px),
            linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      
      <div className="relative z-10">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <div className="w-8 h-8 bg-white rounded-full mr-2" />
            <span className="text-lg font-semibold">Untitled UI</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:text-gray-300" href="#">
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-gray-300 flex items-center">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 rounded-md shadow-lg p-2 mt-1">
                <Link className="block px-4 py-2 text-sm hover:bg-gray-700 rounded" href="#">
                  Product 1
                </Link>
                <Link className="block px-4 py-2 text-sm hover:bg-gray-700 rounded" href="#">
                  Product 2
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-gray-300 flex items-center">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 rounded-md shadow-lg p-2 mt-1">
                <Link className="block px-4 py-2 text-sm hover:bg-gray-700 rounded" href="#">
                  Resource 1
                </Link>
                <Link className="block px-4 py-2 text-sm hover:bg-gray-700 rounded" href="#">
                  Resource 2
                </Link>
              </div>
            </div>
            <Link className="text-sm font-medium hover:text-gray-300" href="#">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4 ml-4">
            <Button variant="ghost" className="text-sm">
              Log in
            </Button>
            <Button className="bg-white text-gray-900 hover:bg-gray-200">Create account</Button>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-full bg-gray-800 px-3 py-1 text-sm mb-4">
                    <span className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                      Changelog
                      <ChevronRight className="ml-1 h-4 w-4" />
                      <span className="ml-1">Check out the team dashboard</span>
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-3xl mx-auto">
                    Turning your expertise into revenue just got easier
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mt-4">
                    Create and sell online courses, build vibrant communities, and monetize memberships — all on a single,
                    scalable platform.
                  </p>
                </div>
                <div className="space-x-4 mt-8">
                  <Button variant="outline" size="lg" className="h-12 px-8">
                    Demo
                  </Button>
                  <Button size="lg" className="h-12 px-8 bg-white text-gray-900 hover:bg-gray-200">
                    Create account
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}