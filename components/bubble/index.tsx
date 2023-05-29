/* eslint-disable @next/next/no-img-element */

import classNames from "classnames"

type Props = {
    icon?: any
    alt?: any
    big?: any
    small?: any
}

export const Bubble:React.FC<Props> = ({icon, alt, big, small}) => {
  return (
    <div className={
        classNames("bg-white mx-auto shadow-xl h-20 w-20 rounded-full hover:scale-110 ease-in transition-all",
            {"p-6": big}, 
            {"p-5": small}, 
        )
    }>
        <img alt={alt} src={icon} />
    </div>
  )
}
