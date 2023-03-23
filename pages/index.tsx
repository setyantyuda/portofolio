import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { Container } from '@/container/container'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const rows = [];
  for (var i = 0; i < 50; i++) {
    rows.push(
      <div 
        className="bubble" 
        key={i} 
        style={{
          "--size": `${2+Math.random()*4}rem`,
          "--distance": `${6+Math.random()*4}rem`,
          "--position": `${-5+Math.random()*110}%`,
          "--time": `${2+Math.random()*2}s`,
          "--delay": `${-1*(2+Math.random()*2)}s`
        }}
      >
      </div>
    );
  }

  return (
    <>
      <Container>
        <div className='h-[650px] my-auto relative'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-between'>
            <div className='w-8/12 space-y-5'>
              <p className='text-white font-semibold text-5xl animate-bounce'>Hello!</p>
              <p className='text-white font-bold text-7xl'>{"It's me, Bayu"}</p>
              <p className='text-white  font bold'>{
                "As a Front End Developer, my expertise lies in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. I take pride in developing impactful web applications that cater to the needs of others."
                }
              </p>
              <p className='text-white italic font bold'>{
                "I welcome you to connect with me on social media, and don't hesitate to reach out if you'd like to collaborate or exchange ideas. Let's work together to create something great!"
                }
              </p>
            </div>
            <div className='w-3/12'>
                alsldkflaksdj
            </div>
          </div>
        </div>
      </Container>
      <div className="footer">
        <div className="bubbles">
          {rows}
        </div>
        <div className="content">
            <div className='leading-relaxed w-11/12 mx-auto py-16 text-white space-y-8'>
              <span className='text-xl font-semibold pr-3'>Certainly!</span>
              {`"Every line of code tells a story" is a powerful statement that captures 
              the essence of a programming portfolio. Behind every piece of code lies a story - 
              a tale of a problem that needed solving, a creative solution that was discovered, 
              and the journey that the programmer went through to make it happen. From the initial 
              concept and design to the testing and deployment, each line of code contributes to the 
              story of the program's creation.`}
            </div>
        </div>
      </div>
    </>
  )
}
