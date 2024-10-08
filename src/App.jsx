import { useState } from 'react' 
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'
import Programs from './components/Programs/Programs'

function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
    from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Programs />
      <Generator />
      <Workout />
    </main>
  )
}

export default App
