
import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/exercise'
import Button from './Button'

function Header(props) {
  const { index, title, description } = props
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}

export default function Generator(props) {
  const {poison, setPoison, goal, setGoal, updateWorkout } = props
  const [showModal, setShowModal] = useState(false)
  const [muscles, setMuscles] = useState([]);

  // let showModal = false

  function toggleModal() {
    setShowModal(!showModal)
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }

    if (muscles.length > 1) {
      return
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    if (muscles.length === 2) {
      setShowModal(false)
    }

  }

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
    </SectionWrapper>

  )
}
