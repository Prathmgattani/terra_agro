import { Reveal } from '@/components/reveal'
import { processSteps } from '@/lib/site-data'
import { ArrowRight } from 'lucide-react'

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-20 overflow-hidden bg-[#0e2410] py-24 text-white lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold tracking-[0.2em] text-lime uppercase">
            Manufacturing Process
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance text-white sm:text-4xl lg:text-[2.75rem]">
            From farm-fresh produce to export-ready ingredients
          </h2>
          <p className="mt-5 text-lg text-white/70">
            A controlled nine-stage journey engineered to lock in colour, flavour and nutrition at
            every step.
          </p>
        </Reveal>

        <ol className="relative mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.slice(0, 3).map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={(i % 3) * 90}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-lime/40"
            >
              <span className="font-display text-5xl font-extrabold text-white/10">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
              <span className="absolute top-6 right-6 size-2 rounded-full bg-lime" />
            </Reveal>
          ))}
        </ol>
        <a href="/process" className="mt-10 inline-flex items-center gap-2 rounded-full border border-lime/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-lime hover:text-[#0b2410]">
          Discover Our Process <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
