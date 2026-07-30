import { ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { certificates } from '@/lib/site-data'

export function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-20 bg-primary py-20 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-lime uppercase">
            Certifications
          </span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance sm:text-4xl">
            Certified, compliant and export-ready
          </h2>
          <p className="mt-4 text-primary-foreground/75">
            Our facility and products are backed by recognised national and international standards.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {certificates.map((cert, i) => (
            <Reveal
              key={cert}
              direction="scale"
              delay={(i % 6) * 70}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-4 py-6 text-center backdrop-blur-sm transition-colors hover:bg-white/[0.12]"
            >
              <ShieldCheck className="size-8 text-lime" aria-hidden="true" />
              <span className="font-display font-bold">{cert}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
