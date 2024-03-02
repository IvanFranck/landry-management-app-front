import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { CustomerStep } from "./multistep-creation-form/customer-step";
import { ServiceStep } from "./multistep-creation-form/service-step";

export function CommandCreationDrawer() {

    const [isOpen, setOpen] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)

    return (
        <div>
            <Button variant='ghost' className="p-0">
                <Plus className="grow-0 text-blue-600" size={24} onClick={() => setOpen(!isOpen)} />
            </Button>

            <AnimatePresence>
                {
                    isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 600 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 600 }}
                            transition={{ duration: 0.3 }}
                            className="fixed z-10 top-0 left-0 right-0 h-full text-white"
                        >
                            <div className="min-h-screen w-full bg-white flex flex-col">
                                <div className="w-full grow-0">
                                    <Header onClose={() => setOpen(false)} />
                                </div>
                                <div className="grow-0 w-full flex flex-col space-y-1 bg-green-600 px-4 py-2">
                                    <span className="text-gray-200">Total</span>
                                    <h3 className="text-3xl font-bold">0 Fcfa</h3>
                                </div>
                                <div className="w-full grow flex flex-col justify-between">
                                    <div className="w-full grow text-black">
                                        {currentStep === 1 && <CustomerStep />}
                                        {currentStep === 2 && <ServiceStep />}
                                    </div>
                                    <div className="grow-0 w-full flex flex-row justify-between">
                                        <Button disabled={currentStep <= 1} onClick={() => setCurrentStep(currentStep - 1)} variant="secondary" className="rounded-none bg-red-500 rounded-tr-2xl px-3 py-6">
                                            <ChevronLeft size={28} strokeWidth={2} className="text-white" />
                                        </Button>
                                        <Button onClick={() => setCurrentStep(currentStep + 1)} variant="secondary" className="rounded-none bg-red-500 rounded-tl-2xl px-3 py-6">
                                            <ChevronRight size={28} strokeWidth={2} className="text-white" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

function Header({ onClose }: { onClose: () => void }) {
    return (
        <div className="w-full px-4 py-5 flex flex-row items-center justify-between text-lg font-medium">
            <Button variant='ghost' className="p-0 grow-0">
                <X className="text-blue-600" onClick={onClose} size={24} />
            </Button>
            <h2 className="grow text-center text-black">Création d'une commande</h2>
        </div>
    )
}