import React from 'react'
import {ScrollTrigger, SplitText} from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <div className='flex-center h-screen'>
      <h1 className='text-4xl font-bold text-green-500'>Hello World</h1>
    </div>
  )
}

export default App