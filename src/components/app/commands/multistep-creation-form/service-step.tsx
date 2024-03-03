import { motion, AnimatePresence } from "framer-motion"
export function ServiceStep() {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}

                transition={{ duration: 0.3 }}
                className="w-full h-full bg-slate-400"
            >
                <h1>Service step</h1>

            </motion.div>
        </AnimatePresence>
    )
}