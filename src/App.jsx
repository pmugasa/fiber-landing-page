import { Menu, CheckCircle2, Star } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const App = () => {
  const ratings = [1, 2, 3, 4, 5]
  return (
    <>
      <main className=' w-full mx-auto max-w-screen-xl p-8'>
        <nav className='w-full'>
          <div className='flex items-center justify-between w-full '>
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
        <section id='hero' className='w-full mx-auto'>
          <div className='sm:flex flex-row-reverse items-center justify-center'>
            <div className='flex items-center justify-center sm:w-1/2 mx-auto'>
              <img
                src='hero-Illustration.png'
                alt='hero-image'
                className='w-[400px] sm:w-[900px]'
              />
            </div>
            <div className='w-full sm:w-1/2'>
              <div className='mt-4'>
                <div className='sm:flex text-sm items-center justify-start mb-6 hidden'>
                  {ratings.map((item) => (
                    <Star size={16} fill='#FF962A' strokeWidth={0} key={item} />
                  ))}
                  <p className='font-semibold ml-2'>Rate 4.8/5 (243 reviews)</p>
                </div>
                <h1 className='font-bold text-4xl sm:text-5xl  text-left'>
                  Create your portfolio in minutes.
                </h1>
                <p className='text-lg mt-4'>
                  With Fiber, you can setup your own personal portfolio in
                  munutes with dozens of premade, beautiful templates.
                </p>
              </div>
              <div className='mt-6 text-center sm:flex items-center space-x-4'>
                <Button className='bg-primary rounded w-full sm:w-40  hover:bg-purple-800 mb-6 sm:mb-0'>
                  Start Free Trial
                </Button>

                <a
                  href='#'
                  className='text-center sm:text-left font-bold underline underline-offset-4 text-primary sm:w-full'
                >
                  View Examples
                </a>
              </div>
              <div className='mt-6'>
                <div className='flex items-center justify-start space-x-2'>
                  <CheckCircle2
                    fill='#45B19E'
                    strokeWidth={2}
                    size={32}
                    className='text-white'
                  />
                  <p className='text-lg'>No Credit Card Required</p>
                </div>
                <div className='flex items-center justify-start space-x-2'>
                  <CheckCircle2
                    fill='#45B19E'
                    strokeWidth={2}
                    size={32}
                    className='text-white'
                  />
                  <p className='text-lg'>10 Free Templates</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
