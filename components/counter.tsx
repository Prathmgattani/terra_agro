'use client'

import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  value: number
  suffix?: string
  duration?: number
}

export function Counter({ value, suffix = '', duration = 1800 }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.round(eased * value))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
