/* eslint-disable @next/next/no-img-element */
import { Bubble } from "@/components/bubble"
import { Contact } from "@/container/home/contact"
import { Footer } from "@/container/home/footer"
import { TechStack } from "@/container/home/stack"
import Image from "next/image"
import { BsLinkedin, BsGithub } from "react-icons/bs"

const Home = () => {
  return (
    <>
      <div className='mx-auto max-w-[1000px] px-6 md:px-0 mb-16'>
        <div className='w-full flex justify-between pt-48 hero'>
          <div className='md:w-8/12 space-y-6'>
            <p className='font-semibold text-2xl animate-bounce'>Hello!</p>
            <h1 className='font-bold md:text-7xl md:h-20 h-32 text-6xl text-transparent bg-gradient-to-r from-emerald-200 to-purple-400 bg-clip-text'>{"It's me, Bayu"}</h1>
            <h2 className=''>
                {"I'm"} a passionate Front-end Developer based <br/> in Depok, Indonesia 📍
            </h2>
            <div className="flex space-x-5">
              <BsLinkedin size={32} className="hover:scale-110 ease-in transition-all"/>
              <BsGithub size={32} className="hover:scale-110 ease-in transition-all"/>
            </div>
          </div>
          <div className="profile-wrap md:block hidden">
            <div className='profile-pic'></div>
          </div>
        </div>

        <TechStack/>

      </div>

      {/* About section*/}
      <div className="py-1 mt-24 about-wrap">
        <div className="space-y-3 bg-neutral-100 py-16 about">
          <div className='mx-auto max-w-[1000px] px-6 md:px-0'>
            <div className="md:flex md:space-x-14 space-y-8 md:space-y-0">
              <Image src="/about.jpg" alt="about" width={450} height={400} className="rounded-xl shadow-2xl"/>
              <div className="space-y-3">
                <div className="text-3xl font-semibold text-neutral-400">About me</div>
                <h3 className="text-xl font-semibold">
                  &quot;{"Every line of code tells a story"}&quot;
                </h3>
                <p>
                  {"Behind every piece of code lies a story, a tale of a problem that needed solving, a creative solution that was discovered, and the journey that the programmer went through to make it happen."}
                </p>
                <p>
                  {"Anyway, my name is Bayu. I’m a Front End Engineer with experience in web development. I’m passionate to challenge myself for something new, and likely to work together as a team to achieve a target."}
                </p>
                <p>
                  {" I take pride in developing impactful web applications that cater to the needs of others."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
