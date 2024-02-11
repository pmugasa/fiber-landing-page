import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .required('Your name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be atleast 8 characters')
    .required('Password is required'),
})

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const inputfields = [
    {
      id: 1,
      name: 'name',
      placeholder: 'John Doe',
      type: 'text',
      label: 'Your Name',
    },
    {
      id: 2,
      name: 'email',
      placeholder: 'john@example.com',
      type: 'email',
      label: 'E-mail',
    },
    {
      id: 3,
      name: 'password',
      placeholder: 'At least 8 characters',
      type: 'password',
      label: 'Password',
    },
  ]

  const onSubmit = (data) => {
    console.log(data)
    alert('Thank you for submitting the form')
  }

  return (
    <>
      <main className='w-full flex flex-col min-h-screen items-center mx-auto py-12 bg-white'>
        <div className=''>
          <div className='w-full'>
            <h1 className='text-xl font-bold'>Fiber</h1>

            <h2 className='text-4xl font-bold mt-12 max-w-sm'>
              Create your Fiber account
            </h2>

            <form className='mt-6' onSubmit={handleSubmit(onSubmit)}>
              {inputfields.map((input) => (
                <div
                  key={input.id}
                  className='grid w-full max-w-sm  items-center gap-1.5 my-6'
                >
                  <Label htmlFor={input.id} className='font-bold'>
                    {input.label}
                  </Label>
                  <Input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className='flex items-center max-w-sm space-x-2'>
                <Checkbox id='terms' />
                <Label htmlFor='terms' className='text-md'>
                  By creating an account on Fiber, you agree to the
                  <span className='text-primary underline underline-offset-2 font-bold ml-2'>
                    Terms & Condtions.
                  </span>
                </Label>
              </div>
              <Button className='w-full max-w-sm mt-4 rounded text-md'>
                Create Fiber Account
              </Button>

              <p className='mt-4'>
                Already have an account?{' '}
                <span className='text-primary ml-2'>Sign in</span>
              </p>
            </form>
          </div>
          <div className='hidden'>image</div>
        </div>
      </main>
    </>
  )
}

export default SignUp
