import { BsLinkedin, BsGithub } from "react-icons/bs"

export const Footer = () => {
  return (
    <>
        <div className="bg-gradient-to-r from-purple-300 to-emerald-400 h-[6px] w-full my-auto"></div>
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
