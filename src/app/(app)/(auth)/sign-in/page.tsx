import SignInView from '@/modules/auth/ui/views/sign-in-view'
import { caller } from '@/trpc/server'
import { redirect } from 'next/navigation';
import React from 'react'

export const dynamic = 'force-dynamic'; // Force dynamic rendering for this page

const SignInPage = async() => {
    const session = await caller.auth.session();
    if(session.user){
        redirect('/');
    }
  return (
    <SignInView />
  )
}

export default SignInPage
