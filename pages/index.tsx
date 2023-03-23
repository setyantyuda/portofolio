import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const rows = [];
  for (var i = 0; i < 60; i++) {
    rows.push(
      <div 
        className="bubble" 
        key={i} 
        style={{
          "--size": `${5+Math.random()*4}rem`,
          "--distance": `${10+Math.random()*4}rem`,
          "--position": `${-2+Math.random()*110}%`,
          "--time": `${2+Math.random()*2}s`,
          "--delay": `${-1*(2+Math.random()*2)}s`
        }}
      >
      </div>
    );
  }

  return (
    <>
      <div className='h-[650px] relative'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full space-y-3'>
          <p className='text-white font bold text-7xl'>Hello World</p>
          <p className='text-white italic font bold'>{`"Every line of code tells a story"`}</p>
        </div>
      </div>
      <div className="footer">
        <div className="bubbles">
          {rows}
        </div>
        <div className="content">
          <div className='w-9/12 mx-auto leading-relaxed py-16 text-white space-y-8'>
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
