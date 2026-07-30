'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const go = useCallback(
    (dir: number) => setIndex((prev) => (prev + dir + count) % count),
    [count],
  )

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % count), 6000)
    return () => clearInterval(timer)
  }, [count])

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
          Client Testimonials
        </span>
        <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
          Trusted by buyers around the world
        </h2>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((t) => (
              <figure key={t.name} className="w-full shrink-0 px-2">
                <Quote className="mx-auto size-10 text-brand-light" aria-hidden="true" />
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-balance text-foreground sm:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-display font-bold text-primary">{t.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all',
                  i === index ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-brand-light',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
