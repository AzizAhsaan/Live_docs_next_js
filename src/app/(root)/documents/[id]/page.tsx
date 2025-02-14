import CollaborativeRoom from '@/components/CollaborativeRoom'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { getDocument } from '@/lib/actions/room.actions'
import { getClerkUsers } from '@/lib/actions/user.actions'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Document = async ({params:{id}}:SearchParamProps) => {
  const clerkUser = await currentUser()
  if(!clerkUser){
    redirect('/sign-in')
  }
  const room = await getDocument({roomId:id,userId:clerkUser.emailAddresses[0].emailAddress})
  if(!room){
    redirect('/')
  }
  //TODO: Assess the permissions of the user to access the document
  const userIds = Object.keys(room.usersAccesses)
  const users  = await getClerkUsers({userIds});
  const usersData = users.map((user:User)=>({
    ...user,
    userType:room.usersAccesses[user.email]?.includes('room:write') ? 'editor' :'viewer'
  }))
  const currentUserType = room.usersAccesses[clerkUser.emailAddresses[0].emailAddress]?.includes('room:write') ? 'editor' :'viewer'
  return (
    <main className='flex w-full flex-col items-center'>
       <CollaborativeRoom currentUserType={currentUserType} users={usersData}  roomId={id} roomMetadata={room.metadata}/>
    </main>
  )
}

export default Document