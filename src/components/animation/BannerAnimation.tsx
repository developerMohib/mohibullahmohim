import { CodeStreams } from "./CodeStreams";
import { FloatingParticles } from "./FloatingParticles";
import { motion } from 'framer-motion';

export const AnimatedGrid = () => (
    <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(147,197,253,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.05)_1px,transparent_1px)] bg-[size:64px_64px]"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
);

export const BackgroundEffects = ({ orbs }: { orbs: React.ReactNode }) => (
    <div className="absolute inset-0 overflow-hidden">
        {orbs}
        <FloatingParticles />
        <AnimatedGrid />
        <CodeStreams />
    </div>
);

export const AnimatedRings = () => (
    <>
        <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
            className="absolute inset-2 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl flex items-center justify-center border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        />
    </>
);