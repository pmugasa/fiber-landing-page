import {
  Menu,
  CheckCircle2,
  Star,
  Timer,
  Code,
  TabletSmartphone,
} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useReducer } from 'react'

const App = () => {
  const ratings = [1, 2, 3, 4, 5]
  const cards = [
    {
      title: 'Build in minutes',
      description:
        'With a selection of premade templates, you can build out a portfolio in less than 10 minutes.',
      icon: <Timer strokeWidth={2} size={32} />,
    },
    {
      title: 'Add custom CSS',
      description:
        'Customize your personal portfolio even more with the ability to add your own custom CSS styles.',
      icon: <Code strokeWidth={2} size={32} />,
    },
    {
      title: 'Responsive',
      description:
        'All Fiber templates are fully responsive to ensure the experiance is seemless across all devices.',
      icon: <TabletSmartphone strokeWidth={2} size={32} />,
    },
  ]

  const users = [
    {
      name: 'Sarah Andrews',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHwwg',
      revenue: 100,
      comment:
        'Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.',
    },
    {
      name: 'Matthew Higgins',
      img: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
      revenue: 20,
      comment:
        "I have been getting A LOT of leads ever since I user Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!",
    },
    {
      name: 'Janice Dave',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
      revenue: 30,
      comment:
        'I only just started freelancing this year and I have already made more than I ever made in my full-time job. The templates are just so amazing.',
    },
  ]
  return (
    <>
      <main className=''>
        <nav className='w-full mx-auto max-w-screen-xl p-8'>
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
              <Button className='rounded bg-primary hover:bg-blue-800'>
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
        <section
          id='hero'
          className='w-full mx-auto max-w-screen-xl p-8 pb-24 '
        >
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
                <Button className='bg-primary rounded w-full sm:w-40  hover:bg-blue-800 mb-6 sm:mb-0'>
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
        <section className='w-full bg-white py-14'>
          <div className='mx-auto max-w-screen-xl p-8 w-full'>
            <h2 className='text-primary font-bold mb-8 text-lg'>Why Fiber?</h2>
            <h1 className='text-3xl sm:4xl font-bold mb-8 sm:w-1/2'>
              A good portfolio means good employability.
            </h1>
            <div className='sm:flex items-center sm:space-x-20'>
              {cards.map((card) => (
                <div key={card.title} className='my-10'>
                  <div className='text-primary my-2'>{card.icon}</div>

                  <h3 className='font-bold my-3'>{card.title}</h3>
                  <p className='text-lg'>{card.description}</p>
                </div>
              ))}
            </div>
            <div className='bg-primary  rounded-lg px-8 pt-8 sm:flex items-center mt-20'>
              <div className='sm:w-1/2 sm:p-8'>
                <h3 className='text-white font-bold text-4xl'>
                  Diversify your portfolio
                </h3>
                <p className='text-lg text-white mt-6 text-wrap mb-4'>
                  Create an even more impressive portfolio by creating case
                  studies for your projects. Simply follow our step-by-step
                  guide.
                </p>
                <Button className='w-full sm:w-40 text-primary font-bold bg-white mb-16 hover:bg-blue-50'>
                  Start Free Trial
                </Button>
              </div>
              <div className='sm:w-1/2 sm:pt-8'>
                <img src='Page Image.png' alt='portfolio' className='h-full' />
              </div>
            </div>
          </div>
        </section>
        <section className='w-full bg-white'>
          <div className='mx-auto max-w-screen-xl p-8 w-full bg-white'>
            <div className='w-full sm:grid grid-cols-3 gap-3'>
              {users.map((user) => (
                <Card key={user.name} className='my-6'>
                  <CardHeader>
                    <div className='flex items-center space-x-2'>
                      <Avatar>
                        <AvatarImage src={user.img} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className='text-md text-primary font-bold'>
                          {user.name}
                        </CardTitle>
                        <CardDescription>
                          ${user.revenue}k in revenue
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-lg'>{user.comment}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant='outline'
                      className='w-full bg-white rounded outline-primary border-primary text-primary font-bold'
                    >
                      View {user.name.split(' ')[0]}'s Portfolio
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
