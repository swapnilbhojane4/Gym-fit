import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'
import Programs from './components/Programs/Programs'
import Plans from './components/Plans/Plans'

function App() {

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
    from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero />
      <Programs />
      <Plans />
      <Workout />
      {/*  <Generator /> */}
      <Routes>
        <Route
          path="/generator"
          Component={Generator}
        />
      </Routes>

    </main>
  )
}

export default App
