import { SignIn } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const SignInPage = (props: Props) => {
  return (
   <main className='auth-page'>
    <SignIn/>
   </main>
  )
}

export default SignInPage