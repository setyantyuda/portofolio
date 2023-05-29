/* eslint-disable @next/next/no-img-element */
import { Bubble } from "@/components/bubble"
import Image from "next/image"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { HiOutlineArrowSmDown } from "react-icons/hi"
import { MdEmail } from "react-icons/md"

const Home = () => {
  return (
    <>
      <div className='mx-auto max-w-[1000px] px-6 md:px-0 mb-16'>
        <div className='w-full flex justify-between pt-48 hero'>
          <div className='md:w-8/12 space-y-6'>
            <p className='font-semibold text-2xl animate-bounce'>Hello!</p>
            <h1 className='font-bold md:text-7xl md:h-20 h-32 text-6xl text-transparent bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text'>{"It's me, Bayu"}</h1>
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
        <div className="flex space-x-8 mt-12">
          <div className="my-auto font-semibold text-lg w-2/12">
            Tech Stack
          </div>
          <div className="bg-gradient-to-r from-purple-300 to-emerald-400 h-[2px] w-full my-auto"></div>
        </div>
        <div className="grid md:grid-cols-7 grid-cols-3 mt-5 gap-4">
          <Bubble alt={"HTML"} icon={"icon/html.png"} big/>
          <Bubble alt={"CSS3"} icon={"icon/css.png"} big/>
          <Bubble alt={"Sass"} icon={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"} small/>
          <Bubble alt={"JS"} icon={"icon/js.png"} big/>
          <Bubble alt={"TS"} icon={"https://img.icons8.com/fluency/48/null/typescript--v2.png"} small/>
          <Bubble alt={"react"} icon={"icon/react.png"} small/>
          <Bubble alt={"Tailwind"} icon={"https://img.icons8.com/plasticine/100/null/tailwind_css.png"} small/>
          <Bubble alt={"Git"} icon={"https://img.icons8.com/color/48/null/git.png"} small/>
          <Bubble alt={"Visual Studio Code"} icon={"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"} small/>
          <Bubble alt={"Firebase"} icon={"https://img.icons8.com/color/48/google-firebase-console.png"} small/>
        </div>
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
      
      <div className='mx-auto max-w-[1000px] px-6 md:px-0 mb-32 contact'>
        {/* Contact section*/}
        <div className="mt-24 space-y-3">
          <div className="text-3xl font-semibold text-neutral-400">Contact</div>
          <div className="flex space-x-3">
            <div className="my-auto text-lg">{"I'm"} really eager to collaborate with you, hit me up!</div>
            <HiOutlineArrowSmDown size={32} className="animate-bounce"/>
          </div>
          <div className="flex space-x-8">
            <div className="flex space-x-6">
              <div className="bg-white mx-auto shadow-xl h-20 w-20 text-neutral-600 rounded-full p-5 hover:scale-110 ease-in transition-all">
                <MdEmail size={42} className=""/>
              </div>
              <div className="my-auto">
                <div className="font-bold text-xl">E-mail</div>
                <div>setyantyuda@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-800 h-32 text-white pt-6 md:pt-0">
        <div className="mx-auto max-w-[1000px] px-6 md:px-0 md:flex justify-between h-full space-y-4 md:space-y-12">
          <div className="my-auto md:text-left text-center">Copyright © 2023. All rights are reserved</div>
          <div className="flex space-x-5 justify-center my-auto">
            <BsLinkedin size={32} className="hover:scale-110 ease-in transition-all"/>
            <BsGithub size={32} className="hover:scale-110 ease-in transition-all"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
