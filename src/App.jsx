import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { buttonVariants } from '@/components/ui/button'

const App = () => {
  return (
    <>
      <header className=' mx-auto max-w-screen-xl'>
        <nav className='w-full p-8'>
          <div className='flex items-center justify-between w-full'>
            <a
              href='#'
              className='text-2xl font-semibold text-gray-700 sm:text-xl sm:font-bold'
            >
              Fiber
            </a>
            <div className='hidden sm:block'>
              <ul className='flex items-center justify-center space-x-8'>
                <li>
                  <a href='#' className='hover:text-primary'>
                    Community
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary'>
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className='hidden  sm:flex items-center justify-center space-x-6'>
              <a href='#' className='font-bold hover:text-primary '>
                Sign In
              </a>
              <Button className='rounded bg-primary hover:bg-purple-800'>
                Sign Up
              </Button>
            </div>
            <div className='sm:hidden'>
              <Sheet>
                <SheetTrigger>
                  <Menu className='sm:hidden' />
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
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
