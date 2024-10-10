import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'
import Programs from './components/Programs/Programs'
import Plans from './components/Plans/Plans'

function App() {

  return (
    <>
      <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
        <BrowserRouter>
          <Hero />
          <Programs />
          <Plans />
          <Routes>
            <Route
              path="/generator"
              element={<Generator />}
            />
            {/* <Route
              path="/workout"
              Component={Workout}
            /> */}
          </Routes>
        </BrowserRouter>
      </main>
    </>

  )
}

export default App
