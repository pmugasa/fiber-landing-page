import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'

const App = () => {
  return (
    <>
      <header className='w-full'>
        <nav className='w-full p-8'>
          <div className='flex items-center justify-between '>
            <a href='#' className='text-2xl font-semibold text-gray-700'>
              Fiber
            </a>

            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <ul className='py-2 space-y-4'>
                  <li>
                    <a href='#'>Community </a>
                  </li>
                  <li>
                    <a href='#'>Pricing </a>
                  </li>
                  <li>
                    <a href='#'>Features </a>
                  </li>
                </ul>
                <div className='border border-gray-200 w-full my-2'></div>
                <ul className='space-y-4'>
                  <li>
                    <a href='#' className='font-semibold'>
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href='#' className='font-semibold text-violet-700'>
                      Sign Up
                    </a>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
