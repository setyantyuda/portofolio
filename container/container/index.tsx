
type Props = {
    children: any
}

export const Container:React.FC<Props> = ({children}) => {
  return (
    <div className="mx-auto w-11/12">
        {children}
    </div>
  )
}
