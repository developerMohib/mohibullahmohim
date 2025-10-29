'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FloatingParticles() {
    const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, delay: number, duration: number }>>([])

    useEffect(() => {
        // Generate particles only on client
        const generatedParticles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4
        }))
        setParticles(generatedParticles)
    }, [])

    if (particles.length === 0) {
        return null // Don't render on server
    }

    return (
        <>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </>
    )
}