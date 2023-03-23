import { Container } from "@/container/container"

export const Navbar = () => {
  return (
    <div className="py-6 bg-[#e9eac0] w-full fixed z-9999 shadow-2xl">
        <Container>
            <div className="flex space-x-8 text-black justify-end font-semibold">
                <span>Home</span>
                <span>About</span>
                <span>Work</span>
                <span>Contact</span>
            </div>
        </Container>
    </div>
  )
}
