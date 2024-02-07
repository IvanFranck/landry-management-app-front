import { useState } from "react"
import { Squash as Hamburger } from "hamburger-react"
import { AnimatePresence, motion } from "framer-motion"

export const NavMobile = () => {

    const [isOpen, setOpen] = useState(false)
    const menuLinks = [
        {
            title: "home",
            path: "/"
        },
        {
            title: "commandes",
            path: "/commands"
        }
    ]

    return (
        <div className="w-full bg-white border-b border-b-gray-200 grid grid-cols-4 px-2 py-3 justify-items-center items-center mb-4">
            <a href="#" className="col-span-1 justify-self-start">LOGO</a>
            <h2 className="col-span-2 text-lg font-semibold">Commandes</h2>
            <div className=" z-20 col-span-1 justify-self-end">
                <Hamburger color={isOpen ? "#fff" : "#000"} toggled={isOpen} size={20} onToggle={setOpen} />
            </div>
            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -600 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -600 }}
                            transition={{ duration: 0.3 }}
                            className="fixed z-10 top-0 left-0 right-0 h-full shadow-2xl p-5 bg-neutral-950 text-white"
                        >
                            <ul className="h-full flex flex-col justify-center gap-6">
                                {menuLinks.map((route, idx) => (
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10,
                                        }}
                                        key={route.title}
                                        className="w-full p-1 text-center"
                                    >
                                        <a
                                            href={route.path}
                                            className="text-2xl"
                                        >
                                            <span className="uppercase">{route.title}</span>
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}