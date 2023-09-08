import { motion, AnimatePresence } from 'framer-motion'

export default function SpinningPencil({ children, motionKey }) {
    return (
        <motion.div
            key={motionKey}
            initial={{ scale: 0 }}
            animate={{
                rotate: 360,
                scale: 1,
            }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
            exit={{
                scale: 0,
                rotate: 0,
            }}
            // whileTap={{
            //     scale: 0,
            // }}
            
        >
            {children}
        </motion.div>
    )
}
