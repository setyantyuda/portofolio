import { Container } from "@/container/container"

export const Navbar = () => {
  return (
    <div className="py-6 bg-[#F0D48F] w-full fixed z-9999 shadow-2xl">
        <Container>
            <div className="flex space-x-8 justify-end font-semibold">
                <span>Home</span>
                <span>About</span>
                <span>Work</span>
                <span>Contact</span>
            </div>
        </Container>
    </div>
  )
}
