"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
    value: string // e.g., "3x", "40%", "2h"
    duration?: number
}

export function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    // Extract number and suffix from value
    const match = value.match(/^(\d+)(.*)$/)
    const targetNumber = match ? parseInt(match[1]) : 0
    const suffix = match ? match[2] : ""

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true)

                    const startTime = Date.now()
                    const animate = () => {
                        const now = Date.now()
                        const progress = Math.min((now - startTime) / duration, 1)

                        // Easing function for smooth animation
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
                        const currentCount = Math.floor(easeOutQuart * targetNumber)

                        setCount(currentCount)

                        if (progress < 1) {
                            requestAnimationFrame(animate)
                        } else {
                            setCount(targetNumber)
                        }
                    }

                    requestAnimationFrame(animate)
                }
            },
            { threshold: 0.5 }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [targetNumber, duration, hasAnimated])

    return (
        <span ref={ref} className="inline-block">
            {count}{suffix}
        </span>
    )
}
