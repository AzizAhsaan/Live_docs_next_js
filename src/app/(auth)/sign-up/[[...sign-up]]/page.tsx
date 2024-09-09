import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SignUpPage = (props: Props) => {
  return (
   
    <main className='auth-page'>
        <SignUp />
    </main>
  )
}

export default SignUpPage