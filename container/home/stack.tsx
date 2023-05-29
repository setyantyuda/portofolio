import { Bubble } from '@/components/bubble'

export const TechStack = () => {
  return (
    <>
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
    </>
  )
}
