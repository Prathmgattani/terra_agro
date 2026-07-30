'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { faqs } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl lg:text-[2.75rem]">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-foreground sm:text-lg">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-primary transition-transform duration-300',
                      isOpen && 'rotate-45',
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
