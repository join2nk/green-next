import { Loader2 } from 'lucide-react'
import React from 'react'

export default function LoadingPage() {
  return (
    <div className='w-full h-full p-40 flex items-center justify-center '>
      <Loader2 className='w-10 h-10 animate-spin' />
    </div>
  )
}
