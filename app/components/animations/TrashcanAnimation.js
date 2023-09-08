import { motion, AnimatePresence } from 'framer-motion'

export default function TrashcanAnimation({ children, motionKey }) {
    return (
        <motion.div
            initial={{
                scale: 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
            key={motionKey}
            animate={{
                scale: 1,
            }}
            exit={{
                scale: 0,
            }}
        >
            {children}
        </motion.div>
    )
}
