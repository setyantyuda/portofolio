import { Link } from "react-scroll"

export const Navbar = () => {
  return (
    <div className="py-6 w-full bg-white fixed z-9999 shadow-xl px-6 md:px-24">
      <div className="flex text-black justify-between font-semibold">
        <div className="text-2xl cursor-pointer">
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            Bayu.dev
          </Link>
        </div>
        <div className="space-x-8 md:block hidden my-auto">
          <span className="cursor-pointer">
            <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
          </span>
          <span className="cursor-pointer">
            <Link to="about" spy={true} smooth={true} offset={-250} duration={500}>About</Link>
          </span>
          <span className="cursor-pointer">
            <Link to="work" spy={true} smooth={true} offset={-250} duration={500}>Work</Link>
          </span>
          <span className="cursor-pointer">
            <Link to="contact" spy={true} smooth={true} offset={-250} duration={500}>Contact</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
