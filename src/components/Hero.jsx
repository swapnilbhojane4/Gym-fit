import React from 'react'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import './Hero.css'
import Header from './Header/Header'

export default function Hero() {
    return (
        <>
            <Header />
            <div className='min-h-screen flex flex-col lg:flex-row items-center justify-center text-center w-full mx-auto'>
                {/* Left Section - Text and Button */}
                <div className='flex flex-col gap-14 '>
                    <p>IT'S TIME TO GET</p>
                    <div className='hero-text gap-14'>
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span> Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                    </div>
                    {/*  <h1 className='font-semibold  text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
                        JIM <span className='text-blue-400'>Fit</span>
                    </h1> */}
                    <div>
                        <span>We will help you to build your ideal body and live up your life to fullest</span>
                    </div>

                    <div className='figures'>
                        <div>
                            <span>+100</span>
                            <span>Experts</span>
                        </div>
                        <div>
                            <span>+500</span>
                            <span>members joined</span>
                        </div>
                        <div>
                            <span>50+</span>
                            <span>fitness programs</span>
                        </div>
                    </div>
                    <button className='px-8 py-4 mx-auto rounded-md border-[2px] bg-slate-950 border-blue-400 blueShadow duration-200'>
                        <p>Get Started</p>
                    </button>
                </div>

                {/* Right Section - Image */}
                <div className='lg:w-1/2 bg-slate-950 flex items-center justify-center'>
                    <img src={hero_image} alt='' className='hero_image' />
                    <img src={hero_image_back} alt="" className='hero_image_back' />
                </div>
            </div>
        </>


    )
}
