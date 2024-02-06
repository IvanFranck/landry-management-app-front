import { useState } from "react"
import { Squash as Hamburger } from "hamburger-react"
import { routes } from "@/routes"

export const NavMobile = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="w-full bg-white border-b border-b-gray-200 grid grid-cols-4 px-4 py-3 justify-items-center items-center">
            <a href="#" className="col-span-1 justify-self-start">LOGO</a>
            <h2 className="col-span-2 text-lg font-semibold">Commandes</h2>
            <div className=" z-20 col-span-1 justify-self-end">
                <Hamburger color={isOpen ? "#fff" : "#000"} toggled={isOpen} size={20} onToggle={setOpen} />
            </div>

            {
                isOpen && (
                    <div className="fixed z-10 top-0 left-0 right-0 h-full shadow-2xl p-5 bg-neutral-950 text-white">
                        <ul className="h-full flex flex-col justify-center gap-6">
                            {routes.map((route) => (
                                <li
                                    key={route.title}
                                    className="w-full p-1 text-center"
                                >
                                    <a
                                        href={route.href}
                                        className="text-2xl"
                                    >
                                        <span className="uppercase">{route.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}