'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CodeStreams() {
    const [streams, setStreams] = useState<Array<{ id: number, delay: number, duration: number }>>([])

    useEffect(() => {
        const generatedStreams = Array.from({ length: 8 }, (_, i) => ({
            id: i,
            delay: i * 0.5,
            duration: 2 + Math.random() * 2
        }))
        setStreams(generatedStreams)
    }, [])

    if (streams.length === 0) return null

    return (
        <>
            {streams.map((stream) => (
                <motion.div
                    key={stream.id}
                    className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                    style={{
                        left: `${stream.id * 12}%`,
                        top: '20%',
                        width: '2px',
                        height: '100px',
                    }}
                    animate={{
                        y: [-100, 400],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: stream.duration,
                        repeat: Infinity,
                        delay: stream.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </>
    )
}