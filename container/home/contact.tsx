import { HiOutlineArrowSmDown } from "react-icons/hi"
import { MdEmail } from "react-icons/md"

export const Contact = () => {
  return (
    <div className='mx-auto max-w-[1000px] px-6 md:px-0 mb-32 contact'>
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
  )
}
