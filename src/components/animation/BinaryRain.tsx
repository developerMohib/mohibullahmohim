'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function BinaryRain() {
    const [streams, setStreams] = useState<Array<{ id: number, left: string, value: string }>>([])

    useEffect(() => {
        // Generate binary streams only on client
        const generatedStreams = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            value: Math.random() > 0.5 ? '1' : '0'
        }))
        setStreams(generatedStreams)
    }, [])

    if (streams.length === 0) {
        return null
    }

    return (
        <>
            {streams.map((stream) => (
                <motion.div
                    key={stream.id}
                    className="absolute text-green-400/30 font-mono text-sm"
                    style={{
                        left: stream.left,
                    }}
                    animate={{
                        y: [-100, 600],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                >
                    {stream.value}
                </motion.div>
            ))}
        </>
    )
}