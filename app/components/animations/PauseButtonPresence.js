import { motion, AnimatePresence } from 'framer-motion'

export default function PauseButtonPresence({ children, motionKey }) {
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
            animate={{
                scale: 1,
            }}
            exit={{
                scale: 0,
            }}
            className='m-auto w-40 h-40'
        >
            {children}
        </motion.div>
    )
}
